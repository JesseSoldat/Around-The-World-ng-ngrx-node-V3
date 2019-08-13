const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connectToDb = () => {
  return mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {})
    .catch(err => {
      console.log("DB error: ", err);
    });
};

module.exports = connectToDb;
