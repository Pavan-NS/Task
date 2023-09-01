import "./index.css";
const Testimonals = () => {
  return (
    <div className="div1">
      <h1 className="text-center">Testimonals</h1>
      <div className="img-container">
        <div className="each-container">
          <img src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693574476/Ellipse_1_2_qtg2u6.png" />
          <h1 className="img-heading">Corey Korsgaard</h1>
          <hr className="hr-line" />
          <p className="img-para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="each-container">
          <img src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693574470/Ellipse_1_1_g9tct1.png" />
          <h1 className="img-heading">Jakob Aminoff</h1>
          <hr className="hr-line" />
          <p className="img-para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="each-container">
          <img src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693574463/Ellipse_1_xa5cke.png" />
          <h1 className="img-heading">Carla Press</h1>
          <hr className="hr-line" />
          <p className="img-para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Testimonals;
