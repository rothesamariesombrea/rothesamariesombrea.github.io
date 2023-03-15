export default function Intro() {
  return (
    <div className="hero container">
      <div className="hero__content">
        <div className="hero__content__intro">
          <div className="animation-slide-right">
            <h1 className="hero__content__intro--title hover-grow-2">
              Jeffrey Ram Pineda
            </h1>
          </div>
          <div
            className="hero__content__intro--links my-1 animation-slide-right"
            style={{ animationDelay: "0.1s" }}
          >
            <a
              href="https://www.instagram.com/jeffreyrampineda/"
              aria-label="Instagram"
            >
              <i className="hero__content__intro--icon bi-instagram"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/8550657/jeffrey-ram/"
              aria-label="Stack Overflow"
            >
              <i className="hero__content__intro--icon bi-stack-overflow"></i>
            </a>
            <a href="https://github.com/jeffreyrampineda/" aria-label="Github">
              <i className="hero__content__intro--icon bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jeffreyrampineda/"
              aria-label="LinkedIn"
            >
              <i className="hero__content__intro--icon bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="hero__content__summary">
          <div className="animation-slide-left">
            <p className="hero__content__summary--heading hover-grow-2">
              Introduction
            </p>
            <h2 className="hero__content__summary--title hover-grow-2">
              Full Stack Developer
            </h2>
          </div>
          <div
            className="my-1 animation-slide-left"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="hero__content__summary--heading hover-grow-2">
              HTML / CSS / SASS &amp; SCSS / React
            </p>
            <p className="hero__content__summary--heading hover-grow-2">
              MongoDB / PostgreSQL / MySQL / SQLite
            </p>
            <p className="hero__content__summary--heading hover-grow-2">
              MEAN &amp; JAMSTACK Experience
            </p>
          </div>
          <div
            className="animation-slide-left"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="hero__content__summary--description hover-grow-2">
              Experience in designing and developing user interfaces, testing
              &amp; debugging.
            </p>
            <p className="hero__content__summary--description hover-grow-2">
              Able to work independently and within a team.
            </p>
            <p className="hero__content__summary--description hover-grow-2">
              Creating clean, testable, maintainable and functional code is the
              highest priority.
            </p>
          </div>
        </div>
      </div>
      <div className="hero__next">
        <a className="hero__next--link" href="#projects" aria-label="Projects">
          <i className="hero__next--icon bi-chevron-compact-down"></i>
        </a>
      </div>
    </div>
  );
}
