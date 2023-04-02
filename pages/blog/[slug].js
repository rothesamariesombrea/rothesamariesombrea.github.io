import { getPostBySlug, getAllPosts } from "../../utils/api";
import Navbar from "../../components/Navbar";
import markdownToHtml from "../../utils/markdownToHtml";
import Footer from "../../components/Footer";
import styles from "./BlogPost.module.scss";

export default function BlogPost({ post, allPosts, morePosts, preview }) {
  return (
    <>
      <Navbar isDark={true}></Navbar>
      <section className={`${styles["post"]} container`}>
        <div className={styles["post-main"]}>
          <h1 className={styles["post-main--title"]}>{post.title}</h1>
          <div className={styles["post-main__cover"]}>
            <img
              className={styles["post-main__cover--image"]}
              src={post.coverImage}
            ></img>
          </div>
          <p className={styles["post-main--date-published"]}>{post.date}</p>
          <div
            className={styles["post-main--content"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className={styles["post-side"]}>
          <h2 className={styles["post-side--title"]}>About Me</h2>
          <p className={styles["post-side--about-me"]}>
            I'm Rothesa,L orem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
          </p>

          <h2 className={styles["post-side--title"]}>More posts</h2>
          <div className={styles["post-side__posts"]}>
            {allPosts.map((sidePost) => (
              <a
                className="post-card"
                key={sidePost.slug}
                href={`/blog/${sidePost.slug}`}
              >
                <div className={styles["post-side__post"]}>
                  <div className={styles["post-side__post--title"]}>
                    <h3 className={styles["post-side__post--title"]}>
                      {sidePost.title}
                    </h3>
                  </div>
                  <div className={styles["post-side__post__cover"]}>
                    <img
                      className={styles["post-side__post__cover--image"]}
                      src={sidePost.coverImage}
                    ></img>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gradient">
        <Footer></Footer>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
