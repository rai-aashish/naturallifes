import { FlexContainer, PageContainer } from "../../components/Container";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/custom elements/Button";
import Image from "next/image";
import styles from "../../styles/trainings.module.scss";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/custom elements/LoadingSpinner";
import { ErrorBlock } from "../../components/custom elements/MsgBlock";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { resourcesApi } from "../../redux/apiStore";

export default function Trainings() {
  const [availableTrainings, setAvailableTrainings] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const {
    data: allTrainings,
    isLoading,
    isError,
  } = resourcesApi.useGetAllTrainingsQuery();

  //handler for changing category
  const handleCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") setAvailableTrainings(allTrainings?.all_trainings);
    else
      setAvailableTrainings(
        allTrainings.all_trainings.filter(
          (training) => training.category === category
        )
      );
  };


  //update availableTrainings as trainings updates
  useEffect(() => {
    if (allTrainings) {
      setAvailableTrainings(allTrainings.all_trainings);
    }
  }, [allTrainings]);

  return (
    <PageContainer>
      <Head>
        <title>Naturallifes | Trainings</title>
        <meta name="description" content="Institute of natural medicine" />
      </Head>

      {/* availabel categories display */}
      <OptionsBar
        categories={allTrainings?.training_categories}
        selectedCategory={selectedCategory}
        handleCategory={handleCategory}
      />
      {/* training cards display */}
      <AnimatePresence>
        <FlexContainer justifyContent="space-evenly">
          {availableTrainings &&
            availableTrainings.map((training) => (
              <TrainingCard training={training} key={training.id} />
            ))}

          {isLoading && <LoadingSpinner />}
          <ErrorBlock
            condition={isError}
            msg="connection error. couldn't fetch data from server."
          />
        </FlexContainer>
      </AnimatePresence>
    </PageContainer>
  );
}

//trainings card

function TrainingCard({ training }) {
  //animation codes
  const variants = {
    from: {
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
    to: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={styles["training-card"]}
      variants={variants}
      initial="from"
      animate="to"
      exit="from"
    >
      <div className={styles["cover-image"]}>
        <Image
          src={training.image || "/images/services/massage.webp"}
          alt={training.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles["training-card__body"]}>
        <h3>{training.title}</h3>
        <div className={styles["training-category"]}>
          <span>{training.category}</span>
        </div>
        <p>{training.excerpt}</p>
        <div className={styles["btn-container"]}>
          <Link href={`/trainings/${training.slug}`}>
            <a>
              <Button btnSize="btn--medium" btnStyle="btn--primary-bg">
                View Details
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

//options bar
export function OptionsBar({ categories, selectedCategory, handleCategory }) {
  const { isSqueeze } = useSelector((state) => state.appStatus);
  if (categories)
    return (
      <div
        className={`${styles["options-bar"]} ${isSqueeze && styles["squeeze"]}`}
      >
        <span>Categories:</span>
        <div className={styles["button-container"]}>
          {/* default all button for categories */}
          <button
            className={selectedCategory === "All" ? styles["active"] : ""}
            onClick={() => handleCategory("All")}
          >
            All
          </button>
          {/* genetrate buttons according to availabe categories */}
          {categories.map((category, index) => (
            <button
              key={index}
              className={selectedCategory === category ? styles["active"] : ""}
              onClick={() => handleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  else return <></>;
}
