import Head from "next/head";
import Header from "../components/Header";
import HomeSection from "../components/Home";
import PageContent from "../components/PageContent";
import Serviece from "../components/Serviece";
import Team from "../components/Team";
import WorkingProcess from "../components/WorkingProcess";
import Pricing from "../components/Pricing";
import FeedBack from "../components/FeedBack";
import Numbers from "../components/Numbers";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <Header />
      <HomeSection />
      <PageContent />
      <Serviece />
      <WorkingProcess />
      <Team />
      <Pricing />
      <FeedBack />
      <Numbers />
      <Blog />
      <Footer />
    </div>
  );
}
