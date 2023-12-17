import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./index.module.css";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, "container")}>
          <Link
            className={clsx(
              "margin-horiz--xs",
              "button button--secondary button--lg",
            )}
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
          <Link
            className={clsx(
              "margin-horiz--xs",
              "button button--secondary button--lg",
            )}
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}