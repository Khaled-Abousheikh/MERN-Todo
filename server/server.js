const mongoose = require("mongoose");
mongoose.Promsie = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/todo";
db.models = require("./model.js");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch((err) => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

module.exports = db;
