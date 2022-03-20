import styles from './button.module.scss'

export default function Button({ children, btnStyle, btnSize, type, onClick }) {

    const STYLES = ["none", "btn--primary-bg","btn--success-bg","btn--danger-bg","btn--grey-bg", "btn--secondary-bg", "btn--tertiary-bg", "btn--white-bg", "btn--primary-border", "btn--secondary-border", "btn--tertiary-border", "btn--white-border", "btn--book-now"]
    const SIZES = ["btn--small", "btn--medium", "btn--xmedium", "btn--large", "btn--xlarge"]

    var index = STYLES.findIndex((style) => style === btnStyle) ?? 0
    const applyBtnStyle = STYLES[index]
    index = SIZES.findIndex((size) => size === btnSize)
    const applyBtnSize = SIZES[index]

    return (
        <button
            type={type}
            className={styles['btn'] + " " + styles[applyBtnStyle] + " " + styles[applyBtnSize]}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
