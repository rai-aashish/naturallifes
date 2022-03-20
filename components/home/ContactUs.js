import PageSection from "../custom elements/PageSection";
import { useForm } from "react-hook-form";
import { FlexContainer, ModalContainer } from '../Container'
import styles from './contact-us.module.scss'
import Button from '../custom elements/Button'
import LoadingSpinner from '../../components/custom elements/LoadingSpinner'
import axios from "axios";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactUs() {

    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
        fallbackInView: true
    })
    const [formRef, formInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
        fallbackInView: true
    })

    const animation = useAnimation()
    const formAnimation = useAnimation()

    const variants = {
        fromRight: {
            translateX: 100,
            opacity: 0
        },
        fromLeft: {
            translateX: -100,
            opacity: 0
        },
        to: {
            translateX: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
                type: "spring",
                stiffness: 60
            }
        }
    }

    useEffect(() => {
        if (inView)
            animation.start("to")
        else
            animation.start("fromLeft")
    }, [inView, animation])

    useEffect(() => {
        if (formInView)
            formAnimation.start("to")
        else
            formAnimation.start("fromRight")
    }, [formInView, formAnimation])

    return (
        <PageSection
            backgroundColor="white-background"
            curve={false}
            title="Contact Us"
        >
            <FlexContainer>
                <motion.div
                    ref={ref}
                    variants={variants}
                    initial="fromLeft"
                    animate={animation}
                >
                    <ContactUsSvg />
                </motion.div>

                <motion.div
                    className={styles['form-container']}
                    ref={formRef}
                    variants={variants}
                    initial="fromRight"
                    animate={formAnimation}
                >
                    <ContactUsForm />
                </motion.div>
            </FlexContainer>

        </PageSection>
    )
}

function ContactUsSvg() {
    return (
        <div className={styles["svg-container"]}>
            <svg version="1.1" id="b9d38392-7b4e-42de-852c-494fd56f919b" xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 614.2 528.7"
                style={{ enableBackground: 'new 0 0 614.2 528.7' }} space="preserve">

                <path className={styles["st0"]} d="M196.2,73c-4.9-26.4,2.8-56.5,24.4-72.5c-1.2,29.2,7.9,57.9,25.8,81c6.9,8.9,15.6,18.1,15.3,29.3
	c-0.2,7-4,13.5-9,18.5c-5,4.9-11.2,8.5-17.2,12l-0.9,1.5C216.8,122.7,201.1,99.4,196.2,73z" />
                <path className={styles["st1"]} d="M221,0.9c-9.1,20.3-11.5,43-7,64.8c0.9,4.7,2.5,9.2,4.8,13.4c2.4,4,5.8,7.3,9.9,9.6c3.8,2.2,7.9,4,11.1,7
	c3.2,3.2,5,7.7,4.7,12.2c-0.2,5.6-2.3,10.9-4.6,15.9c-2.5,5.6-5.3,11.4-5.1,17.7c0,0.8-1.2,0.7-1.2,0c-0.3-11,7.6-19.8,9.4-30.3
	c0.8-4.9,0.2-10.1-3.3-13.9c-3-3.3-7.3-5.2-11.1-7.3c-4-2.1-7.5-5.2-10-9c-2.5-4.1-4.3-8.5-5.3-13.2c-2.4-10.5-3.2-21.3-2.3-32
	c1-12.3,4-24.2,9-35.5C220.3-0.4,221.3,0.2,221,0.9L221,0.9z" />
                <path className={styles["st1"]} d="M212.2,58.7c-7.8,0.5-14.8-4.6-16.6-12.2c-0.2-0.7,1-1,1.1-0.3c1.7,7.1,8.2,11.9,15.4,11.3
	C212.9,57.5,212.9,58.7,212.2,58.7z" />
                <path className={styles["st1"]} d="M226.7,87.8c5.1-5.8,7.8-13.3,7.7-21c0-0.8,1.2-0.7,1.2,0c0.2,8-2.7,15.8-8,21.8
	C227,89.3,226.2,88.4,226.7,87.8z" />
                <path className={styles["st1"]} d="M213.3,24.3c3,0.4,6-0.7,8-3c0.5-0.6,1.3,0.3,0.8,0.8c-2.2,2.5-5.5,3.8-8.8,3.3c-0.3,0-0.6-0.3-0.6-0.6
	C212.7,24.5,213,24.3,213.3,24.3L213.3,24.3z" />
                <path className={styles["st0"]} d="M309,22.4c-0.3,0.4-0.6,0.7-0.9,1.1c-4,5-7.7,10.3-10.8,15.9c-0.3,0.4-0.5,0.9-0.7,1.3
	c-7.5,13.5-12.4,28.3-14.6,43.6c-0.8,6.1-1.2,12.2-1.1,18.4c0.1,8.5,1,17.7-1.6,25.5c-0.3,0.8-0.6,1.6-0.9,2.4l-41.8,13.3
	c-0.1,0-0.2,0-0.3,0l-1.6,0.6c0-0.3,0-0.6-0.1-1c0-0.2,0-0.4,0-0.6c0-0.1,0-0.2,0-0.4c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.3
	c-0.1-1.8-0.2-3.7-0.3-5.5c0,0,0,0,0,0c-0.7-14.1-0.3-28.3,2.3-42.1c0.1-0.4,0.2-0.8,0.3-1.3c1.2-6.2,2.9-12.3,5.1-18.2
	c1.2-3.2,2.6-6.4,4.1-9.5c4-8,9.2-15.3,15.4-21.6c12.5-12.7,28.8-21.2,46.4-21.5C308.1,22.4,308.5,22.4,309,22.4z" />
                <path className={styles["st1"]} d="M309.1,22.9c-19.5,10.8-35.1,27.4-44.6,47.5c-2.1,4.3-3.6,8.9-4.2,13.6c-0.5,4.6,0.2,9.3,2.1,13.6
	c1.7,4,3.9,7.9,4.6,12.3c0.7,4.5-0.7,9.1-3.6,12.6c-3.5,4.4-8.4,7.3-13.3,9.9c-5.4,2.9-11.1,5.9-14.7,11c-0.4,0.6-1.4-0.1-0.9-0.7
	c6.4-8.9,18-11.2,25.7-18.5c3.6-3.4,6.2-7.9,5.7-13.1c-0.4-4.5-2.7-8.5-4.4-12.5c-1.9-4.1-2.8-8.7-2.6-13.2
	c0.4-4.8,1.7-9.4,3.7-13.8c4.4-9.8,10.2-18.9,17.4-27c8.1-9.2,17.8-16.9,28.6-22.9C309.3,21.5,309.7,22.6,309.1,22.9z" />
                <path className={styles["st1"]} d="M267.2,63.8c-6.5-4.2-9-12.6-5.9-19.7c0.3-0.7,1.4-0.3,1.1,0.4c-2.9,6.6-0.6,14.4,5.5,18.3
	C268.5,63.2,267.8,64.2,267.2,63.8L267.2,63.8z" />
                <path className={styles["st1"]} d="M261.2,95.7c7.5-1.5,14.2-5.9,18.7-12.1c0.4-0.6,1.4,0.1,0.9,0.7c-4.7,6.5-11.7,11-19.5,12.6
	C260.6,97.1,260.5,95.9,261.2,95.7L261.2,95.7z" />
                <path className={styles["st1"]} d="M288.9,36.9c2.1,2.1,5.2,3,8.2,2.4c0.7-0.2,0.9,1,0.2,1.2c-3.3,0.7-6.7-0.3-9.1-2.7c-0.2-0.2-0.3-0.6-0.1-0.8
	C288.2,36.8,288.6,36.7,288.9,36.9L288.9,36.9z" />
                <path className={styles["st2"]} d="M434.6,200.3c0.1,0.5,0.2,1,0.2,1.5l38.6,22.3l9.4-5.4l10,13.1l-15.7,11.2c-2.6,1.9-6.1,1.8-8.6-0.2l-39.8-31.4
	c-4.9,1.8-10.3-0.7-12.1-5.6c-1.8-4.9,0.7-10.3,5.6-12.1c4.9-1.8,10.3,0.7,12.1,5.6C434.4,199.6,434.5,199.9,434.6,200.3
	L434.6,200.3z" />
                <path className={styles["st3"]} d="M473.9,221.6c0.2-1.1,1-2.1,2-2.7l17.8-9.7c4.9-3.7,12-2.8,15.7,2.2c3.7,4.9,2.8,11.9-2.2,15.7L493,241.6
	c-1.6,1.6-4.1,1.6-5.7,0c-0.1-0.1-0.3-0.3-0.4-0.4l-12.3-16.3C473.9,223.9,473.6,222.7,473.9,221.6z" />
                <path className={styles["st4"]} d="M498.9,175c2.6-8.2,8.4-15.7,16.4-18.4c8.1-2.8,19.9,1.4,25.9,7.5c11.1,11,11.4,24.6,3.8,36.6
	c-1.5-0.1-6.7-0.1-8.3-0.2l-2.2-7.2v7.2c-12-0.4-24.4-0.1-36.9,0.1C496.6,191.9,496.3,183.1,498.9,175z" />
                <polygon className={styles["st2"]} points="502.3,507.9 491.4,507.9 486.2,465.8 502.3,465.8 " />
                <polygon className={styles["st2"]} points="569.5,507.9 558.6,507.9 553.4,465.8 569.5,465.8 " />
                <polygon className={styles["st2"]} points="537.7,249.4 540.1,255.9 539.6,262.3 491.3,279.1 493.7,250.9 499.1,244.5 " />
                <ellipse transform="matrix(0.3827 -0.9239 0.9239 0.3827 149.4024 590.2258)" className={styles["st5"]} cx="516.4" cy="183.3"
                    rx="17.3" ry="17.3" />
                <path className={styles["st4"]} d="M548.5,278.9v11c0,0,12.9,16.7,5.9,29.6l19.8,171.1h-20.8l-34.7-144.4l-14.8,141.4h-17.8l-2.1-112.5
	c-0.6-29.6,4.4-59,14.6-86.8v0L548.5,278.9z" />
                <path className={styles["st4"]} d="M504.5,160.8c10.2-6.2,23.6-3,29.8,7.2c2.1,3.5,3.2,7.6,3.2,11.7c-9.7,0.4-19.8,0.6-30.1,0.6l-2.4-6l-1.4,6
	c-3.1,0-6.3,0-9.4,0C493.8,172.4,497.8,165,504.5,160.8z" />
                <path className={styles["st4"]} d="M507.2,528.7h-7.7l-1.4-7.3l-3.5,7.3H474c-2.5,0-4.6-2.1-4.6-4.6c0-1.5,0.7-2.9,2-3.8l16.4-11.3v-7.4l17.2,1
	L507.2,528.7z" />
                <path className={styles["st4"]} d="M575.4,528.7h-7.7l-1.4-7.3l-3.5,7.3h-20.5c-2.5,0-4.6-2.1-4.6-4.6c0-1.5,0.7-2.9,2-3.8l16.4-11.3v-7.4l17.2,1
	L575.4,528.7z" />
                <path className={styles["st3"]} d="M556.4,314.2c1-13.2,0-26.5-2.9-39.4c-3.7-16.3-8.3-37-8.4-37.6c0,0,0,0,0,0l-1.4-30.4c0-0.2-0.2-0.3-0.3-0.3
	l-9.8-0.3c-0.2,0-0.3-0.2-0.3-0.4l0,0c0-3.1-2.5-5.6-5.6-5.6l0,0h-19.6c-2.6,0-4.9,2-5.2,4.6c0,0.2-0.2,0.3-0.4,0.3l-7.6-0.3
	c-0.2,0-0.3,0.1-0.3,0.2l-0.5,1.7c-7.7,24.8-9.9,51.1-6.3,76.8c0.9,6.9,0.5,17.2,0.2,22.9c-0.1,2.4,1.6,4.4,4,4.5c0,0,0,0,0,0
	c14.2,0.8,54.4,20.3,64.1,11C555.8,322,556,318.6,556.4,314.2z" />
                <path className={styles["st2"]} d="M477.6,200.3c0.1,0.5,0.2,1,0.2,1.5l38.6,22.3l9.4-5.4l10,13.1l-15.7,11.2c-2.6,1.9-6.1,1.8-8.6-0.2l-39.8-31.4
	c-4.9,1.8-10.3-0.7-12.1-5.6c-1.8-4.9,0.7-10.3,5.6-12.1c4.9-1.8,10.3,0.7,12.1,5.6C477.4,199.6,477.5,199.9,477.6,200.3
	L477.6,200.3z" />
                <path className={styles["st3"]} d="M516.9,221.6c0.2-1.1,1-2.1,2-2.7l17.8-9.7c4.9-3.7,12-2.7,15.7,2.2c3.7,4.9,2.8,11.9-2.2,15.7L536,241.6
	c-1.6,1.6-4.1,1.6-5.7,0c-0.1-0.1-0.3-0.3-0.4-0.4l-12.3-16.3C516.9,223.9,516.6,222.7,516.9,221.6z" />
                <circle className={styles["st0"]} cx="45" cy="423.7" r="45" />
                <path className={styles["st1"]} d="M442.7,267.5L116.5,417.3c-9.7,4.4-21.1,0.2-25.5-9.5L10.5,232.5c-4.4-9.7-0.2-21.1,9.5-25.5L346.1,57.3
	c9.7-4.4,21.1-0.2,25.5,9.5L452.1,242C456.5,251.7,452.3,263.1,442.7,267.5z" />
                <path className={styles["st6"]} d="M25.4,218.8c-3.1,1.4-4.5,5.2-3.1,8.3l80.5,175.3c1.4,3.1,5.2,4.5,8.3,3.1l326.1-149.7c3.1-1.4,4.5-5.2,3.1-8.3
	L359.8,72.1c-1.4-3.1-5.2-4.5-8.3-3.1L25.4,218.8z" />
                <path className={styles["st7"]} d="M442.7,267.5L116.5,417.3c-9.7,4.4-21.1,0.2-25.5-9.5L10.5,232.5c-4.4-9.7-0.2-21.1,9.5-25.5L346.1,57.3
	c9.7-4.4,21.1-0.2,25.5,9.5L452.1,242C456.5,251.7,452.3,263.1,442.7,267.5z M20.8,208.8c-8.7,4-12.4,14.2-8.5,22.9L92.8,407
	c4,8.7,14.2,12.4,22.9,8.5l326.1-149.7c8.7-4,12.4-14.2,8.5-22.9L369.8,67.6c-4-8.7-14.2-12.4-22.9-8.5L20.8,208.8z" />
                <path className={styles["st7"]} d="M361.2,188L102.1,306.9c-4.3,2-9.3,1-12.6-2.3l-75.8-77.7c-4.3-4.4-4.2-11.4,0.2-15.7c0.9-0.9,2-1.6,3.1-2.1
	L349,55.9c5.6-2.6,12.2-0.1,14.8,5.4c0.5,1.1,0.8,2.2,0.9,3.4l0,0l2.9,112.8C367.8,182.1,365.2,186.1,361.2,188z M349.9,57.8
	l-332,153.1c-4.6,2.1-6.6,7.5-4.5,12.1c0.4,0.9,1,1.8,1.8,2.6l75.8,77.7c2.7,2.8,6.8,3.5,10.3,1.9l259.1-118.9
	c3.3-1.5,5.4-4.9,5.3-8.5l-2.9-111.8l0.4,0l-0.4,0c-0.1-5-4.3-9-9.4-8.9C352.2,57,351,57.2,349.9,57.8z" />
                <path className={styles["st1"]} d="M198.7,348.9L118,386c-2.5,1.1-5.4,0.1-6.5-2.4c-1.1-2.5-0.1-5.4,2.4-6.5c0,0,0,0,0,0l80.7-37.1
	c2.5-1.1,5.4,0,6.5,2.4C202.2,344.9,201.2,347.8,198.7,348.9z" />
                <path className={styles["st7"]} d="M257.8,234.4c5.8,12.7,0.3,27.6-12.4,33.5c-12.7,5.8-27.6,0.3-33.5-12.4c0,0,0,0,0,0" />
                <path className={styles["st1"]} d="M439.7,506H80.9c-10.6,0-19.2-8.6-19.3-19.3V293.8c0-10.6,8.6-19.2,19.3-19.3h358.8c10.6,0,19.2,8.6,19.3,19.3
	v192.9C459,497.3,450.4,505.9,439.7,506z" />
                <path className={styles["st8"]} d="M80.9,287.6c-3.5,0-6.3,2.8-6.3,6.3v192.9c0,3.5,2.8,6.3,6.3,6.3h358.8c3.5,0,6.3-2.8,6.3-6.3V293.8
	c0-3.5-2.8-6.3-6.3-6.3H80.9z" />
                <path className={styles["st3"]} d="M439.7,506H80.9c-10.6,0-19.2-8.6-19.3-19.3V293.8c0-10.6,8.6-19.2,19.3-19.3h358.8c10.6,0,19.2,8.6,19.3,19.3
	v192.9C459,497.3,450.4,505.9,439.7,506z M80.9,276.6c-9.5,0-17.2,7.7-17.3,17.3v192.9c0,9.5,7.7,17.2,17.3,17.3h358.8
	c9.5,0,17.2-7.7,17.3-17.3V293.8c0-9.5-7.7-17.2-17.3-17.3H80.9z" />
                <path className={styles["st3"]} d="M398.9,399.7H113.8c-4.7,0-8.9-3-10.5-7.4L66.9,290c-2.1-5.8,1-12.2,6.7-14.2c1.2-0.4,2.5-0.6,3.7-0.6
	l365.6-0.6c6.1,0,11.1,5,11.1,11.1c0,1.2-0.2,2.3-0.5,3.5l0,0l-44.5,103.8C407.4,397,403.3,399.7,398.9,399.7z M442.9,276.6
	l-365.6,0.6c-5,0-9.1,4.1-9.1,9.1c0,1,0.2,2.1,0.5,3.1l36.5,102.3c1.3,3.6,4.7,6.1,8.6,6.1h285.1c3.7,0,7-2.2,8.4-5.5l44.1-102.8
	l0.4,0.2l-0.4-0.2c2-4.6-0.2-10-4.8-12C445.4,276.8,444.2,276.6,442.9,276.6z" />
                <path className={styles["st1"]} d="M184.1,478.1H95.3c-2.7,0-4.9-2.2-4.9-4.9c0-2.7,2.2-4.9,4.9-4.9l0,0h88.8c2.7,0,4.9,2.2,4.9,4.9
	C189,475.9,186.8,478.1,184.1,478.1z" />
                <path className={styles["st3"]} d="M285.5,398.7c0,13.9-11.3,25.2-25.2,25.2c-13.9,0-25.2-11.3-25.2-25.2" />
                <circle className={styles["st0"]} cx="126" cy="99.7" r="9" />
                <circle className={styles["st0"]} cx="9" cy="315.7" r="9" />
                <circle className={styles["st0"]} cx="459" cy="146.7" r="9" />
                <path className={styles["st7"]} d="M613.1,528.7H441.8c-0.7,0-1.2-0.5-1.2-1.2c0-0.7,0.5-1.2,1.2-1.2h171.3c0.7,0,1.2,0.5,1.2,1.2
	C614.2,528.1,613.7,528.6,613.1,528.7z" />
            </svg>
        </div>
    )
}


function ContactUsForm() {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const [showFormStatus, setShowFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState({
        isSubmitting: false,
        isSuccess: false,
        isError: false
    })

    const onSubmit = async (data) => {
        console.log(data)

        //show form status
        setShowFormStatus(true)
        setFormStatus({
            isSubmitting: true,
            isSuccess: false,
            isError: false
        })

        //call api to post data
        const res = await axios.post("https://formspree.io/f/mpzbwjla", data, {
            headers: {
                'Accept': 'application/json'
            }
        }).catch((err) => {
            //show error msg
            setFormStatus({
                isSubmitting: false,
                isSuccess: false,
                isError: true
            })
        })

        if (res.status === 200) {
            // reset form
            reset()
            //show success message
            setFormStatus({
                isSubmitting: false,
                isSuccess: true,
                isError: false
            })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={`${styles["form-field"]} ${errors.fullName && styles["error"]}`}>
                    <label>
                        Full Name* {errors.fullName && <small>is required</small>}
                    </label>
                    <input {...register("fullName", { required: true })} />

                </div>

                <div className={`${styles["form-field"]} ${errors.email && styles["error"]}`}>
                    <label>
                        Email*{errors.email?.type === 'required' ? <small>is required</small>
                            :
                            errors.email && <small>is invalid</small>
                        }
                    </label>
                    <input className={errors.email && styles["error"]} type="email" defaultValue="" {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />

                </div>

                <div className={`${styles["form-field"]} ${errors.subject && styles["error"]}`}>
                    <label>
                        Subject* {errors.subject && <small>is required</small>}
                    </label>
                    <input {...register("subject", { required: true })} />

                </div>

                <div className={`${styles["form-field"]} ${errors.message && styles["error"]}`}>
                    <label>
                        Message* {errors.message && <small>is required</small>}
                    </label>
                    <textarea {...register("message", { required: true })} />

                </div>

                <Button type="submit" btnStyle="btn--primary-bg" btnSize="btn--xmedium">Send</Button>
            </form>

            {/* form state */}
            {showFormStatus &&
                <ModalContainer>
                    {formStatus.isSubmitting && <LoadingSpinner />}
                    {formStatus.isError &&
                        <div className={styles["status-message"]}>
                            <p>Ops!! Something went wrong and your request couldn&#39;t be completed. Please Try again.</p>
                            <Button
                                btnSize="btn--medium"
                                btnStyle="btn--danger-bg"
                                onClick={() => setShowFormStatus(false)}
                            >
                                Close
                            </Button>
                        </div>
                    }

                    {formStatus.isSuccess &&
                        <div className={styles["status-message"]}>
                            <p>Yay!! your message has been sent successfully.</p>
                            <Button
                                btnSize="btn--medium"
                                btnStyle="btn--success-bg"
                                onClick={() => setShowFormStatus(false)}
                            >
                                Close
                            </Button>
                        </div>
                    }
                </ModalContainer>
            }
        </>
    )
}

