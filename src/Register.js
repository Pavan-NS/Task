import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import { Form } from "react-bootstrap";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [error, setError] = useState("");
  const [lengthErr, setlength] = useState("");
  const history = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { email, password, name };
    localStorage.setItem("user", JSON.stringify(user));

    if (!name || !email || !password || !phone || !profession) {
      setError("Invalid credentials");
    } else if (password.length < 6) {
      setlength("Password must be at least 6 characters long.");
    } else {
      history("/login");
    }
  };

  return (
    <div className="login template d-flex justify-content-center  vh-100 align-items-center bg-primary">
      <div className="form-container border border-danger p-5 rounded bg-white">
        <form onSubmit={handleSignup}>
          <h3 className="text-center">Register</h3>
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              type="name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your e-mail"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="number">Phone No</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Number"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Choose your Profession</label>
            <Form.Control
              as="select"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            >
              <option>Developer</option>
              <option>Artist</option>
              <option>Photographer</option>
              <option>Team Player</option>
              <option>Full Stack</option>
            </Form.Control>
          </div>

          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p className="text-end mt-2">
            Already Registered <Link to="/login">Sign In</Link>
          </p>
          {error && <p className="text-center text-danger">{error}</p>}
          {lengthErr && <p className="text-center text-danger">{lengthErr}</p>}
        </form>
      </div>
    </div>
  );
};
export default Register;
