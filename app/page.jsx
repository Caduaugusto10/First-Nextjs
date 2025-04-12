import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Section from "../components/Section";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <div className={styles.container}>
                    <Section title="Big Mac"/>
                    <Section title="Big Tasty"/>
                    <Section title="Cheddar McMelt"/>
                </div>

                <Aside />
            </main>
            <Footer />
        </div>
    )
}