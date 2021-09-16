const PricingCard = ({ type }) => {
  return (
    <div
      className="pricing-card"
      style={{
        padding: `${type === "premium" ? "70px 30px" : "50px 30px"}`,
        background: `${type === "premium" ? "#ff512f" : "#ffffff"}`,
      }}
    >
      <div className="pricing-card-header">
        <h2 style={{ color: `${type === "premium" ? "#fff" : "#1c1d3e"}` }}>
          <span>$</span> 33
        </h2>
        <p style={{ color: `${type === "premium" ? "#fff" : "#5f5f5f"}` }}>
          Monthly Package
        </p>
        <h3 style={{ color: `${type === "premium" ? "#fff" : "#1c1d3e"}` }}>
          {type}
        </h3>
      </div>
      <div className="pricing-card-list">
        <ul
          className="list"
          style={{ color: `${type === "premium" ? "#fff" : "#5f5f5f"}` }}
        >
          <li>15 Analytics Compaign</li>
          <li>Unlimited Site licenses</li>
          <li>1 Database</li>
          <li>10 Free Optimization</li>
          <li>Html5 + Css3</li>
          <li>24/7 Customer Support</li>
        </ul>
      </div>
      <button
        style={{
          background: `${
            type === "premium"
              ? "#fff"
              : "linear-gradient(90deg, rgba(255,81,47,1) 0%, rgba(240,152,25,1) 80%)"
          }`,
          color: `${type === "premium" ? "#1c1d3e" : "#ffffff"}`,
        }}
      >
        purchase now
      </button>
    </div>
  );
};

export default PricingCard;
