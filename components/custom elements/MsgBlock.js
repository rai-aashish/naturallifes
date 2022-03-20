import styles from './msg-block.module.scss'
export function ErrorBlock({ msg, condition }) {
    if (condition)
        return (
            <div className={styles["msg-block"]}>
                <p className={styles['error']}>
                    <strong>Error : </strong> {msg ?? "report to admin"}
                </p>
            </div>
        )
    else return (<></>)
}

export function InfoBlock({ msg, condition }) {
    if (condition)
        return (
            <div className={styles["msg-block"]}>
                <p className={styles['info']}>
                    <strong>Info : </strong> {msg}
                </p>
            </div>
        )
    else return (<></>)
}

export function SuccessBlock({ msg, condition }) {
    if (condition)
        return (
            <div className={styles["msg-block"]}>
                <p className={styles['success']}>
                    <strong>Success : </strong> {msg ?? "done!"}
                </p>
            </div >
        )
    else return (<></>)
}

export function WarningBlock({ msg, condition }) {
    if (condition)
        return (
            <div className={styles["msg-block"]}>
                <p className={styles['warn']}>
                    <strong>Warning : </strong> {msg}
                </p>
            </div>
        )
    else return (<></>)
}

export default function MsgBlock({ msg, condition }) {
    if (condition)
        return (
            <div className={styles["msg-block"]}>
                <p>
                    {msg}
                </p>
            </div>
        )
    else return (<></>)
}