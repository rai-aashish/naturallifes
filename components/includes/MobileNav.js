import Image from 'next/image';
import styles from './mobile-nav.module.scss';
import times from '../../assets/icons/times.svg';
import bars from '../../assets/icons/bars.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav({ navLinksArray, isSqueeze }) {
    const router = useRouter()
    const [showMobileNav, setShowMobileNav] = useState(false)

    //animation codes
    const variants = {
        from: {
            opacity: 0,
            translateX: '100vw',
            transition: {
                duration: 0.5
            }
        },
        to: {
            opacity: 1,
            translateX: 0,
            transition: {
                duration: 0.5
            }
        }
    }
    return (
        <div className={`${isSqueeze ? styles.mobile_nav + " " + styles.mobile_nav__squeeze : styles.mobile_nav}`}>
            <h1>INSTITUTE OF NATURAL MEDICINE</h1>

            <div className={styles.hamburger}>
                <Image src={bars} alt="=" onClick={() => setShowMobileNav(true)} />
            </div>
            <AnimatePresence>
                {showMobileNav &&
                    <motion.nav
                        variants={variants}
                        initial="from"
                        animate="to"
                        exit="from"
                    >

                        <div className={styles.x_btn}>
                            <Image src={times} alt="x" onClick={() => setShowMobileNav(false)} />
                        </div>
                        <ul>
                            {navLinksArray.map((link, index) => <li key={index}>
                                <Link href={link[0]}>
                                    <a className={router.pathname === link[0] ? styles.active : ''} onClick={() => setShowMobileNav(false)}>
                                        {link[1]}
                                    </a>
                                </Link>
                            </li>)}
                        </ul>

                    </motion.nav>
                }
            </AnimatePresence>

        </div>
    )
}

