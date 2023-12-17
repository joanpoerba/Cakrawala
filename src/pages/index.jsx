import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Team from "@site/src/components/HomepageFeatures/Team";

import styles from "./index.module.css";
import TechStack from "../components/HomepageFeatures/TechStack";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { SpeedInsights } from "@vercel/speed-insights/react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={[clsx("hero hero--primary", styles.heroBanner)]}>
      <div className="w-full flex flex-col items-center">
        <div className="px-3 md:px-32 lg:px-52">
          <p className="text-3xl es:text-5xl font-bold">{siteConfig.title}</p>
          <p className="text-md md:text-lg my-16">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="flex flex-row items-center gap-x-3 button button--secondary button--md"
              to="/docs/category/sumatera"
            >
              <IoArrowForwardCircleOutline className="text-4xl" />
              <span className="text-xl">See more!</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <Team />
      <TechStack />
      <footer>
        <p className="text-center px-14 md:p-0">
          &copy; Copyright Ketjeh Nusantara | 2023 | All rights served
        </p>
      </footer>
      <SpeedInsights />
    </Layout>
  );
}
