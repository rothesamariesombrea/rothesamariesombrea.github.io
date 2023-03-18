import styles from "./FeaturedBlog.module.scss";

export default function FeaturedBlog({ featuredPosts }) {
  const featuredHeroPost = featuredPosts[0];
  const featuredMorePosts = featuredPosts.slice(1, 4);

  return (
    <section
      className={`${styles["featured-blog"]} container`}
      id="featured-blog"
    >
      <h2 className={`${styles["featured-blog--title"]} mb-2`}>
        Featured Blog
      </h2>
      <div className={styles["featured-blog__content"]}>
        <div className={styles["featured-blog__post-hero__container"]}>
          <a className="post-card" href={`/blog/${featuredHeroPost.slug}`}>
            <div className={styles["featured-blog__post-hero"]}>
              <div className={styles["featured-blog__post-hero__cover"]}>
                <img
                  className={styles["featured-blog__post-hero__cover--image"]}
                  src={featuredHeroPost.coverImage}
                ></img>
              </div>
              <p className={styles["featured-blog__post-hero--date-published"]}>
                {featuredHeroPost.date}
              </p>
              <h3 className={styles["featured-blog__post-hero--title"]}>
                {featuredHeroPost.title}
              </h3>
              <p className={styles["featured-blog__post-hero--excerpt"]}>
                {featuredHeroPost.excerpt}
              </p>
            </div>
          </a>
        </div>

        <div className={styles["featured-blog__post-sub__container"]}>
          {featuredMorePosts.map((post) => (
            <a
              className="post-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className={styles["featured-blog__post-sub"]}>
                <div className={styles["featured-blog__post-sub__cover"]}>
                  <img
                    className={styles["featured-blog__post-sub__cover--image"]}
                    src={post.coverImage}
                  ></img>
                </div>
                <div className={styles["featured-blog__post-sub--content"]}>
                  <p
                    className={
                      styles["featured-blog__post-sub--date-published"]
                    }
                  >
                    {post.date}
                  </p>
                  <h3 className={styles["featured-blog__post-sub--title"]}>
                    {post.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={styles["featured-blog__cta"]}>
        <a className={styles["featured-blog__cta--link"]} href="/blog">
          All posts
        </a>
      </div>
    </section>
  );
}
