/*Import project dependencies*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./server.js");
const path = require("path");

/*Initialize Express server*/
const app = express();

/*Call body-parser and cors middleware*/
var corsOptions = {
  origin: "http://localhost:5000",
};
// app.use(cors(bodyOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./api"));

/*Create default route*/

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the REST API" });
});

/*Set PORT and listen for request*/
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
