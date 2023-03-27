<template>
    <div class="music-list">
        <h2>Music List</h2>
        <p>
            Hello World!
        </p>
    </div>
</template>
<script>
    const mongoose = require('mongoose');

    const musicSchema = new mongoose.Schema({
        id: {
            bsonType: "String",
            required: [true, 'The id is required'],
            description: "must be a string and is required"
          },
        title: {
            bsonType: "String",
            required: [true, 'The title is required'],
            description: "must be a string and is required"
          },
        artist: {
            bsonType: "String",
            required: [true, 'The artist is required'],
            description: "must be an string and is required"
          },
        album: {
            bsonType: "String",
            required: [true, 'The album is required'],
            description: "must be a string and is required"
          },
        year: {
            bsonType: "Number",
            min: [1887, 'The release date must be greater than 1887'],
            max: [2023, 'The release date must be less than 2024'],
            required: [true, 'The release date is required'],
            description: "Must be a number and is required"
          },
        style: {
            bsonType: "String",
            enum: ['pop', 'hip-hop', 'rock', 'r&b', 'soul', 'metal','reggae', 'country', 'funk', 'folk', 'jazz', 'disco', 'classical', 'electro', 'latino', 'blues','alternativ'],
            required: [true, 'The style is required'],
            description: "must be an array and is required"
          },
    });
</script>