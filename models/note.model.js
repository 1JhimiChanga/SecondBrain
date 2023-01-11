const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notesSchema = new Schema(
    {
        title: {
            type: String,
        },
        content: {
            type: String,
        },
        priority: {
            type: Number
        },
        completed: {
            type: Boolean
        },
        dueDate: {
            type: Date
        },
        group: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const NoteCollection = mongoose.model("Notes", notesSchema);
module.exports = { NoteCollection, notesSchema };