import "./index.css";
const Destination = () => {
  return (
    <div className="o">
      <h1 className="our-des">Our Destination</h1>
      <div className="cards">
        <div className="card-1">
          <img
            alt="img"
            className="image1"
            src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693571892/card-image_owb0x0.png"
          />
          <h1 className="harvard">Harvard University</h1>
          <div className="space">
            <p className="g">
              Cambridge, Massachusetts, UK <span className="circle">...</span>
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            alt="img"
            className="image1"
            src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693571824/card-image_1_wbqews.png"
          />
          <h1 className="harvard">Oxford University</h1>
          <div className="space">
            <p className="g">
              Oxford, England <span className="circle">...</span>
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            alt="img"
            className="image1"
            src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693571828/card-image_2_itawpn.png"
          />
          <h1 className="harvard">Stanford University</h1>
          <div className="space">
            <p className="g">
              Stanford, California <span className="circle">...</span>
            </p>
          </div>
        </div>
        <div className="card-1">
          <img
            className="image1"
            alt="img"
            src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693571834/card-image_3_kjs7pq.png"
          />
          <h1 className="harvard">Nanyang University</h1>
          <div className="space">
            <p className="g">
              Nanyang Ave, Singapura <span className="circle">...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
