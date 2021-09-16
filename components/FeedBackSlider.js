import FeedBackSlider_card from "./FeedBackSlider_card"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedBackData } from "../data/FeedBackData";

const FeedBackSlider = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <a className="small-img">
              <img src={`http://themeht.com/softino/html/ltr/images/testimonial/0${3-i}.jpg`} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      };
    return (
        <div className="feedback-slider">
            <Slider {...settings} >
                {
                    feedBackData.map((data,index) =>(
                        <FeedBackSlider_card key={index*Math.random()*100} src={data.src} />
                    ))
                }

            </Slider>
        </div>
    )
}

export default FeedBackSlider
