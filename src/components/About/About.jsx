const About = () => {
  return (
    <>
      <section id="about-section" className="d-flex align-items-center justify-content-center text-center" style={{height:"100vh", border:"1px solid lightgrey", borderRadius:"12px" ,margin:"0 12px 12px 12px", padding:"10px", flexDirection:"column"}}>
        <h2 className="text-center mb-4">About Us</h2>
        <p className="fs-5 text-muted">
          Quill Stack is a modern MERN-based note-taking application designed to
          make your writing, organizing, and editing smooth and effortless.
          Whether you're a student, developer, or professional — Quill Stack
          helps you manage your ideas efficiently.
        </p>
      </section>
    </>
  );
};

export default About;
