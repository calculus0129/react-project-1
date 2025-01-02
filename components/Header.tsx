import Image from "next/image";
import "./Header.css";

import reactImg from "@/public/assets/react-core-concepts.png";

const Header: React.FC<{ desc: string }> = ({ desc }) => {
  return (
    <header>
      {/* This would also work. */}
      {/* <Image
            className={styles.logo}
            src="/assets/react-core-concepts.png"
            alt="Stylized atom"
            width={249}
            height={249}
            priority
        /> */}
      <Image
        src={reactImg}
        alt="Stylized atom"
        width={499}
        height={499}
        priority
      />
      <h1>React Essentials</h1>
      <p>
        `{desc}` React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
};

export default Header;
