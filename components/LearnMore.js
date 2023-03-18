import styles from "./LearnMore.module.scss";

export default function LearnMore() {
  return (
    <section className={`${styles["learn-more"]} container`} id="skills">
      <h2 className={`${styles["learn-more--title"]} text-center mb-2`}>
        Skills
      </h2>
      <div className={styles["learn-more__content"]}>
        <div className={styles["learn-more__content__banner"]}>
          <img
            src="/assets/images/undraw_data_re_80ws.svg"
            className={`${styles["learn-more__content__banner--image"]} hover-grow-1`}
            alt="Adjusting data"
          />
        </div>
        <div className={styles["learn-more__content__intro"]}>
          <p className={styles["learn-more__content__intro--description"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
        </div>
      </div>
      <div className={styles["learn-more__content"]}>
        <div className={styles["learn-more__content__intro"]}>
          <p className={styles["learn-more__content__intro--description"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
        </div>
        <div className={styles["learn-more__content__banner"]}>
          <img
            src="/assets/images/undraw_growth_analytics_re_pyxf.svg"
            className={`${styles["learn-more__content__banner--image"]} hover-grow-1`}
            alt="Analyzing data"
          />
        </div>
      </div>
      <div className={styles["learn-more__content"]}>
        <div className={styles["learn-more__content__banner"]}>
          <img
            src="/assets/images/undraw_team_collaboration_re_ow29.svg"
            className={`${styles["learn-more__content__banner--image"]} hover-grow-1`}
            alt="Work collaboration"
          />
        </div>
        <div className={styles["learn-more__content__intro"]}>
          <p className={styles["learn-more__content__intro--description"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
        </div>
      </div>
    </section>
  );
}
