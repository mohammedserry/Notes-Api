const express = require("express");
const notesController = require("../controllers/notes.controller.js");
const requireAuth = require("../middlewares/requireAuth.js");

const router = express.Router();

router.use(requireAuth);

router
  .route("/")
  .get(notesController.getAllNotes)
  .post(notesController.createNote);

router
  .route("/:id")
  .get(notesController.getNote)
  .patch(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
