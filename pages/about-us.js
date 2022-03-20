import styles from "../styles/about-us.module.scss";
import Image from "next/image";
import PageSection from "../components/custom elements/PageSection";
import { FlexContainer, PageContainer } from "../components/Container";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

//images
import officeImage from "../public/images/office/office.webp";
import drKarkiImage from "../public/images/members/DrKarki.webp";
import nabinImage from "../public/images/members/Nabin.webp";
import upeshImage from "../public/images/members/Upesh.webp";
import sharmilaImage from "../public/images/members/Sharmila.webp";
import kritiImage from "../public/images/members/Kriti.webp";
import officeEnvironmentImage from "../public/images/office/office-environment.webp";
import { animateFromLeft, animateFromRight } from "../animation/variants";
import { useSelector } from "react-redux";

export default function aboutus() {
  return (
    <PageContainer title="About Us">
      <Head>
        <title>Naturallifes | About Us</title>
        <meta
          name="description"
          content="Institute of natural medicine | about us page"
        />
      </Head>

      <Introduction />
      <Chairman />
      <OurTeam />
      <WhyUs />
    </PageContainer>
  );

  //introduction
  function Introduction() {
    //animation code start
    const [descRef, descInView] = useInView({
      threshold: 0.4,
      triggerOnce: true,
      fallbackInView: true,
    });
    const [imageRef, imageInView] = useInView({
      threshold: 0.4,
      triggerOnce: true,
      fallbackInView: true,
    });
    const imageAnimation = useAnimation();
    const descAnimation = useAnimation();

    const varients = {
      fromLeft: {
        translateX: -100,
        opacity: 0,
      },
      fromRight: {
        translateX: 100,
        opacity: 0,
      },
      to: {
        translateX: 0,
        opacity: 1,
        transition: {
          duration: 0.9,
          type: "spring",
          stiffness: 60,
        },
      },
    };

    useEffect(() => {
      if (descInView) descAnimation.start("to");
      else descAnimation.start("fromLeft");

      if (imageInView) imageAnimation.start("to");
      else imageAnimation.start("fromRight");
    }, [descInView, imageInView, descAnimation, imageAnimation]);

    //animation code end
    return (
      <div className={styles["block"]}>
        <motion.div
          className={styles["col-1"]}
          ref={descRef}
          variants={varients}
          initial="fromLeft"
          animate={descAnimation}
        >
          <p>
            <strong>The Institute of Natural Medicine</strong> is a premium
            institute of its kind established in the year 1999 AD (2056 BS)
            auspicious under the parent Organization’ Nepal Yoga and Nature Cure
            Association, since last 10 years all the plans and programmers
            related with the Academic field of Yoga and Nature cure Health
            Sciences had been formed and launched by the Institute. The
            Institute of Natural Medicine has undertaken the Curriculum
            developed by Nepal Yoga and Nature Cure Association and officially
            approved by The Council for Technical Education and Vocational
            Training (CTEVT) sanothimi, Bhactapur, on 12 February 1998. AD
            (2054-10-30. BS).
          </p>
        </motion.div>

        <motion.div
          className={styles["col-2"]}
          ref={imageRef}
          variants={varients}
          initial="fromRight"
          animate={imageAnimation}
        >
          <div className={styles["image-container"]}>
            <Image
              src={officeImage}
              layout="fill"
              objectFit="cover"
              alt="Institute of Natural Medicine building"
            />
          </div>
        </motion.div>
      </div>
    );
  }
}

//chairman
function Chairman() {
  //animation code start
  const [descRef, descInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    fallbackInView: true,
  });
  const [imageRef, imageInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
    fallbackInView: true,
  });
  const imageAnimation = useAnimation();
  const descAnimation = useAnimation();

  const varients = {
    fromLeft: {
      translateX: -100,
      opacity: 0,
    },
    fromRight: {
      translateX: 100,
      opacity: 0,
    },
    to: {
      translateX: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        type: "spring",
        stiffness: 60,
      },
    },
  };

  useEffect(() => {
    if (descInView) descAnimation.start("to");
    else descAnimation.start("fromRight");

    if (imageInView) imageAnimation.start("to");
    else imageAnimation.start("fromLeft");
  }, [descInView, imageInView, descAnimation, imageAnimation]);

  return (
    <div className={styles["block"]}>
      <motion.div
        className={styles["col-1"]}
        ref={descRef}
        variants={varients}
        initial="fromRight"
        animate={descAnimation}
      >
        <p>
          <span className={styles.quote}>
            {" "}
            Life is very simple, we make it very complicated by not knowing the
            art of living and behaving against nature. We could not follow the
            law of nature. As for the Nature Cure techniques, the subject is
            very simple, it is a method of going back to nature to train the
            body with simple natural processes rather than taking any kind of
            drugs.
          </span>
        </p>
      </motion.div>

      <motion.div
        className={styles["col-2"]}
        ref={imageRef}
        variants={varients}
        initial="fromLeft"
        animate={imageAnimation}
      >
        <div
          className={
            styles["image-container"] +
            " " +
            styles["image-container--chairman"]
          }
        >
          <Image
            src={drKarkiImage}
            layout="fill"
            objectFit="scale-down"
            alt="Dr. Prof. Surya Bdr. Karki"
          />
        </div>
      </motion.div>
    </div>
  );
}

//our team
function OurTeam() {
  return (
    <PageSection title="Our Team" curve={false}>
      <FlexContainer justifyContent="space-evenly">
        <MemberCard
          imageUrl={nabinImage}
          fullName="Nabin Karki"
          designation="Spa and Massage Therapist and Teacher"
          index={0}
        />

        <MemberCard
          imageUrl={upeshImage}
          fullName="Upesh Upreti"
          designation="Engineer and Web developer"
          index={1}
        />

        <MemberCard
          imageUrl={sharmilaImage}
          fullName="Sharmila Moktan"
          designation="National Yoga Teacher and Complementary Therapist"
          index={2}
        />

        <MemberCard
          imageUrl={kritiImage}
          fullName="Kriti Karki"
          designation="Yogacharya and Inte  rnational Yoga Teacher"
          index={3}
        />
      </FlexContainer>
    </PageSection>
  );
}

//specialities
function WhyUs() {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    fallbackInView: true,
  });

  useEffect(() => {
    if (inView) animation.start("to");
    else animation.start("from");
  }, [inView, animation]);

  return (
    <PageSection
      curve={false}
      title="Why Institute of Natural Medicine?"
      backgroundColor="white-color"
    >
      <FlexContainer>
        <motion.div
          className={styles["image-container"]}
          ref={ref}
          variants={animateFromLeft}
          initial="from"
          animate={animation}
        >
          <Image
            src={officeEnvironmentImage}
            layout="fill"
            objectFit="cover"
            alt="peace green environment"
          />
        </motion.div>

        <div className={styles["speciality-list"]}>
          <WhyUsCard
            no="1"
            title="Only in Nepal"
            desc="Institute of Medicine is the only institution in Nepal to provide CTEVT affilated yoga, massage and naturopathy courses."
          />
          <WhyUsCard
            no="2"
            title="Peaceful Ambiance and Proffesional Teachers"
            desc="Being situated in one of the most dense parts of the Kathmandu, Instiute of Natural Medicine offers incridebly peacful environment. Teachers here are highly qualified and have years of expreince in their respective fields."
          />
          <WhyUsCard
            no="3"
            title="International Courses and Student Visa Assistance"
            desc="Beside national level courses INM also helps student to getting international level certification courses. INM has also been assisting students to get international student visa."
          />
        </div>
      </FlexContainer>
    </PageSection>
  );
}

//team card
export function MemberCard({ imageUrl, fullName, designation, index }) {
  //context api appStatus having isSqueeze and isDeviceMobile
  const { isDeviceMobile } = useSelector((state) => state.appStatus);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    fallbackInView: true,
  });
  const cardAnimation = useAnimation();

  const variants = {
    from: {
      translateY: 100,
      opacity: 0,
    },

    to: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeIn",
        delay: isDeviceMobile ? 0 : index * 0.4,
      },
    },
  };

  useEffect(() => {
    if (inView) cardAnimation.start("to");
    else cardAnimation.start("from");
  }, [inView, cardAnimation]);

  return (
    <motion.div
      className={styles["member-card"]}
      ref={ref}
      variants={variants}
      initial="from"
      animate={cardAnimation}
    >
      <div className={styles["member-image"]}>
        <Image src={imageUrl} layout="fill" alt={fullName + " image"} />
      </div>
      <h3>{fullName}</h3>
      <h4>{designation}</h4>
    </motion.div>
  );
}

//list cards
export function WhyUsCard({ no, title, desc }) {
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    fallbackInView: true,
  });

  //for trigerring animation
  useEffect(() => {
    if (inView) animation.start("to");
    else animation.start("from");
  }, [inView, animation]);

  return (
    <motion.div
      className={styles["speciality-list__item"]}
      ref={ref}
      variants={animateFromRight}
      initial="from"
      animate={animation}
    >
      <div>{no}</div>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </motion.div>
  );
}
