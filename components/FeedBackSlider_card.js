import Image from "next/image";

const FeedBackSlider_card = ({src}) => {
    
  return (
    <div className="FeedBackSlider_card">
      <div className="FeedBackSlider_image-container">
        <Image
          src={src}
          alt="feeb-slider"
          layout="fill"
          className="feedBackImage"
        />
      </div>
      <div className="feedBackSlider_card-left">
        <p>
          Consectetur Recommended Professional and great experience, Nam
          pulvinar vitae neque et porttitor, Praesent sed nisi eleifend,
          adipisicing elitelit, sed do eiusmodas temporo incididunt Praesent sed
          nisi eleifend, Consectetur adipisicing elit,
        </p>
        <div className="testimonial-caption">
          <h5>Lana Roadse</h5>
          <label>CEO of Softino</label>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSlider_card;
