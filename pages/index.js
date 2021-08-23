import Head from "next/head";

import { Header } from "@components/Organisms";
import { Main, Section, Hero } from "@components/Molecules";
import { Button } from "@components/Atoms";

import Footer from "@components/Footer";

import styles from "./Home.module.scss";

import info from "../config/info";

const homeConfig = {
  heroUrl:
    "https://storage.googleapis.com/gad-static-image/teemu-paananen-rd5uNIUJCF0-unsplash%20(Moyen)_1151x496.jpg"
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{"site_title"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <Section>
          <Hero src={homeConfig.heroUrl}>
            <h2 className={styles.hero_text_main}>
              <span
                className={`${styles.hero_text_block} ${styles.hero_bg} text-alt`}
              >
                Empire
              </span>
              <br />
              <span className={`${styles.hero_text_block} text-alt`}>
                Of Tomorrow
              </span>
            </h2>
            <h3 className={`${styles.hero_text_side} text-alt`}>
              <span>Let's Build a better Afica</span>
              <br />
              <span>And a better World</span>
            </h3>
            <div className={styles.button_container}>
              <Button>Rejounez Nous</Button>
              <Button alt>Savoir Plus</Button>
            </div>
          </Hero>
        </Section>
      </Main>
      <Footer />
    </>
  );
}
