const mongoose = require('mongoose');

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/musiqueDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Schéma pour les musiques
const musiqueSchema = new mongoose.Schema({
  titre: String,
  artiste: String,
  album: String,
  duree: Number
});

// Modèle pour les musiques
const Musique = mongoose.model('Musique', musiqueSchema);

// Créer des musiques
const musique1 = new Musique({
  titre: 'Bohemian Rhapsody',
  artiste: 'Queen',
  album: 'A Night at the Opera',
  duree: 354
});

const musique2 = new Musique({
  titre: 'Stairway to Heaven',
  artiste: 'Led Zeppelin',
  album: 'Led Zeppelin IV',
  duree: 482
});

const musique3 = new Musique({
  titre: 'Hotel California',
  artiste: 'Eagles',
  album: 'Hotel California',
  duree: 390
});

// Enregistrer les musiques dans la base de données
async function insertMusiques() {
  await Musique.insertMany([musique1, musique2, musique3]);
  console.log('Musiques inserted successfully!');
  mongoose.disconnect();
}

insertMusiques();
