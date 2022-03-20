import { FlexContainer } from '../Container'
import PageSection from '../custom elements/PageSection'
import styles from './service.module.scss'
import Image from 'next/image'
import Button from '../custom elements/Button'
import Link from 'next/link'

//media import
import service1 from '../../assets/images/services/yoga.webp'
import service2 from '../../assets/images/services/massage.webp'
import service3 from '../../assets/images/services/acupuncture.webp'
import service4 from '../../assets/images/services/mud_therapy.webp'
import service5 from '../../assets/images/services/steam_bath.webp'
import service6 from '../../assets/images/services/six_cleansing.webp'
import service7 from '../../assets/images/services/reiki.webp'
import service8 from '../../assets/images/services/shankhaprakshalana.webp'


export default function Services() {


    //services data
    const services = [
        {
            title: "Yoga and Meditation Class",
            excerpt: "High standard yoga and meditation course under great master.",
            coverImage: service1,
            slug: "yoga-and-meditation-class"
        },
        {
            title: "Massage Therapy",
            excerpt: "A trained, certified massage therapist manipulates the soft tissues of your body - muscle, connective tissue, tendons, ligaments and skin.",
            coverImage: service2,
            slug: "message-therapy"
        },
        {
            title: "Mud Therapy",
            excerpt: "A trained, certified massage therapist manipulates the soft tissues of your body - muscle, connective tissue, tendons, ligaments and skin.",
            coverImage: service3,
            slug: "mud-therapy"
        },
        {
            title: "Acupressure",
            excerpt: "A form of alternative therapy in which manual pressure is used to stimulate specific points on the body along what are considered to be lines of energy.",
            coverImage: service4,
            slug: "acupressure"
        },
        {
            title: "Steam bath",
            excerpt: "A form of alternative therapy in which manual pressure is used to stimulate specific points on the body along what are considered to be lines of energy.",
            coverImage: service5,
            slug: "steam-bath"
        },
        {
            title: "Six cleaning acts",
            excerpt: "Bastee (cleaning large Intestine), Dautee (cleaning Stomach), Naitee (cleaning Nose), Nauli (cleaning whole abdomen), Kapal Bhantee kriya (cleaning Brain and kidney), Trataka (Mind concentration and Eye Exercise).",
            coverImage: service6,
            slug: "six-cleaning-acts"
        },
        {
            title: "Reiki",
            excerpt: "Complementary therapy relating to energy healing processes, and develops emotional, mental, and spiritual well-being.",
            coverImage: service7,
            slug: "reiki"
        },
        {
            title: "Shankhaprakshalana",
            excerpt: "Process to clean the intestinal tract by removing the impurities with salty water.",
            coverImage: service8,
            slug: "shankhaprakshalana"
        }

    ]
    return (
        <PageSection
            backgroundColor={"secondary-background"}
            title={"Services"}
            curve={true}
            curveFill="primary-color">

            <FlexContainer>
                {services.map((service, index) =>
                    <ServicesCard
                        title={service.title}
                        linkTo={`/reservation/${service.slug}`}
                        coverImage={service.coverImage}
                        excerpt={service.excerpt}
                        key={index}
                    />)
                }

            </FlexContainer>
        </PageSection>
    )
}


export function ServicesCard({ coverImage, title, excerpt, linkTo }) {
    return (
        <div className={styles['service-card']}>
            <div className={styles['service-card__cover-image']}>
                <Image src={coverImage} layout="fill" objectFit="cover" placeholder="blur" alt={title + "dp"} />
            </div>

            <h3>{title}</h3>
            <p>
                {excerpt}
            </p>
            <div className={styles["btn-container"]}>
                <Link href={linkTo}>
                    <a>
                        <Button btnStyle={"btn--book-now"}>
                            Book Now
                        </Button>
                    </a>
                </Link>
            </div>

        </div>
    )
}