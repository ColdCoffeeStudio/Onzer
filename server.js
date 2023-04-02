const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Application express
const app = express();

// CORS
app.use(cors());

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/musiqueDB', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Schéma pour les musiques
const musiqueSchema = new mongoose.Schema({
  titre: String,
  artiste: String,
  album: String,
  duree: Number,
  path: String,
  affiche: String
});

// Modèle pour les musiques
const Musique = mongoose.model('Musique', musiqueSchema);

// Routes API
app.get('/api/musiques', async (req, res) => {
  const musiques = await Musique.find().select('-__v');
  res.send(musiques);
});

app.post('/api/musiques', async (req, res) => {
  const musique = new Musique({
    titre: req.body.titre,
    artiste: req.body.artiste,
    album: req.body.album,
    duree: req.body.duree,
    path: req.body.path,
    affiche: req.body.affiche
  });
  await musique.save();
  res.send(musique);
});

app.delete('/api/musiques/:id', async (req, res) => {
  const musique = await Musique.findByIdAndRemove(req.params.id);
  res.send(musique);
});



// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
