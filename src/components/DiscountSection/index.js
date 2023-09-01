import "./index.css";
const DiscountSection = () => {
  return (
    <div className="tropical-container">
      <div className="half-screen">
        <div className="tp-2">
          <p className="off">Get 20% off for student</p>
          <h1 className="discount-heading">
            Student discounts available. Get ready for some fun in the sun!
          </h1>

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
      <div className="half-screen">
        <img
          className="discount-img"
          src="https://res.cloudinary.com/dgplpsvfp/image/upload/v1693574452/image_40_pedq1v.png"
        />
      </div>
    </div>
  );
};

export default DiscountSection;
