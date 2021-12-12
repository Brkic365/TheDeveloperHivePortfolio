import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

import logoIcon from "../public/logoIcon.svg";

import mainHoneycomb from "../public/honeycombs/main.svg";

import clientsIcon from "../public/numbers/clients.svg";
import codeIcon from "../public/numbers/code.svg";
import timeIcon from "../public/numbers/time.svg";

import speedIcon from "../public/offers/speed.svg";
import codeIconOffer from "../public/offers/code.svg";
import phoneIcon from "../public/offers/phone.svg";
import loadingIcon from "../public/offers/loading.svg";
import supportIcon from "../public/offers/support.svg";
import modernIcon from "../public/offers/modern.svg";
import techIcon from "../public/offers/tech.svg";
import browsersIcon from "../public/offers/browsers.svg";

import Navbar from "../Components/Navbar";
import Counter from "../Components/Counter";
import Offer from "../Components/Offer";
import Project from "../Components/Project";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
  const counters = [
    {
      id: 1,
      icon: clientsIcon,
      alt: "Graphic of clients",
      number: 34,
      plus: false,
      text: "Clients satisfied with our development and design",
    },
    {
      id: 2,
      icon: codeIcon,
      alt: "Graphic of a line of code",
      number: 100000,
      plus: true,
      text: "Lines of code written over the last 2 years",
    },
    {
      id: 3,
      icon: timeIcon,
      alt: "Graphic of a clock",
      number: 2000,
      plus: true,
      text: "Hours spent on developing and designing different websites",
    },
  ];

  const offers = [
    {
      id: 1,
      icon: speedIcon,
      alt: "Graphic of a clock",
      title: "Fast Delivery",
      text: "Our team of developers will do their best to deliver your website as soon as possible",
    },
    {
      id: 2,
      icon: codeIconOffer,
      alt: "Graphic of a clock",
      title: "Optimized Code",
      text: "We always assure our code stays well documented and optimized.",
    },
    {
      id: 3,
      icon: phoneIcon,
      alt: "Graphic of a phone",
      title: "Responsive",
      text: "We take care so your website looks perfect on all devices. ",
    },
    {
      id: 4,
      icon: loadingIcon,
      alt: "Graphic of a loading spinner",
      title: "Fast Loading",
      text: "Nobody likes long loading. Neither do we. That's why we will try to make your website  as fast as possible.",
    },
    {
      id: 5,
      icon: supportIcon,
      alt: "Graphic of headphones",
      title: "Active Support",
      text: "Customer service is number one here at Developer Hive.",
    },
    {
      id: 6,
      icon: modernIcon,
      alt: "Graphic of pen and a ruler",
      title: "Modern Design",
      text: "We will make sure your website is modern and attracting to customers.",
    },
    {
      id: 7,
      icon: techIcon,
      alt: "Graphic of cables",
      title: "Latest Technologies",
      text: "Our developers never stop learning new technologies to make your website as good as possible by using latest technologies.",
    },
    {
      id: 8,
      icon: browsersIcon,
      alt: "Graphic of a browser window",
      title: "Browser Compatibility",
      text: "All browsers matter. We take care that your vision is the same across all browsers.",
    },
  ];

  const projects = [
    {
      id: 1,
      imgUrl: "/projects/bakmazon.png",
      title: "Baustela",
    },
    {
      id: 2,
      imgUrl: "/projects/bakmazon.png",
      title: "Baustela",
    },
    {
      id: 3,
      imgUrl: "/projects/bakmazon.png",
      title: "Baustela",
    },
    {
      id: 4,
      imgUrl: "/projects/bakmazon.png",
      title: "Baustela",
    },
    {
      id: 5,
      imgUrl: "/projects/bakmazon.png",
      title: "Baustela",
    },
  ];

  return (
    <div className={styles.home}>
      <Head>
        <title>The Developer Hive </title>
      </Head>
      <Navbar />

      {/* Main Title Page */}

      <div className={styles.mainTitle}>
        <div className={styles.left}>
          <img
            src="/logoIcon.svg"
            alt="Icon of the logo"
            className={styles.logo}
          />
          <div className={styles.text}>
            <h1>The Developer Hive</h1>
            <p>A Group of Talented Web Developers Ready To Work</p>
            <div className={styles.buttons}>
              <Link href="#contact">
                <button className={styles.contact}>CONTACT US</button>
              </Link>
              <button className={styles.learnMore}>LEARN MORE</button>
            </div>
          </div>
        </div>
        <img
          src="/honeycombs/main.svg"
          alt="Graphic of a honeycomb"
          className={styles.honeycomb}
        />
        <img
          src="/shapes/triangle.svg"
          alt="Graphic of a triangle"
          className={styles.triangle}
        />
      </div>

      {/* About Us Page */}

      <div className={styles.aboutUs} id="aboutUs">
        <h2>About Us</h2>
        <p>
          We are a group of talented, hard-working and highly motivated
          full-stack web developers from various cities of Croatia. Our team has
          years of experience with various different technologies and is willing
          to constantly improve and learn new technologies. We offer high
          quality design and development and delivery within your time frame.
          Responsive design is our specialty and we focus a lot of time on it.
          Client feedback is a priority for us and we always ensure that you are
          satisfied with our work before continuing further.
        </p>
      </div>

      {/* Numbers Page */}

      <div className={styles.numbers}>
        {counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              icon={counter.icon}
              alt={counter.alt}
              number={counter.number}
              plus={counter.plus}
              text={counter.text}
            />
          );
        })}
      </div>

      {/* Offers Page */}

      <div className={styles.offers} id="offers">
        <h2>What We Offer</h2>
        <div className={styles.offersGrid}>
          {offers.map((offer) => {
            return (
              <Offer
                key={offer.id}
                icon={offer.icon}
                alt={offer.alt}
                title={offer.title}
                text={offer.text}
              />
            );
          })}
        </div>
      </div>

      {/* Previous Work Page */}

      <div className={styles.prevWork} id="prevWork">
        <h2>Previous Work</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                imgUrl={project.imgUrl}
                title={project.title}
              />
            );
          })}
        </div>
      </div>

      {/* Contact Page */}
      <div className={styles.contactContainer} id="contact">
        <img src="/contact_graphic.svg" />
        <Contact />
      </div>

      {/* Footer Page */}

      <Footer />
    </div>
  );
}
