import { useState, useEffect } from "react";
import { getFromApi } from "../helpers/axios";
import Image from "next/image";
import { FlexContainer, PageContainer } from "../components/Container";
import styles from "../styles/recommendations.module.scss";
import LoadingSpinner from "../components/custom elements/LoadingSpinner";
import MsgBlock, { ErrorBlock } from "../components/custom elements/MsgBlock";
import Head from "next/head";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { resourcesApi } from "../redux/apiStore";

export default function Recommendations() {
  const {
    data: letters,
    isLoading,
    isError,
    isSuccess,
  } = resourcesApi.useGetRecommendationsQuery();

  //show lightbox
  const [showLightBox, setShowLightBox] = useState(false);
  const [startImgIndex, setStartImgIndex] = useState(0);

  const openLightbox = (i) => {
    setStartImgIndex(i);
    setShowLightBox(true);
  };

  //recommendation page component
  return (
    <PageContainer title="Recommendations">
      <Head>
        <title>Naturallifes | Recommendations</title>
        <meta
          name="description"
          content="Recommendation Letters by different organizations and institutes to Institute of natural medicine"
        />
      </Head>

      <FlexContainer justifyContent="space-evenly">
        {isLoading && <LoadingSpinner />}
        {isSuccess &&
          letters?.gallary_photos?.map((letter, index) => (
            <RecommendationCard
              imgUrl={letter.src}
              title={letter}
              key={index}
              index={index}
              onClick={openLightbox}
            />
          ))}
        <MsgBlock
          msg="No letters are uploaded yet."
          condition={letters?.gallary_photos?.length === 0}
        />
        <ErrorBlock
          msg="something went wrong and couldn't fetch data."
          condition={isError}
        />
      </FlexContainer>

      {/* lightbbox setup to show image */}
      {showLightBox && letters && (
        <Lightbox
          images={letters.lightbox_photos}
          startIndex={startImgIndex}
          onClose={() => setShowLightBox(false)}
        />
      )}
    </PageContainer>
  );
}

export function RecommendationCard({ imgUrl, title, onClick, index }) {
  return (
    <div
      className={styles["recommendation-card"]}
      onClick={() => onClick(index)}
    >
      <div className={styles["recommendation-card__image-container"]}>
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="contain"
          alt={title ?? "letter"}
          quality={95}
          priority={true}
        />
      </div>
    </div>
  );
}
