module.exports = mongoose => {
    const Music = mongoose.model(
      "music",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };