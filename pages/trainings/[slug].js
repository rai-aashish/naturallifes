import { rssApi } from "../../helpers/axios";
import Head from "next/head";
import styles from "../../styles/training-details.module.scss";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "../../components/Container";
import Button from "../../components/custom elements/Button";

export default function Training({ data }) {
  return (
    <PageContainer>
      {/*documentation and SEO markups*/}
      <Head>
        <title>Register for {"training"} at Naturallifes</title>
        <meta name="description" content="Institute of natural medicine" />
      </Head>
      {/*menubar*/}
      <div className={styles["menu-bar"]}>
        <Link href="/trainings">
          <a>
            <svg
              width={30}
              height={30}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
              ></path>
            </svg>{" "}
            Back to all trainings
          </a>
        </Link>
      </div>

      {/* wrapper for page conents*/}
      <div className={styles["wrapper"]}>
        <div className={styles["cover-image-container"]}>
          <div className={styles["overlay"]}>
            <h1> {data.training.title}</h1>
            <p>category : {data.training.category}</p>
          </div>
          <div className={styles["enroll-btn"]}>
            <p>
              Traiff: NRs.{data.training.traiff}
              {data.training.discount > 0 && (
                <>
                  <span className={styles["discount"]}>
                    {" "}
                    - {data.training.discount} %
                  </span>
                  <span className={styles["total"]}>
                    {" "}
                    = Nrs.
                    {data.training.traiff -
                      (
                        (data.training.traiff * data.training.discount) /
                        100
                      ).toFixed(0)}
                  </span>
                </>
              )}
            </p>
            <Link href={`/registration?training=${data.training.slug}`}>
              <a>
                <Button btnSize="btn--medium" btnStyle="btn--book-now">
                  Enroll Now
                </Button>
              </a>
            </Link>
          </div>
          <Image
            src={data.training.image}
            layout="fill"
            objectFit="cover"
            alt={data.training.title}
          />
        </div>

        <main
          dangerouslySetInnerHTML={{
            __html: data.training.content,
          }}
        />
        <div className={styles["emphasize-enroll"]}>
          What are you waiting for ?
          <Link href={`/registration?training=${data.training.slug}`}>
            <a>
              <Button btnSize="btn--medium" btnStyle="btn--book-now">
                Enroll Now
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}

//ISR implementation
export async function getStaticProps({ params }) {
  const res = await rssApi.get(`trainings/${params.slug}`);

  if (!res)
    return {
      notFound: true,
    };

  return {
    props: {
      data: res.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await rssApi.get(`trainings`);

  // Get the paths we want to pre-render based on posts
  const paths = res.data.all_trainings.map((training) => ({
    params: { slug: training.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
