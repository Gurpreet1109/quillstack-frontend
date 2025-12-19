import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCopy,
  faShareFromSquare,
  faPenToSquare,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./YourNotes.css";
import { useContext } from "react";
import noteContext from "../../context/notes/noteContext.jsx";

const YourNotes = ({ note, updateNote }) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  return (
    <div className="card your-note-card">
      <div className="card-header">
        <ul
          className="nav nav-tabs card-header-tabs"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <li className="nav-item">
            <Link className="nav-link py-1 px-2 note" to="/">
              Note
            </Link>
          </li>
          <li className="nav-item mx-2">
            <FontAwesomeIcon
              className="nav-link py-1 px-2"
              icon={faShareFromSquare}
            />
          </li>
          <li className="nav-item mx-2">
            <FontAwesomeIcon
              className="nav-link py-1 px-2"
              icon={faPenToSquare}
              onClick={() => {
                updateNote(note);
              }}
            />
          </li>
          <li className="nav-item mx-2">
            <FontAwesomeIcon className="nav-link py-1 px-2" icon={faCopy} />
          </li>
          <li className="nav-item mx-2">
            <FontAwesomeIcon
              className="nav-link py-1 px-2"
              onClick={() => deleteNote(note._id)}
              icon={faTrash}
            />
          </li>
        </ul>
      </div>

      <div className="card-body p-3">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text custom-scroll note-desc">{note.description}</p>

        <Link to="/yournotes" className="btn btn-primary btn-sm">
          <FontAwesomeIcon icon={faFile} />
        </Link>
      </div>
    </div>
  );
};

export default YourNotes;
