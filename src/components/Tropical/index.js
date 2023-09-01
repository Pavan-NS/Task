import "./index.css";
const Tropical = () => {
  return (
    <div>
      <img
        alt="img"
        className="sub"
        src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693566318/Subtract_tekofl.png"
      />
      <div className="tropical-container">
        <div className="half-screen">
          <div className="tp-1">
            <div className="tp-c">
              <img
                alt="img"
                className="avatar"
                src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693566763/avatar_w8kkoc.png"
              />
              <div className="p-2">
                <h1 className="heading">Jenny Wilson</h1>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
            <div className="tp-c">
              <img
                alt="img"
                className="avatar"
                src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693569722/avatar_1_az4nov.png"
              />
              <div className="p-2">
                <h1 className="heading">Jenny Wilson</h1>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
            <div className="tp-c">
              <img
                alt="img"
                className="avatar"
                src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693569729/avatar_2_k0ipgk.png"
              />
              <div className="p-2">
                <h1 className="heading">Jenny Wilson</h1>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="half-screen">
          <div className="tp-2">
            <h1 className="h-2">
              Tropical Adventure <span>for Students.</span>
            </h1>
            <p className="p-2">Student Tropical Vacation: Relax and Recharge</p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit</li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
            <button className="button-1">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tropical;
