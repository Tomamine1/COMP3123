/*
Purpose:
Set up all of the routes/paths for our server
* */

const express = require("express")
const router = express.Router()
const NotesModel = require("../models/NotesModel.js")

// Fill in the routes and methods bellow from the lab instructions

// In URL you will see localhost: 8081/api/notes
router.post("/notes", async (request,response) => {
    //validation of the POST body
    if(!request.body.content){
        return response.status(400).send({
            message: "Note content in the POST body cannot be left empt"
        })
    }
    // if the content of the body existed
    try {
        const note = new NotesModel({
            noteTitle: request.body.content.noteTitle,
            noteDescription: request.body.content.noteDescription,
            priority: request.body.content.priority,
            dateAdded: request.body.content.dateAdded,
            dateUpdated: request.body.content.dateUpdated,
        })

        const savedNote = await note.save()
        response.status(201).send(savedNote)
    } catch(error) {
        response.status(500).send({
            message: error.message || "Some error occured while creating the note",
        })
    }
})

// GET - Retrieve all notes
router.get("/notes", async (request, response) => {
    try {
        const notes = await NotesModel.find();
        response.status(200).send(notes);
    } catch (error) {
        response.status(500).send({
            message: error.message || "Error retrieving notes"
        });
    }
});

// GET - Retrieve a note by ID
router.get("/notes/:id", async (request, response) => {
    try {
        const note = await NotesModel.findById(request.params.id);

        if (!note) {
            return response.status(404).send({
                message: "Note not found"
            });
        }

        response.status(200).send(note);
    } catch (error) {
        response.status(500).send({
            message: error.message || "Error retrieving note"
        });
    }
});

// PUT - Update a note by ID
router.put("/notes/:id", async (request, response) => {
    try {
        const updatedNote = await NotesModel.findByIdAndUpdate(
            request.params.id,
            request.body.content,
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return response.status(404).send({
                message: "Note not found"
            });
        }

        response.status(200).send(updatedNote);
    } catch (error) {
        response.status(500).send({
            message: error.message || "Error updating note"
        });
    }
});

// DELETE - Delete a note by ID
router.delete("/notes/:id", async (request, response) => {
    try {
        const deletedNote = await NotesModel.findByIdAndDelete(
            request.params.id
        );

        if (!deletedNote) {
            return response.status(404).send({
                message: "Note not found"
            });
        }

        response.status(200).send({
            message: "Note deleted successfully"
        });
    } catch (error) {
        response.status(500).send({
            message: error.message || "Error deleting note"
        });
    }
});


module.exports = router