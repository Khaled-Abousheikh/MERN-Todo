const express = require("express");
const router = express.Router();
const Todo = require("./model");
router.get("/todos", (req, res, next) => {
  Todo.find({}, "action")
    .then((data) => res.json(data))
    .catch(next);
});
router.post("/todos", (req, res, next) => {
  console.log(req.body);
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty!",
    });
  }
});
router.delete("/todos/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});
module.exports = router;
