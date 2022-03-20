import Link from "next/link";
import { FlexContainer, PageContainer } from '../components/Container'
import Button from '../components/custom elements/Button'
import styles from '../styles/404.module.scss'
import { motion } from "framer-motion";
import Head from 'next/head';


export default function Handle404() {
    //animation codes
    const variants = {
        from: {
            x: 0
        },
        to: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
            }
        }
    }

    const variants404 = {
        from: {
            y: -40
        }
        ,
        to: {
            y: 0,
            transition: {
                duration: 1.5,
                yoyo: Infinity,
            }
        }
    }
    return (
        <PageContainer>
            <Head>
                <title>Naturallifes.com | 404 error</title>
            </Head>

            <div className={styles["page"]}>
                <div className={styles["error-text"]}>ERROR</div>

                <motion.div
                    className={styles["error404"]}
                    variants={variants}
                    initial="from"
                    animate="to"
                >
                    <motion.div variants={variants404}>4</motion.div>
                    <motion.div variants={variants404}>0</motion.div>
                    <motion.div variants={variants404}>4</motion.div>
                </motion.div>

                <div className={styles["information"]}>
                    <h3>Ops! Nothing&#39;s here.</h3>
                    <p>
                        You are here because you may have typed wrong URL or the destination has been removed.
                    </p>
                </div>

                <div className={styles["links"]}>
                    <Link href="/">
                        <a className="margin-auto">
                            <Button btnSize="btn--medium" btnStyle="btn--primary-bg">Goto Home</Button>
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="margin-auto">
                            <Button btnSize="btn--medium" btnStyle="btn--primary-bg">Goto Trainings</Button>
                        </a>
                    </Link>
                </div>
            </div>
        </PageContainer>
    )
}
