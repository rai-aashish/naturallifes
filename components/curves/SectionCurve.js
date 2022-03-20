import styles from './curves.module.scss'
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react"
import { motion, useAnimation } from 'framer-motion'

export default function SectionCurve({ curveFill }) {

    const animation = useAnimation()
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
        fallbackInView: true
    })

    useEffect(() => {
        if (inView)
            animation.start({
                height: "auto",
                transition: {
                    duration: 1
                }
            })
        else
            animation.start({
                height: 0,
            })
        return () => {

        }
    })

    const FILL = ["primary-color", "white-color", "tertiary-color", "dark-color"]
    const index = FILL.findIndex((fill) => fill === curveFill)
    const fillColor = FILL[index] ?? FILL[0]

    return (
        <motion.div
            className={styles['curve-top']}
            ref={ref}
            animate={animation}
        >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className={styles[`${fillColor}`]}></path>

            </svg>
        </motion.div>
    )
}
