const Note = require("../models/Note.js");


const getAllNotes = async (req, res) => {
  const userId = req.userId;

  try {
    const notes = await Note.find({ userId});
    res.status(200).json({
      success: true,
      data: notes
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};

const getNote = async (req, res) => {
  try {
    //check if valid mongoDB id
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(400).json({
        success: false,
        message: "Note not found"
      });
    }
    res.status(200).json({
      success: true,
      data: note
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};

const createNote = async (req, res) => {
  const userId = req.userId;

  try {
    const note = await Note.create({
      ...req.body,
     userId 
    });
    res.status(201).json({
      success: true,
      data: note
    });
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};

const updateNote = async (req, res) => {
  try {
    //check if valid mongoDB id
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const note = await Note.findByIdAndUpdate(req.params.id);
    if (!note) {
      return res.status(400).json({
        success: false,
        message: "Note not found"
      });
    }
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    res.status(200).json({
      success: true,
      data: updatedNote
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    //check if valid mongoDB id
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ID"
      });
    }

    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(400).json({
        success: false,
        message: "Note not found"
      });
    } 
    res.status(200).json({
      success: true,
      data: {}
    });    
  } catch (error) {
    res.status(400).json({
      success: false
    });
  }
};


module.exports = {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
};

