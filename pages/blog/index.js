import { getAllPosts } from "../../utils/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./index.module.scss";

export default function BlogIndex({ allPosts }) {
  const post_hero = allPosts[0];
  const posts = allPosts.slice(1);

  return (
    <>
      <Navbar isDark={true}></Navbar>
      <section className={`${styles["blog"]} container`}>
        <h1 className={`${styles["blog--title"]} mb-2`}>Blog</h1>
        <div className={styles["blog__content"]}>
          <div className={styles["blog__post-hero__container"]}>
            <a className="post-card" href={`/blog/${post_hero.slug}`}>
              <div className={styles["blog__post-hero"]}>
                <div className={styles["blog__post-hero__cover"]}>
                  <img
                    className={styles["blog__post-hero__cover--image"]}
                    src={post_hero.coverImage}
                  ></img>
                </div>
                <div className={styles["blog__post-hero__details"]}>
                  <p
                    className={
                      styles["blog__post-hero__details--date-published"]
                    }
                  >
                    {post_hero.date}
                  </p>

                  <h3 className={styles["blog__post-hero__details--title"]}>
                    {post_hero.title}
                  </h3>
                  <p className={styles["blog__post-hero__details--excerpt"]}>
                    {post_hero.excerpt}
                  </p>
                </div>
              </div>
            </a>
          </div>
          {posts.map((post) => (
            <div className={styles["blog__post-sub__container"]}>
              <a
                className="post-card"
                key={post.slug}
                href={`/blog/${post.slug}`}
              >
                <div className={styles["blog__post-sub"]}>
                  <div className={styles["blog__post-sub__cover"]}>
                    <img
                      className={styles["blog__post-sub__cover--image"]}
                      src={post.coverImage}
                    ></img>
                  </div>
                  <div className={styles["blog__post-sub__details"]}>
                    <p
                      className={
                        styles["blog__post-sub__details--date-published"]
                      }
                    >
                      {post.date}
                    </p>

                    <h3 className={styles["blog__post-sub__details--title"]}>
                      {post.title}
                    </h3>
                    <p className={styles["blog__post-sub__details--excerpt"]}>
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gradient">
        <Footer></Footer>
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
