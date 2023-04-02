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
  duree: Number,
  path: String,
  affiche: String
});

// Modèle pour les musiques
const Musique = mongoose.model('Musique', musiqueSchema);

Musique.deleteMany({}).then(function(){
  console.log("Data deleted"); // Success
}).catch(function(error){
  console.log(error); // Failure
});

// Créer des musiques
const musique1 = new Musique({
  titre: 'Bohemian Rhapsody',
  artiste: 'Queen',
  album: 'A Night at the Opera',
  duree: 354,
  path: 'musiques/BohemianRhapsody.mp3',
  affiche: 'https://i.pinimg.com/originals/f8/4b/d7/f84bd76e01dfa9605ab6b1f4c1c46403.jpg'
});

const musique2 = new Musique({
  titre: 'Feu de bois',
  artiste: 'Damso',
  album: 'Lithopédion',
  duree: 183,
  path: 'musiques/FeuDeBois.mp3',
  affiche: 'https://www.thebackpackerz.com/wp-content/uploads/2018/09/damso-lithopedion-backpackerz.jpg'
});

const musique3 = new Musique({
  titre: 'Borderline',
  artiste: 'Columbine',
  album: 'Adieu, au revoir',
  duree: 168,
  path: 'musiques/Borderline.mp3',
  affiche: 'https://raplume.eu/wp-content/uploads/2019/04/D00vYMgX4AAoYLp.jpg'
});

// Enregistrer les musiques dans la base de données
async function insertMusiques() {
  await Musique.insertMany([musique1, musique2, musique3]);
  console.log('Musiques inserted successfully!');
  mongoose.disconnect();
}

insertMusiques();
