import AddNote from "../Notes/AddNote.jsx";
import { Link } from "react-router-dom";
import Notes from "../Notes/Notes.jsx";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="home-section">

        <div>
          <h4 className="display-4 fw-bold">Welcome to Quill Stack</h4>
          <p className="lead mt-3">
            Your personal cloud-based note-taking application.
          </p>
        </div>
        {/* <div className="mid" style={{height:"55vh", border:"1px solid lightgrey", borderRadius:"12px"}}></div> */}

        <div className="home-panels">
          {/* Left Panel */}
          <div className="home-left">
            <Link to={"/addnote"}>
              <h1>Add a Note</h1>
            </Link>
            <AddNote />
          </div>

          {/* Right Panel */}
          <div className="home-right">
            <Link to={"/yournotes"}>
              <h1 className="mb-3">Your Notes</h1>
            </Link>
            <Notes />
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
