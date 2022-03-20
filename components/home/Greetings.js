import styles from './greetings.module.scss'
import Image from 'next/image'
import { FlexContainer } from '../Container'
import drKarkiImage from '../../public/images/members/DrKarki.webp'

export default function Greetings() {
    return (
        <div className={styles.greetings}>
            <h1 style={{ fontSize: '4rem' }}>Greetings</h1>
            <FlexContainer>
                <GreetImage />
                <GreetText />
            </FlexContainer>
        </div>
    )
}

const GreetImage = () => {
    return (
        <div className={styles["image-container"]}>
            <Image src={drKarkiImage} layout='fill' objectFit='cover' alt="Dr karki" />
        </div>
    )
}

const GreetText = () => {
    return (
        <div className={styles['greeting-message']}>
            <p>
                <strong>Greetings,</strong> from the Institute of Natural Medicine, Nepal. It is my pride and privilege to welcome you. I would like to express my humble experience and finding of 37 years, in the field of nature cure and yogic therapy. After a struggle of 37 years, I have been able to have the
                &#39;Nature&#39;  system recognized by the Nepal Government. Again, welcome to evolution for body, soul, mind, and consciousness, I thank you for being with us sharing knowledge, skills, techniques and experience for precious time and Ideas.
            </p>
            <strong>Thank You</strong>
            <ul>
                <li>Prof. Dr.Surya Bahadur Karki &#40; N.D, BASM,M.D,M.A and D.Sc &#41;.</li>
                <li>Chairman</li>
                <li>Institute of Natural Medicine.</li>
                <li>Website: <a href="https://mandalayogastudio.com.np">www.mandalayogastudio.com.np</a></li>
                <li> Website:<a href="https://naturalyogainnepal.com">www.naturalyogainnepal.com</a></li>

            </ul>
        </div>
    )
}