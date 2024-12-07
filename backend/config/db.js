const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connecté")
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Quitter le processus en cas d'échec
  }
};

module.exports = connectDB;
