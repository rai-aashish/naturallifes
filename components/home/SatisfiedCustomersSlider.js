import { Carousel } from "react-responsive-carousel";
import PageSection from "../custom elements/PageSection";
import styles from "./satisfied-customers-slide.module.scss";
import Image from "next/image";
import LoadingSpinner from "../custom elements/LoadingSpinner";
import maleAvatar from "../../assets/images/avatar/male_avatar.webp";
import femaleAvatar from "../../assets/images/avatar/female_avatar.webp";
import { ErrorBlock } from "../custom elements/MsgBlock";
import { resourcesApi } from "../../redux/apiStore";

export default function SatisfiedCustomersSlider() {
  const {
    data: feedbacks,
    isLoading,
    isError,
  } = resourcesApi.useGetCustomersFeedbackQuery();

  return (
    <PageSection
      title="Satisfied Customers"
      curve={false}
      backgroundColor={"primary-background"}
    >
      {isLoading && <LoadingSpinner />}
      <ErrorBlock condition={isError} msg="could't fetch data from server" />

      {feedbacks && (
        <Carousel
          autoPlay={true}
          showIndicators={false}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={4000}
        >
          {feedbacks.feedbacks.map((feedback) => (
            <SatisfiedCustomerCard
              key={feedback.id}
              imageUrl={feedback?.image}
              feedback={feedback.feedback}
              customerName={feedback.customer_name}
              gender={feedback.gender.toUpperCase()}
            />
          ))}
        </Carousel>
      )}
    </PageSection>
  );
}

export function SatisfiedCustomerCard({
  imageUrl,
  customerName,
  feedback,
  gender,
}) {
  return (
    <div className={styles["customer-card"]}>
      <div className={styles["customer-card__comment"]}>
        <p>
          &#34; {feedback} &#34;
          <small>- {customerName ?? "customer"}</small>
        </p>
      </div>
      <div className={styles["customer-card__image-container"]}>
        <Image
          src={
            imageUrl ?? gender === ("M" || "MALE") ? maleAvatar : femaleAvatar
          }
          layout="fill"
          alt={customerName}
        />
      </div>
    </div>
  );
}
