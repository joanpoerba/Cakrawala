import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import About from "@site/src/components/HomepageFeatures/About";
import Team from "@site/src/components/HomepageFeatures/Team";

import styles from "./index.module.css";
import TechStack from "../components/HomepageFeatures/TechStack";

import { SpeedInsights } from "@vercel/speed-insights/react";

function HomepageHeader() {
  return (
    <>
      <header className={[clsx("hero bg-transparent", styles.heroBanner)]}>
        <div className="w-full flex flex-col items-center">
          <div className="px-3 md:px-32 lg:px-52">
            <p className="es:text-2xl font-medium text-black italic tracking-widest">
              Hello
            </p>
            <p className="es:text-5xl font-medium text-black italic tracking-widest">
              Indonesia!
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <About />
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
