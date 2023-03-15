export default function About() {
  return (
    <section className="about container" id="about">
      <h2 className="about--title mb-2">About Me</h2>
      <div className="about__content">
        <div className="about__content__summary">
          <p className="about__content__summary--description">
            Hey! What's up?
          </p>
          <p className="about__content__summary--description">
            I'm Jeffrey, a Toront-based Full-Stack Developer with a strong
            passion for innovative and creative ideas. Heavily interested in
            data-centric applications to which machine learning technologies can
            be applied to.
          </p>
          <p className="about__content__summary--description">
            My approach as a front-end developer emphasizes attention to detail
            and user-centered design, utilizing evidence to guide decisions and
            improve usability. Similarly, my methods of back-end development
            involve commonly used design patterns to structure databases,
            servers, and APIs to ensure that the client-side can function
            seamlessly while maintaining flexibility— adapting to current and
            future needs.
          </p>
          <p className="about__content__summary--description">
            I primarily use Javascript and Python as my secondary but I continue
            to study other languages as well. Check out the following links for
            more details:
          </p>
          <ul className="about__content__summary--links">
            <li>
              <a href="https://www.linkedin.com/in/jeffreyrampineda/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/jeffreyrampineda/">Github</a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/8550657/jeffrey-ram/">
                Stack Overflow
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/jeffreyrampineda/">LeetCode</a>
            </li>
          </ul>
        </div>
        <div className="about__content__banner">
          <img
            className="about__content__banner--image hover-grow-2"
            src="/images/profile-picture.jpg"
            alt="A profile picture of Jeffrey Ram Pineda"
          ></img>
        </div>
      </div>
    </section>
  );
}
