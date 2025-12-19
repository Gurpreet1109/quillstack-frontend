import Contact from "./components/Contact/Contact.jsx";
import NoteState from "./context/notes/NoteState.jsx";
import AddNote from "./components/Notes/AddNote.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Login from "./components/Login/Login.jsx";
import Notes from "./components/Notes/Notes.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import "./App.css";
import Alert from "./components/Alert/Alert.jsx"

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is alert" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addnote" element={<AddNote />} />
          <Route path="/yournotes" element={<Notes />} />
        </Routes>
        <Footer />
      </NoteState>
    </>
  );
}

export default App;
