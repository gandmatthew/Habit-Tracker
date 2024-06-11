import styles from "./LoginLogo.module.css"

export const LoginLogo = () => {
    return (
        <div className={styles.slideRight}>
            <h2 className={styles.slideFirst}>Grow Your Best Self with</h2>
            <h1 className={styles.slideSecond}>Habit Tracker 🗒️</h1>
            <h2 className={styles.slideThird}>Plant 🌱, Log 🪵, Thrive ✌️!</h2>
        </div>
    )
}