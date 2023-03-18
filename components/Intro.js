import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <div className={`${styles["hero"]} container`}>
      <div className={styles["hero__content"]}>
        <div className={styles["hero__content__intro"]}>
          <div className="animation-slide-right">
            <h1
              className={`${styles["hero__content__intro--title"]} hover-grow-2`}
            >
              Rothesa Marie Sombrea
            </h1>
          </div>
          <div
            className={`${styles["hero__content__intro--links"]} my-1 animation-slide-right`}
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
        </div>
        <div className={styles["hero__content__summary"]}>
          <div className="animation-slide-left">
            <p
              className={`${styles["hero__content__summary--heading"]} hover-grow-2`}
            >
              Introduction
            </p>
            <h2
              className={`${styles["hero__content__summary--title"]} hover-grow-2`}
            >
              Bookkeeper, Accounting Staff
            </h2>
          </div>
          <div
            className="my-1 animation-slide-left"
            style={{ animationDelay: "0.1s" }}
          >
            <p
              className={`${styles["hero__content__summary--heading"]} hover-grow-2`}
            >
              Microsoft Office / Journal Entries / Financial Statements
            </p>
            <p
              className={`${styles["hero__content__summary--heading"]} hover-grow-2`}
            >
              Accounts Payable / Accounts Receivable / Resourcefulness
            </p>
            <p
              className={`${styles["hero__content__summary--heading"]} hover-grow-2`}
            >
              Attention to Detail / Time Management / Written Communication
            </p>
          </div>
          <div
            className="animation-slide-left"
            style={{ animationDelay: "0.2s" }}
          >
            <p
              className={`${styles["hero__content__summary--description"]} hover-grow-2`}
            >
              Offered to be a Bookkeeper after recognizing my skills, hard work,
              and receiving recommendation from the Municipality of Carles.
            </p>
            <p
              className={`${styles["hero__content__summary--description"]} hover-grow-2`}
            >
              Generates informative and comprehensive advice for the senior
              accountant to be submitted to the Land Bank of the Philippines,
              demonstrating expertise in financial analysis and communication.
            </p>
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
