
const Contact = () => {
  return (
    <>
      <section id="contact-section" className="d-flex justify-content-center text-center" style={{height:"100vh", border:"1px solid lightgrey", borderRadius:"12px" ,margin:"0 12px 12px 12px", padding:"10px", flexDirection:"column"}}>
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="fs-5 text-muted">
          Have any questions or feedback? We’d love to hear from you.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>

              <button className="btn btn-info w-100">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
