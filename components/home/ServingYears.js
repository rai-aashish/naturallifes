import PageSection from "../custom elements/PageSection";
import styles from './serving-years.module.scss'
import AnimatedNumber from "animated-number-react";
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ServingYears() {
    const [years, setYears] = useState(0)
    const [refYears, inView] = useInView({
        threshold: 1,
        triggerOnce: true,
        fallbackInView: true
    })

    useEffect(() => {
        if (inView)
            setYears(21)

    }, [inView])

    return (
        <PageSection
            backgroundColor={"primary-color"}
            curve={false} >
            <p className={styles['serving__text']}>
                Serving since
            </p>
            <p className={styles['serving__years-no']} ref={refYears}>
                <AnimatedNumber
                    value={years}
                    formatValue={(years) => years.toFixed(0)}
                    duration="1500"
                />
            </p>
            <p className={styles['serving__text']}>
                Years
            </p>
        </PageSection>
    )
}
