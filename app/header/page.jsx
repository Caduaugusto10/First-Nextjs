import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title1}>Mc</h1>
            <h3 className={styles.title2}>Donald's</h3>
        </header>
    )
}