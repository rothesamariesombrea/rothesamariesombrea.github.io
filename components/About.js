import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={`${styles["about"]} container`} id="about">
      <h2 className={`${styles["about--title"]} mb-2`}>About Me</h2>
      <div className={styles["about__content"]}>
        <div className={styles["about__content__summary"]}>
          <p className={styles["about__content__summary--description"]}>
            Hey! What's up?
          </p>
          <p className={styles["about__content__summary--description"]}>
            I'm Rothesa,L orem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
          </p>
          <p className={styles["about__content__summary--description"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
          <p className={styles["about__content__summary--description"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul className={styles["about__content__summary--links"]}>
            <li>
              <a href="https://www.linkedin.com/in/rothesamariesombrea/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rothesamarie/">Instagram</a>
            </li>
          </ul>
        </div>
        <div className={styles["about__content__banner"]}>
          <img
            className={`${styles["about__content__banner--image"]} hover-grow-2`}
            src="/images/profile-picture.jpg"
            alt="A profile picture of Rothesa Marie Sombrea"
          ></img>
        </div>
      </div>
    </section>
  );
}
