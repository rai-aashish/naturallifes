import { FlexContainer } from '../Container'
import Button from '../custom elements/Button'
import PageSection from '../custom elements/PageSection'
import styles from './training.module.scss'
import Image from 'next/image'
import yogaImage from '../../assets/images/services/yoga.webp'
import naturopathyImage from '../../assets/images/services/naturopathy.webp'
import Link from 'next/link'
export default function Training() {
    return (
        <PageSection
            title={"Training"}
            backgroundColor="primary-background"
            curve={true}
            curveFill="white-color"
        >
            <FlexContainer>
                <TrainingDescription />
                <TrainingImages />
            </FlexContainer>
        </PageSection>
    )
}


//training description
function TrainingDescription() {
    return (
        <div className={styles['training-description']}>
            <p>
                The Institute of natural Medicine provides the Recognized course ( world wide ) that can be studied in the comfort of your own home or at this Institute in the heart of City Kathmandu, Nepal. The Institute, has been providing accredited courses and offers accredited certificates (Certificate and Diploma level) in yoga, Naturopathy, Massage, Acupuncture, Acupressure, Psycho-therapy, Herbal etc.
            </p>
            <Link href="/trainings">
                <a>
                    <Button btnSize="btn--large" btnStyle="btn--white-bg">
                        Explore Now
                    </Button>
                </a>
            </Link>
        </div>
    )
}

//training imagesblock
function TrainingImages() {
    return (
        <div className={styles['training-images']}>
            <div className={styles['training-images__container']}>
                <Image src={yogaImage} alt="yoga training" layout='responsive' placeholder="blur" />
                <p>Yoga training</p>
            </div>

            <div className={styles['training-images__container']}>
                <Image src={naturopathyImage} alt="yoga training" layout='responsive' placeholder="blur" />
                <p>Naturopathy Training</p>
            </div>
        </div>
    )
}