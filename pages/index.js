import { getAllPosts } from "../utils/api";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import FeaturedBlog from "../components/FeaturedBlog";
import Footer from "../components/Footer";
import LearnMore from "../components/LearnMore";

export default function Home({ allPosts }) {
  const featuredPosts = allPosts.slice(0, 4);

  return (
    <>
      <div className="bg-gradient">
        <div className="bg-shapes">
          <Navbar></Navbar>
          <Intro></Intro>
          <img src="/images/wave_top.svg"></img>
        </div>
      </div>
      <LearnMore></LearnMore>
      <FeaturedBlog featuredPosts={featuredPosts}></FeaturedBlog>
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

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
