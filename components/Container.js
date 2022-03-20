import styles from './container.module.scss'

export default function Container() {
    return (
        <div>

        </div>
    )
}

export function FlexContainer({ children, justifyContent }) {

    const JUSTIFYCONTENT = ["center", "space-evenly", "space-between", "space-evenly", "space-around", "flex-start", "flex-end"]
    let index = JUSTIFYCONTENT.findIndex((value) => value === justifyContent) ?? 0
    let justifyContentVALUE = JUSTIFYCONTENT[index]
    return (
        <div className={styles['flex-container'] + " " + styles['justify-content--' + justifyContentVALUE]}>
            {children}
        </div>
    )
}

export function PageContainer({ children, title }) {
    return (
        <div className='page'>
            {title && <h1 className='page__title'>{title}</h1>}
            {children}
        </div>
    )
}


export function ModalContainer({children}){
    return(
        <div className={styles['modal-container']}>
            {children}
        </div>
    )
}