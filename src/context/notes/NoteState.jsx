import { useState } from "react";
import NoteContext from "./noteContext.jsx";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  // Helper function to get token
  const getToken = () => {
    return localStorage.getItem("token");
  };

  /* =======================
     GET ALL NOTES
  ======================== */
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": getToken(),
        },
      });

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  /* =======================
     ADD NOTE
  ======================== */
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": getToken(),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      setNotes(notes.concat(json));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  /* =======================
     DELETE NOTE
  ======================== */
  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": getToken(),
        },
      });

      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  /* =======================
     EDIT NOTE
  ======================== */
  const editNote = async (id, title, description, tag) => {
    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": getToken(),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  /* =======================
     GET LOGGED-IN USER
  ======================== */
  const getUser = async () => {
    try {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": getToken(),
        },
      });

      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        getNotes,
        addNote,
        deleteNote,
        editNote,
        getUser,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
