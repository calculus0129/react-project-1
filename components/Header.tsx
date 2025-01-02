import Image from 'next/image';
import styles from './Header.module.css';

const Header: React.FC<{desc: string}> = ({desc}) => {
    return (
        <header>
        <Image
            className={styles.logo}
            src="/assets/react-core-concepts.png"
            alt="Stylized atom"
            width={249}
            height={249}
            priority
        />
        <h1>React Essentials</h1>
        <p>
            `{desc}` React concepts you will need for almost any app you are
            going to build!
        </p>
        </header>
    );
};

export default Header;