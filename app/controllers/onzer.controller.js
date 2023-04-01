const db = require("../models");
const Music = db.musics;

// Create and Save a new Music
exports.create = (req, res) => {
  
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Title can not be empty!" });
        return;
    }else if(!req.body.artist){
        res.status(400).send({ message: "Artist can not be empty!" });
        return;
    }else if(!req.body.album){
        res.status(400).send({ message: "Album can not be empty!" });
        return;
    }else if(!req.body.year){
        res.status(400).send({ message: "Year can not be empty!" });
        return;
    }else if(!req.body.style){
        res.status(400).send({ message: "Style can not be empty!" });
        return;
    }

    // Create a Music
    const music = new Music({
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album,
        year: req.body.year,
        style: req.body.style
    });

    // Save Music in the database
    music
        .save(music)
        .then(data => {
            res.send(data);
        }
    ).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Music."
        });
    });

};

// Retrieve all Musics from the database.
exports.findAll = (req, res) => {

    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Music.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Musics."
            });
        });
  
};

// Find a single Music with an title
exports.findOne = (req, res) => {

    const title = req.params.title;

    Music.findById(title)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Music with title " + title });
            else res.send(data);
        })
  
};

// Update a Music by the title in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }

    const title = req.params.title;

    Music.findByIdAndUpdate(title, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Music with title=${title}. Maybe Music was not found!`
                });
            } else res.send({ message: "Music was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Music with title=" + title
            });
        });


};

// Delete a Music with the specified title in the request
exports.delete = (req, res) => {
    const title = req.params.title;

    Music.findByIdAndRemove(title)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Music with title=${title}. Maybe Music was not found!`
                });
            } else {
                res.send({
                    message: "Music was deleted successfully!"
                });
            }
        }
    ).catch(err => {
        res.status(500).send({
            message: "Could not delete Music with title=" + title
        });
    })
  
};

// Delete all Musics from the database.
exports.deleteAll = (req, res) => {
  Music.deleteMany({})
    .then(data => {
        res.send({
            message: `${data.deletedCount} Musics were deleted successfully!`
        });
        }
    ).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all Musics."
        });
    });

};