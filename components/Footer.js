import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`${styles["footer"]} container`} id="contact">
      <div className={styles["footer__previous"]}>
        <a className={styles["footer__previous--link"]} href="#">
          <i
            className={`${styles["footer__previous--icon"]} bi-chevron-compact-up`}
          ></i>
        </a>
      </div>
      <h2 className={styles["footer--title"]}>Get In Touch</h2>
      <p className={`${styles["footer__content--description"]} my-3`}>
        Contact me at{" "}
        <mark className="mark hover-grow-2">rothesasombrea@gmail.com</mark>.
        Although I may not be able to respond immediately, my inbox is always
        open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>
      <div className={`${styles["footer__content--links"]} my-2`}>
        <a
          href="https://www.instagram.com/rothesamarie/"
          aria-label="Instagram"
        >
          <i className={`${styles["footer__content--icon"]} bi-instagram`}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rothesamariesombrea/"
          aria-label="LinkedIn"
        >
          <i className={`${styles["footer__content--icon"]} bi-linkedin`}></i>
        </a>
      </div>
      <p className={`${styles["footer--foot"]} py-2`}>Rothesa Marie Sombrea</p>
    </footer>
  );
}
