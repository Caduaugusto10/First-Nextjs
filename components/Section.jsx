import styles from "../styles/Section.module.css";

export default function Section( {title} ) {
    return (
        <section className={styles.cards}>
            <div className={styles.horizontal}>
                <h2 className={title}></h2>
            </div>
        </section>
    )
}