import clsx from "clsx";
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
            <p className="es:text-2xl font-medium text-white italic tracking-widest">
              Halo
            </p>
            <p className="es:text-5xl font-medium text-white italic tracking-widest">
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
      <div className="flex flex-col items-center py-52">
        <div className="w-[90%] flex flex-col items-center">
          <p className="text-xl md:text-3xl font-bold text-center">
            Akses nyaman untuk setiap user
          </p>
          <img
            className="w-[75%] mt-10 hidden md:block"
            src="/img/mockup.png"
            alt=""
          />
          <img
            className="w-[85%] sm:w-[40%] mt-10 block md:hidden"
            src="/img/mobile.png"
            alt=""
          />
        </div>
      </div>
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
