import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./App.css";

const HomeNavbar = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [info, setInfo] = useState(false);

  const infoClick = () => {
    setInfo(!info);
  };
  const navigate = useNavigate();

  const handleToogle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Welcome {userName.name}</div>
        <button onClick={handleToogle} className="navbar-toogle">
          {isNavOpen ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        <div className={`navbar-links ${isNavOpen ? "show" : ""}`}>
          <button onClick={infoClick} className="button">
            Company Info
          </button>

          <button onClick={handleLogout} className="button">
            Logout
          </button>
        </div>
      </nav>
      {info ? (
        <div className="d-flex flex-column justify-content-center align-items-center detail-company">
          <h2 className="text-white">
            Company: Geeksynergy Technologies Pvt Ltd
          </h2>
          <p className="text-white">Address: Sanjayanagar, Bengaluru-56</p>
          <p className="text-white">Phone: XXXXXXXXX09</p>
          <p className="text-white">Email: XXXXXX@gmail.com</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default HomeNavbar;
