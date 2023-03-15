import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-gradient">
        <div className="bg-shapes">
          <Navbar></Navbar>
          <Intro></Intro>
          <img src="/images/wave_top.svg"></img>
        </div>
      </div>
      <Projects></Projects>
      <div className="bg-white">
        <About></About>
      </div>
      <div className="bg-gradient">
        <div className="bg-shapes">
          <img src="/images/wave_bottom.svg"></img>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
