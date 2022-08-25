const mongoose = require("mongoose");
// const config = require("config");

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // const DB = config.get("MONGO_URI");
    // const conn = await mongoose.connect(DB, {
    //   // useNewUrlParser: true,
    //   // useUnifiedTopology: true,
    //   // useCreateIndex: true,
    // });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
