import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import styles from "../../styles/form-styles.module.scss";
import Button from "../../components/custom elements/Button";
import {
  PageContainer,
  FlexContainer,
  ModalContainer,
} from "../../components/Container";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/custom elements/LoadingSpinner";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { resourcesApi } from "../../redux/apiStore";

export default function ServicesBook({ service }) {
  const [showFormStatus, setShowFormStatus] = useState(false);
  const [reserveService, { isLoading, isSuccess, isError }] =
    resourcesApi.useReserveServiceMutation();

  return (
    <PageContainer>
      <Head>
        <title>Reservation for {service?.title ?? "Service"}</title>
      </Head>
      <BookServiceForm />
    </PageContainer>
  );

  //book service form
  function BookServiceForm() {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = async (data, e) => {
      e.preventDefault();

      //show form status
      setShowFormStatus(true);
      reserveService(data).then(() => reset());
    };

    return (
      <div className={styles["form-container"]}>
        <p className={styles["form-details"]}>
          Fill up the form to book <strong>{service.title}</strong> NOW !!
        </p>
        <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
          {/* if selected service is available set Service Name */}
          <input
            type="hidden"
            {...register("Service", { required: true })}
            value={service.title}
          />
          <input
            type="hidden"
            {...register("Bill", { required: true })}
            value={0}
          />

          {/*Full Name*/}
          <div
            className={`${styles["form-field"]} ${
              errors["Full Name"] && styles["error"]
            }`}
          >
            <label>
              Full Name* {errors["Full Name"] && <small>is required</small>}
            </label>
            <input {...register("Full Name", { required: true })} />
          </div>

          {/*Email Address*/}
          <div
            className={`${styles["form-field"]} ${
              errors["Email Address"] && styles["error"]
            }`}
          >
            <label>
              Email*
              {errors["Email Address"]?.type === "required" ? (
                <small>is required</small>
              ) : (
                errors["Email Address"] && <small>is invalid</small>
              )}
            </label>
            <input
              className={errors["Email Address"] && styles["error"]}
              type="email"
              defaultValue=""
              {...register("Email Address", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>
          {/*Reservation Date*/}
          <div
            className={`${styles["form-field"]} ${
              errors["Reservation Date"] && styles["error"]
            }`}
          >
            <label>
              Reserve for date*{" "}
              {errors["Reservation Date"] && <small>is required</small>}
            </label>
            <input
              type="date"
              {...register("Reservation Date", { required: true })}
            />
          </div>

          {/*contact number */}
          <div
            className={`${styles["form-field"]} ${
              errors["Contact Number"] && styles["error"]
            }`}
          >
            <label>
              Contact* {errors["Contact Number"] && <small>is required</small>}
            </label>
            <input
              type="number"
              {...register("Contact Number", { required: true })}
            />
          </div>

          <Button
            type="submit"
            btnStyle="btn--primary-bg"
            btnSize="btn--xmedium"
          >
            Send
          </Button>
        </form>

        {/*show status of form*/}
        <AnimatePresence>
          {showFormStatus && (
            <FormStatus
              isError={isError}
              isLoading={isLoading}
              isSuccess={isSuccess}
              statusToggle={setShowFormStatus}
            />
          )}
        </AnimatePresence>
      </div>
    );
  }
}

//form status
function FormStatus({ isLoading, isSuccess, isError }) {
  //animation
  const variants = {
    from: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 110,
      },
    },
    to: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 110,
      },
    },
  };
  return (
    <ModalContainer>
      {isLoading && <LoadingSpinner />}

      {isSuccess && (
        <motion.div
          className={styles["form-submit-status"]}
          variants={variants}
          initial="from"
          animate="to"
          exit="from"
        >
          <p>Yay! your reservation was successful. Hope to see you soon.</p>
          <FlexContainer justifyContent="space-between">
            <Link href="/home">
              <a>
                <Button btnSize="btn--medium" btnStyle="btn--success-bg">
                  Goto Home
                </Button>
              </a>
            </Link>

            <Button
              btnSize="btn--medium"
              btnStyle="btn--success-bg"
              onClick={() => statusToggle(false)}
            >
              Reserve this service for your friend
            </Button>
          </FlexContainer>
        </motion.div>
      )}

      {isError && (
        <motion.div
          className={styles["form-submit-status"]}
          variants={variants}
          initial="from"
          animate="to"
          exit="from"
        >
          <p>Alas! something went wrong please try again later.</p>
          <Button
            btnSize="btn--medium"
            btnStyle="btn--danger-bg"
            onClick={() => setShowFormStatus(false)}
          >
            close
          </Button>
        </motion.div>
      )}
    </ModalContainer>
  );
}

//ISR implementation

//services array
const services = [
  {
    title: "Yoga and Meditation Class",
    slug: "yoga-and-meditation-class",
  },
  {
    title: "Massage Therapy",
    slug: "message-therapy",
  },
  {
    title: "Mud Therapy",
    slug: "mud-therapy",
  },
  {
    title: "Acupressure",
    slug: "acupressure",
  },
  {
    title: "Steam bath",
    slug: "steam-bath",
  },
  {
    title: "Six cleaning acts",
    slug: "six-cleaning-acts",
  },
  {
    title: "Reiki",
    slug: "reiki",
  },
  {
    title: "Shankhaprakshalana",
    slug: "shankhaprakshalana",
  },
];

export async function getStaticProps({ params }) {
  const index = services.findIndex((service) => service.slug === params.slug);

  if (index < 0)
    return {
      notFound: true,
    };

  return {
    props: {
      service: services[index],
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  };
}

// This function gets called at build time on server-side.
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: "blocking" };
}
