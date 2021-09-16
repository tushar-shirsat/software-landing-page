import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import Youtube from 'react-youtube'
import {useState} from 'react'


const PageContent = () => {
  const [video,setVideo] = useState(); 
  const opts = {
    height: '390',
    width: '800px',
    playerVars: {
        autopaly: 1,
    }
}
  return (
    <div className="pageContent">
      <section className="about">
        <div className="about-container">
          <div className="video-box">
            <img
              src="http://themeht.com/softino/html/ltr/images/mackbook/01.png"
              alt="video"
              className="video-image"
            />
            <div className="play-icon" onClick={() => setVideo(!video)}>
              <div className="play-wrap">
                <PlayArrowOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="about-content">
            <h3>
              Softino Is Built For <span>Software</span>  Like You. With Useful Features An
              Intuitive Interface And <span>Powerful Design</span>  Built By A Community Of
              Developers, It Helps You Focus On What You Do Best.
            </h3>
          </div>
        </div>
      </section>
      {video && <Youtube videoId="P_wKDMcr1Tg" opts={opts} className="youtube" />}
    </div>
  );
};

export default PageContent;
