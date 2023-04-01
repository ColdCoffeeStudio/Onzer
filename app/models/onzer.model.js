module.exports = mongoose => {
    const Music = mongoose.model(
      "music",
      mongoose.Schema(
        {
            title: {
                type: String,
                required: [true, 'The title is required']
            },
            artist: {
                type: String,
                required: [true, 'The artist is required']
            },
            album: {
                type: String,
                required: [true, 'The album is required']
            },
            year: {
                type: Number,
                required: [true, 'The release date is required'],
                min: [1887, 'The release date must be greater than 1887'],
                max: [2023, 'The release date must be less than 2024']
            },
            style: {
                type: String,
                required: [true, 'The style is required'],
                enum: ['pop', 'hip-hop', 'rock', 'r&b', 'soul', 'reggae', 'country', 'funk', 'folk', 'jazz', 'disco', 'classical', 'electro', 'latino', 'blues', 'metal']
            }
        },
      )
    );
  
    return Music;
  };