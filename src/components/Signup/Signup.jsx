import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, phone, password } = credentials;

    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const json = await response.json();

      if (response.status === 400) {
        setError(json.error || "Invalid Details");
        return;
      }

      // Save authToken and Redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Internal Server Error");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="container mt-5"
      style={{
        maxWidth: "500px",
        padding: "25px",
        border: "1px solid lightgray",
        borderRadius: "10px",
        marginBottom:"12px"
      }}
    >
      <h2 className="text-center mb-4">Create an Account</h2>

      {error && (
        <div className="alert alert-danger py-2 text-center">{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            minLength={3}
            required
            value={credentials.name}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            value={credentials.email}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            required
            value={credentials.phone}
            onChange={onChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            minLength={8}
            required
            value={credentials.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
