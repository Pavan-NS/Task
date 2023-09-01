import "./index.css";
const HomeSection = () => {
  return (
    <div className="home-container">
      <div className="width-container">
        <div className="first-container">
          <p className="discover">Discover the beauty of the tropics</p>
          <h1 className="h1">
            TROPICAL DESTINATION <span>For Student</span>
          </h1>
          <p className="lorem">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae
          </p>
          <div className="l">
            <button className="button-1">Signup</button>
          </div>
        </div>
        <div className="second">
          <img
            className="img"
            src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693563640/image_37_pg948m.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
export default HomeSection;
