module.exports = app => {
    const musics = require("../controllers/onzer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new music
    router.post("/", musics.create);
  
    // Retrieve all musics
    router.get("/", musics.findAll);
  
    // Retrieve a single music with id
    router.get("/:title", musics.findOne);
  
    // Update a music with id
    router.put("/:title", musics.update);
  
    // Delete a music with id
    router.delete("/:title", musics.delete);
  
    // Delete all musics
    router.delete("/", musics.deleteAll);
  
    app.use('/api/musics', router);
  };