import Image from "next/image";

const Home = () => {
  return (
    <div className="home">
      <div className="bg-animation">
        <img
          className="home-background"
          src="http://themeht.com/softino/html/ltr/images/pattern/01.png"
          alt="home"
        />
      </div>
      <div className="home-content">
        <div className="home-container">
            <div className="image-container">
            <img
                src="http://themeht.com/softino/html/ltr/images/banner/02.png"
                alt="home-image"
                className="home-content-img"
            />
            </div>
          <div className="container-right">
            <h5 className="home-heading">POWERFULL AND CRETIVE DESIGN</h5>
            <h1 className="home-heading2">
              Grow Your Software With <span>“Softino”</span>
            </h1>
            <p className="home-paregraph">
              Softino is an all-new stylish Software For device that can show
              you things. awareness, drive traffic, connect with customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
