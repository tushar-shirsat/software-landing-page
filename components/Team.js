import TeamMember from "./TeamMember";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { teamMemberData } from "../data/teamMemberData";
import { useState,useEffect } from "react";

const Team = () => {

  const [scrollXPosition, setscrollXPosition] = useState(0);
  useEffect(() => {
    function updatePosition() {
      setscrollXPosition(window.innerWidth);
      console.log(window.innerWidth);
    }
    window.addEventListener('resize', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  // scrollXPosition>998 ? 3:2 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: scrollXPosition>998 ? 3: scrollXPosition<=785?1:2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="team">
      <h1>
        Meet Our Expert <span>Team Member</span> Will Ready For Your Service
      </h1>
      <div className="team-member-container">
        <Slider className="slider" {...settings}>
          {teamMemberData.map((data, index) => (
            <TeamMember {...data} key={index+(Math.random()*100)} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
