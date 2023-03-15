export default function Footer() {
  return (
    <footer className="footer container" id="contact">
      <div className="footer__previous">
        <a className="footer__previous--link" href="#">
          <i className="footer__previous--icon bi-chevron-compact-up"></i>
        </a>
      </div>
      <h2 className="footer--title">Get In Touch</h2>
      <p className="footer__content--description my-3">
        Contact me at{" "}
        <mark className="mark hover-grow-2">jeffreyrampineda@gmail.com</mark>.
        Although I may not be able to respond immediately, my inbox is always
        open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>
      <div className="footer__content--links my-2">
        <a
          href="https://www.instagram.com/jeffreyrampineda/"
          aria-label="Instagram"
        >
          <i className="footer__content--icon bi-instagram"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/8550657/jeffrey-ram/"
          aria-label="Stack Overflow"
        >
          <i className="footer__content--icon bi-stack-overflow"></i>
        </a>
        <a href="https://github.com/jeffreyrampineda/" aria-label="Github">
          <i className="footer__content--icon bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jeffreyrampineda/"
          aria-label="LinkedIn"
        >
          <i className="footer__content--icon bi-linkedin"></i>
        </a>
      </div>
      <p className="footer--foot py-2">Jeffrey Ram Pineda</p>
    </footer>
  );
}
