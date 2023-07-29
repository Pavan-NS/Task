import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loggedUser = JSON.parse(localStorage.getItem("user"));
    console.log(loggedUser);
    if (mail === loggedUser.email && passwordLog === loggedUser.password) {
      localStorage.setItem("loggedIn", true);
      history("/");
      setError("");
      console.log("Login successful!");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login template d-flex justify-content-center  vh-100 align-items-center bg-primary">
      <div className="form-container border border-danger p-5 rounded bg-white">
        <form onSubmit={handleLogin}>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter Your E-mail"
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Password</label>
            <input
              value={passwordLog}
              onChange={(e) => setPasswordLog(e.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember Me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
          <p className="text-end mt-2">
            Forgot{" "}
            <a href="">
              Password?{" "}
              <Link to="/signup" className="ms-2">
                Sign Up
              </Link>
            </a>
          </p>
          {error && <p className="text-center text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default Login;
