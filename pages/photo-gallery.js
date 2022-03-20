import Gallery from "react-photo-gallery";
import { useState, useCallback } from "react";
import Lightbox from "react-awesome-lightbox";
import LoadingSpinner from "../components/custom elements/LoadingSpinner";
import "react-awesome-lightbox/build/style.css";
import MsgBlock from "../components/custom elements/MsgBlock";
import { PageContainer } from "../components/Container";
import Head from "next/head";
import { resourcesApi } from "../redux/apiStore";

export default function PhotoGallary() {
  const [showLightBox, setShowLightBox] = useState(false);
  const [startImgIndex, setStartImgIndex] = useState(0);

  const {
    data: photos,
    isLoading,
    isSuccess,
  } = resourcesApi.useGetPhotoGalleryQuery();
  const galleryPhotos = [
    {
      id: 0,
      src: "https://admin.naturallifes.com/images/photo gallery/breakfast.webp",
      width: 4,
      height: 3,
    },
    {
      id: 1,
      src: "https://admin.naturallifes.com/images/photo gallery/breakfast_group.webp",
      width: 4,
      height: 3,
    },
    {
      id: 2,
      src: "https://admin.naturallifes.com/images/photo gallery/reiki.webp",
      width: 4,
      height: 3,
    },
    {
      id: 3,
      src: "https://admin.naturallifes.com/images/photo gallery/sirodhara.webp",
      width: 4,
      height: 3,
    },
    {
      id: 4,
      src: "https://admin.naturallifes.com/images/photo gallery/student_certified.webp",
      width: 4,
      height: 3,
    },
    {
      id: 5,
      src: "https://admin.naturallifes.com/images/photo gallery/yoga.webp",
      width: 4,
      height: 3,
    },
    {
      id: 6,
      src: "https://admin.naturallifes.com/images/photo gallery/yoga_morning.webp",
      width: 4,
      height: 3,
    },
  ];
  //handlers
  //cb function to open lightbox
  const openLightbox = useCallback((event, { photo, index }) => {
    setStartImgIndex(index);
    setShowLightBox(true);
  }, []);

  return (
    <PageContainer title="Photo Gallery">
      <Head>
        <title>Naturallifes | Photo Gallery</title>
        <meta
          name="description"
          content="Photo Gallary of Institute of natural medicine"
        />
      </Head>

      {isLoading && <LoadingSpinner />}
      {/* {JSON.stringify(photos)} */}
      {isSuccess && photos?.no_of_photos > 0 && (
        <Gallery photos={galleryPhotos} onClick={openLightbox} />
      )}

      {/* information to user if there is no images in gallery */}
      <MsgBlock
        msg="Ops! there are no images in the gallery."
        condition={photos?.no_of_photos === 0}
      />

      {/* lightbbox setup to show image */}
      {showLightBox && photos && (
        <Lightbox
          images={photos.lightbox_photos}
          startIndex={startImgIndex}
          onClose={() => setShowLightBox(false)}
        />
      )}
    </PageContainer>
  );
}
