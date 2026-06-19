const express = require("express");
const noteModel = require("../models/noteModel")

const noteCreation = async  (req, res) => {
    const {title, description, tags} = req.body;

    if (!title || !description || !tags) {
  return res.status(400).json({
    success: false,
    message: "All fields are required"
  });
}

    const note = await noteModel.create({
        title,
        description,
        tags,
        user:req.user.id
    })

    res.status(201).json({
        success: true,
        message: "Note Created Successfully !!"
    })
}

const noteDeletion = async (req, res) => {
  try {

    const note = await noteModel.findById(
      req.params.id
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found"
      });
    }

    await note.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Note deleted successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
module.exports = {noteCreation, noteDeletion};