import Link from "next/link";
import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={`${styles["hero"]} container`}>
      <div className={styles["hero__content"]}>
        <div className={styles["hero__content__intro"]}>
          <div className="animation-slide-right">
            <img
              className={styles["hero__content__intro--profile-picture"]}
              src="/assets/images/placeholder-hero-profile.png"
              alt="A profile picture of Rothesa Marie Sombrea"
            ></img>
          </div>
        </div>
        <div className={styles["hero__content__summary"]}>
          <div className="animation-slide-left">
            <h1
              className={`${styles["hero__content__intro--greeting"]}`}
            >
              Hello!
            </h1>
            <h1 className={`${styles["hero__content__intro--statement"]}`}>
              I'm Rothesa Marie Sombrea,
              <br />a Bookkeeper and an Accounting Staff.
            </h1>
          </div>
          <div
            className={`${styles["hero__content__intro--links"]} my-1 animation-slide-left`}
            style={{ animationDelay: "0.1s" }}
          >
            <a
              href="https://www.instagram.com/rothesamarie/"
              aria-label="Instagram"
            >
              <i
                className={`${styles["hero__content__intro--icon"]} bi-instagram`}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rothesamariesombrea/"
              aria-label="LinkedIn"
            >
              <i
                className={`${styles["hero__content__intro--icon"]} bi-linkedin`}
              ></i>
            </a>
          </div>

          <div
            className="animation-slide-left"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="#skills">
              <button className="btn hover-grow-2">Read More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["hero__next"]}>
        <a
          className={styles["hero__next--link"]}
          href="#skills"
          aria-label="Projects"
        >
          <i
            className={`${styles["hero__next--icon"]} bi-chevron-compact-down`}
          ></i>
        </a>
      </div>
    </div>
  );
}
