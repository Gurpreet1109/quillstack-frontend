import "./Notes.css";
import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../../context/notes/noteContext.jsx";
import YourNotes from "./YourNotes.jsx";
import { Modal } from "bootstrap";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  // State for editing note
  const [editingNote, setEditingNote] = useState({
    id: "",
    title: "",
    description: "",
    tag: "",
  });

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    if (isLoggedIn) {
      getNotes(); // fetch notes only if logged in
    }
  }, [isLoggedIn]);

  // Open modal & load note data
  const updateNote = (note) => {
    setEditingNote({
      id: note._id,
      title: note.title,
      description: note.description,
      tag: note.tag,
    });

    modalInstance.current = new Modal(modalRef.current);
    modalInstance.current.show();
  };

  // Handle input change
  const handleChange = (e) => {
    setEditingNote({
      ...editingNote,
      [e.target.name]: e.target.value,
    });
  };

  // Submit updated note
  const handleSubmit = (e) => {
    e.preventDefault();
    editNote(
      editingNote.id,
      editingNote.title,
      editingNote.description,
      editingNote.tag
    );
    modalInstance.current.hide();
  };

  return (
    <>
      {/* MODAL */}
      <div className="modal fade" ref={modalRef} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={editingNote.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                  />
                  <label htmlFor="title">Title</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    value={editingNote.tag}
                    onChange={handleChange}
                    placeholder="Tag"
                  />
                  <label htmlFor="tag">Tag</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={editingNote.description}
                    onChange={handleChange}
                    placeholder="Description"
                    style={{ height: "150px" }}
                    required
                  ></textarea>
                  <label htmlFor="description">Description</label>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close Note
                  </button>
                  <button className="btn btn-primary">Update Note</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* NOTES / HOME */}
      <div className="notes-section">
        {!isLoggedIn && (
          <p className="text-center my-5">
            You are not logged in. Please login to see your notes.
          </p>
        )}

        {isLoggedIn && notes.length === 0 && "No Notes to Display"}
        {isLoggedIn &&
          Array.isArray(notes) &&
          notes.map((note) => (
            <YourNotes key={note._id} note={note} updateNote={updateNote} />
          ))}
      </div>
    </>
  );
};

export default Notes;
