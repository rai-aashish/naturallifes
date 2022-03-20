import { PageContainer } from '../components/Container'
import styles from '../styles/events.module.scss'
import Head from 'next/head'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function Events() {

    //events data
    const events = [
        {
            title: "Conference and World Congress",
            contentList: [
                " First national Conference on Yoga and Naturopathy in 2046 Bs at Biratnager, Nepal. Photo World Congress (2046 BS)",
                "First World Congress on Yoga and Naturopathy in 1998 at Kathmandu, Nepal. Photo World Congress.( 1998. AD)",
                " Seond World Congress on Yoga and Naturopathy at Kathmandu, Nepal. Photo World Congress(.2002.AD)",
                " First South Asia (1) Yoga Sports Championship on 6,7,8,9 May 2017. at National Sports Council, Satdobato, Swimming Pool.",
                "First National Yoga Sports Championship on 4,5,6 Jan 2018. at Itahari, Sunsari.",
            ]
        },
        {
            title: "Seminar and Workshops",
            contentList: [
                "First National Workshop on Yoga and Naturopathy in 2049, at kathmandu, Nepal.",
                "Second National Workshop on Yoga and Naturopathy in 2054, at kathmandu, Nepal",
                "Third National Workshop on Yoga and Naturopathy in 2058, at kathmandu, Nepal",
                "Fourth National Workshop on Yoga and Naturopathy in 2066, at kathmandu, Nepal."
            ]
        },
        {
            title: "International Naturopathy Organigation, dilication President of India",
            contentList: [
                " First national Conference on Yoga and Naturopathy in 2046 Bs at Biratnager, Nepal. Photo World Congress (2046 BS)",
                "First World Congress on Yoga and Naturopathy in 1998 at Kathmandu, Nepal. Photo World Congress.( 1998. AD)",
                "Second World Congress on Yoga and Naturopathy at Kathmandu, Nepal. Photo World Congress(.2002.AD)",
                "First South Asia (1) Yoga Sports Championship on 6,7,8,9 May 2017. at National Sports Council, Satdobato, Swimming Pool.",
                "First National Yoga Sports Championship on 4,5,6 Jan 2018. at Itahari, Sunsari."
            ]
        },
        {
            title: "2nd South Asia yoga sports championship",
            contentList: [
                " Date: 4, 5, 6 May 2018.",
                "Venue: Pokhara Regional Stadium, Nepal."
            ]
        },
        {
            title: "International Yoga Sports championship",
            contentList: [
                " Date: 11, 12, 13 May 2018.",
                "Venue: Turkey."
            ]
        },
        {
            title: "International Yoga Sports championship",
            contentList: [
                " Date: 11, 12, 13 May 2018.",
                "Venue: Turkey."
            ]
        },
        {
            title: "International Congress on Neaturopathy Medicine",
            contentList: [
                "6, 7, 8 July 2018.",
                "London, United Kingdom."
            ]
        },
        {
            title: "World Yoga Sports Championship",
            contentList: [
                "World Yoga Sports Championship",
                "Venue: Beijing, China."
            ]
        },

    ]

    return (
        <PageContainer title="Events Timeline">
            <Head>
                <title>Naturallifes | Events</title>
                <meta name="description" content="Events Organized by Institute of natural medicine" />
            </Head>

            <main>
                <div className={styles['wrapper']}>
                    {events.map((event, index) =>
                        <TimeLineCard
                            key={index}
                            title={event.title}
                            contentList={event.contentList}
                        />
                    )}
                </div>
            </main>
        </PageContainer>
    )
}


//time line container
function TimeLineCard({ title, contentList }) {

    //animation codes
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
        fallbackInView: true
    })
    const cardAnimation = useAnimation()

    const variants = {
        from: {
            x: 200,
            opacity: 0
        },

        to: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 110,
            }
        }
    }

    useEffect(() => {
        if (inView)
            cardAnimation.start("to")
        else
            cardAnimation.start("from")
    }, [inView, cardAnimation])

    return (
        <div className={styles['timeline-card']}        >
            <div className={styles['event-container']}>
                <motion.div className={styles['event']}
                    ref={ref}
                    variants={variants}
                    initial="from"
                    animate={cardAnimation}>
                    <h2>{title}</h2>
                    <ul>
                        {contentList && contentList.map((item, index) => <li key={index}> {item}</li>)}
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}