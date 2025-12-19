import React, { useContext, useEffect, useState } from "react";
import "./AddNote.css";
import NoteContext from "../../context/notes/noteContext.jsx";

const AddNote = () => {
  const { addNote, editNote, editingNote, stopEditing } = useContext(NoteContext);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  // Pre-fill form if editing
  useEffect(() => {
    if (editingNote) {
      setNote({
        title: editingNote.title,
        description: editingNote.description,
        tag: editingNote.tag || "",
      });
    } else {
      setNote({ title: "", description: "", tag: "" });
    }
  }, [editingNote]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      // Update existing note
      editNote(editingNote._id, note.title, note.description, note.tag);
      stopEditing(); // stop editing after update
    } else {
      // Add new note
      addNote(note.title, note.description, note.tag);
    }
    // Clear form
    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <form className="mt-3 addnote-form" onSubmit={handleSubmit}>
      <div className="addnote-row">
        <div className="form-floating mb-3 addnote-input">
          <input
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Title"
            required
          />
          <label htmlFor="title">Title</label>
        </div>

        <div className="form-floating mb-3 addnote-input">
          <input
            type="text"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={handleChange}
            className="form-control"
            placeholder="Tag"
          />
          <label htmlFor="tag">Tag</label>
        </div>
      </div>

      <div className="form-floating mb-3">
        <textarea
          id="description"
          name="description"
          className="form-control"
          placeholder="Description"
          value={note.description}
          onChange={handleChange}
          style={{ height: "174px" }}
          required
        ></textarea>
        <label htmlFor="description">Description</label>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default AddNote;
