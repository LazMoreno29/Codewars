import Image from 'next/image';
import logo from '../public/logo.svg';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <section className={styles.home}>
      <Image src={logo} alt='logo' />
    </section>
  );
}
