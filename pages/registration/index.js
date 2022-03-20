import {
  FlexContainer,
  ModalContainer,
  PageContainer,
} from "../../components/Container";
import { useForm } from "react-hook-form";
import Button from "../../components/custom elements/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../styles/registration.module.scss";
import LoadingSpinner from "../../components/custom elements/LoadingSpinner";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { resourcesApi } from "../../redux/apiStore";
import Head from "next/head";

export default function Registration() {
  const router = useRouter();
  const { training } = router.query;

  const [reserveTraining, { isLoading, isSuccess, isError }] =
    resourcesApi.useReserveTrainingMutation();

  const [queryTraining, setQueryTraining] = useState({
    isValidTraining: false,
    trainingData: null,
  });

  const [showFormSubmitState, setShowFormSubmitState] = useState(false);

  const { data: allTrainings, allTrainingsIsLoading } =
    resourcesApi.useGetAllTrainingsQuery();

  const {
    register,
    unregister,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //handle registration form submit
  const onSubmit = async (data, e) => {
    e.preventDefault();
    setShowFormSubmitState(true);
    reserveTraining(data).then(() => reset());
  };

  //set trainingData if valid slug is passed
  useEffect(() => {
    if (training && allTrainings)
      allTrainings?.all_trainings.map((item) => {
        if (training === item.slug) {
          unregister("Training Name");
          setQueryTraining({
            isValidTraining: true,
            trainingData: item,
          });
        }
      });
    else
      setQueryTraining({
        isValidTraining: false,
        trainingData: null,
      });
  }, [training, allTrainings, unregister]);

  return (
    <PageContainer>
      <Head>
        <title>Training Registration</title>
      </Head>
      <div className="form-container">
        {queryTraining.trainingData && (
          <div className={styles["selected-training-info"]}>
            <h2>{queryTraining.trainingData.title}</h2>
            <span>Traiff: Nrs. {queryTraining.trainingData.traiff}</span>
            <span className={styles["discount"]}>
              Discount: - {queryTraining.trainingData.discount} %
            </span>
            <span className={styles["total"]}>
              Total: Nrs.{" "}
              {queryTraining.trainingData.traiff -
                (
                  (queryTraining.trainingData.traiff *
                    queryTraining.trainingData.discount) /
                  100
                ).toFixed(2)}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/*if valid training query is available set training name in hidden input field*/}
          {queryTraining.trainingData?.title ? (
            <input
              type="hidden"
              {...register("Training Name", { required: true })}
              value={queryTraining.trainingData?.title}
            />
          ) : (
            <div className={`form-field ${errors["Training Name"] && "error"}`}>
              {/*if valid training query is not available render slect options for training*/}
              <label>
                Select Training (भर्ना हुन चाहेको विषय)*{" "}
                {errors["Training Name"] && <small>is required</small>}
              </label>

              {allTrainingsIsLoading && <p>Loading...</p>}

              <select {...register("Training Name", { required: true })}>
                <option hidden value="">
                  Select Training
                </option>
                {allTrainings &&
                  allTrainings?.all_trainings.map((item) => {
                    return (
                      <option value={item.title} key={item.ID}>
                        {item.title}
                        (Traiff: Nrs.{item.traiff}{" "}
                        {item.discount > 0 &&
                          `- ${item.discount}% = Nrs.${
                            item.traiff -
                            ((item.traiff * item.discount) / 100).toFixed(2)
                          }`}
                        )
                      </option>
                    );
                  })}
              </select>
            </div>
          )}

          {/*full name */}
          <div className={`form-field ${errors["Full Name"] && "error"}`}>
            <label>
              Full Name (नाम र थर)*{" "}
              {errors["Full Name"] && <small>is required</small>}
            </label>
            <input {...register("Full Name", { required: true })} />
          </div>

          {/*date of birth name */}
          <div className={`form-field ${errors["DOB"] && "error"}`}>
            <label>
              Date Of Birth(जन्म मिति)*{" "}
              {errors["DOB"] && <small>is required</small>}
            </label>
            <input type="date" {...register("DOB", { required: true })} />
          </div>

          {/*fathers name */}
          <div className={`form-field ${errors["Fathers Name"] && "error"}`}>
            <label>
              Father&#39;s Name(बुवाको नाम)*{" "}
              {errors["Fathers Name"] && <small>is required</small>}
            </label>
            <input {...register("Fathers Name", { required: true })} />
          </div>

          {/*mothers name */}
          <div className="form-field">
            <label>Mother&#39;s Name(आमाको नाम):</label>
            <input {...register("Mothers Name")} />
          </div>

          {/*spouse name */}
          <div className="form-field">
            <label>Spouse&#39;s Name(विवाहित भएमा पति वा पत्नीको नाम):</label>
            <input {...register("Spouse Name")} type="text" />
          </div>

          {/*permanent address */}
          <div
            className={`form-field ${errors["Permanent Address"] && "error"}`}
          >
            <label>
              Permanent Address (स्थायी ठेगाना)*{" "}
              {errors["Permanent Address"] && <small>is required</small>}
            </label>
            <input
              type="text"
              {...register("Permanent Address", { required: true })}
            />
          </div>

          {/*temporary address */}
          <div
            className={`form-field ${errors["Temporary Address"] && "error"}`}
          >
            <label>
              Temporary Address (स्थायी ठेगाना)*{" "}
              {errors["Temporary Address"] && <small>is required</small>}
            </label>
            <input
              type="text"
              {...register("Temporary Address", { required: true })}
            />
          </div>

          {/*contact  number */}
          <div className={`form-field ${errors["Contact Number"] && "error"}`}>
            <label>
              Contact Number(सम्पर्क नम्बर)*{" "}
              {errors["Contact Number"]?.type === "required" ? (
                <small>is required</small>
              ) : (
                errors["Contact Number"]?.type === "maxLength" && (
                  <small>is invalid</small>
                )
              )}
            </label>
            <input
              type="number"
              {...register("Contact Number", { required: true, maxLength: 15 })}
            />
          </div>

          {/*email address */}
          <div className={`form-field ${errors["Email Address"] && "error"}`}>
            <label>
              Email*
              {errors["Email Address"]?.type === "required" ? (
                <small>is required</small>
              ) : (
                errors["Email Address"] && <small>is invalid</small>
              )}
            </label>
            <input
              className={errors["Email Address"] && "error"}
              type="email"
              {...register("Email Address", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
          </div>

          {/*acedamic qualification */}
          <div
            className={`form-field ${
              errors["Academic Qualification"] && "error"
            }`}
          >
            <label>
              Academic Qualification(शैक्षिक योग्यता)*{" "}
              {errors["Academic Qualification"] && <small>is required</small>}
            </label>
            <select {...register("Academic Qualification", { required: true })}>
              <option hidden value="">
                select
              </option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
              <option value="Phd./S.sc">Phd/S.sc</option>
              <option value="Others">others</option>
            </select>
          </div>

          <Button
            type="submit"
            btnStyle="btn--primary-bg"
            btnSize="btn--xmedium"
          >
            Register
          </Button>
        </form>
      </div>

      {/*show form states on submit */}
      <AnimatePresence>
        {showFormSubmitState && (
          <FormSubmitState
            isError={isError}
            isSuccess={isSuccess}
            isLoading={isLoading}
            trainingSlug={training}
            setShowModal={setShowFormSubmitState}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
}

//modal dialog for submitting state
function FormSubmitState({ isLoading, isError, isSuccess, setShowModal }) {
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
      {/*if form submitting */}
      {isLoading && <LoadingSpinner />}

      {/*if form submit error */}
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
            onClick={() => setShowModal(false)}
          >
            close
          </Button>
        </motion.div>
      )}

      {/*if form submit successful */}
      {isSuccess && (
        <motion.div
          className={styles["form-submit-status"]}
          variants={variants}
          initial="from"
          animate="to"
          exit="from"
        >
          <p>Yay! your form has been submited successfully.</p>
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
              onClick={() => setShowModal(false)}
            >
              Register another
            </Button>

            <Link href="/trainings">
              <a>
                <Button btnSize="btn--medium" btnStyle="btn--success-bg">
                  Goto Trainings
                </Button>
              </a>
            </Link>
          </FlexContainer>
        </motion.div>
      )}
    </ModalContainer>
  );
}
