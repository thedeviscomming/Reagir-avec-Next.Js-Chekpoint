import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenue sur mon portfolio</h1>
      <nav>
        <Link href="/about">À propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
