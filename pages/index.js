import Head from "next/head";
import HomeCarousel from "../components/carousel/HomeCarousel";
import ContactUs from "../components/home/ContactUs";
import Greetings from "../components/home/Greetings";
import SatisfiedCustomersSlider from "../components/home/SatisfiedCustomersSlider";
import Services from "../components/home/Services";
import ServingYears from "../components/home/ServingYears";
import Training from "../components/home/Training";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naturallifes | Home</title>
        <meta
          name="description"
          content="Institute of natural medicine located at Thamel,"
        />
      </Head>
      {/* main markups for page */}
      <HomeCarousel />
      <Greetings />
      <Training />
      <Services />
      <ServingYears />
      <SatisfiedCustomersSlider />
      <ContactUs />
    </div>
  );
}
