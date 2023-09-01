import "./index.css";
const BookSection = () => {
  return (
    <div className="tropical-container">
      <div className="half-screen">
        <div className="half-container">
          <img
            className="discount-img"
            src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693574459/image_41_dhtju9.png"
          />
        </div>
        <div className="half-container">
          <div className="book-card">
            <h1 className="book-heading">Book Now</h1>
            <p className="book-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p>City</p>
            <input type="text" placeholder="Placeholder" className="input" />
            <div className="arrival-dep">
              <div className="in-section">
                <p>ARRIVAL</p>
                <input type="text" placeholder="10 October" className="input" />
              </div>
              <div className="in-section">
                <p>DEPARTURE</p>
                <input type="text" placeholder="11 October" className="input" />
              </div>
            </div>
            <div className="arrival-dep">
              <div className="in-section">
                <p className="text-center">STAR</p>
                <div className="btn-section">
                  <button className="btns">-</button>
                  <input placeholder="4" type="text" className="input2" />
                  <button className="btns">+</button>
                </div>
              </div>
              <div className="in-section">
                <p className="text-center">ROOM</p>
                <div className="btn-section">
                  <button className="btns">-</button>
                  <input placeholder="1" type="text" className="input2" />
                  <button className="btns">+</button>
                </div>
              </div>
            </div>
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
