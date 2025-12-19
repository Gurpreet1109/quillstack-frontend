import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer text-black " style={{margin:"0 12px 12px 12px", marginBottom:"0"}}>
      <div
        className=""
        style={{
          border: "1px solid lightgrey",
          borderRadius: "12px",
          padding: "10px",
          width:"100%"
        }}
      >
        <div className="row">
          {/* Brand */}
          <div className="col-md-4 mb-3">
            <h4 className="text-warning fw-bold">Quill Stack</h4>
            <p>
              A modern platform to write, edit, and share your ideas with the
              world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer-link text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning fw-semibold text-black">Connect</h5>
            <div className="d-flex align-items-center gap-3">
              <a href="https://github.com/Gurpreet1109" className="icon-link">
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/gurpreet1109"
                className="icon-link"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:gurpreetchahal1009@gmail.com"
                className="icon-link"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center py-3 mt-3 border-top border-secondary">
          © {new Date().getFullYear()} Quill Stack — All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
