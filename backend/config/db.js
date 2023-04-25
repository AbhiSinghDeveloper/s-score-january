const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin-sscore:11aa22bb33cc@cluster0.wpijf6v.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected to: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
