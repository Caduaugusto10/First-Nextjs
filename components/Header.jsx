import styles from "../styles/Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={styles.mc}>M</span>
                <span className={styles.mcDonalds}>Mc Donald`s</span>
            </h1>
        </header>
    )
}