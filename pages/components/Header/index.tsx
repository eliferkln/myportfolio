import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { SiLinkedin, SiGithub } from "react-icons/si";
import avatar from "../../../public/images/avatar2.png";

const Header = ({ endTouched }: { endTouched: boolean }) => {
  return (
    <nav className={styles.header}>
      <Image
        src="/rectangle.svg"
        alt=""
        className={styles.rectangleImage}
        layout="fill"
      />

      <div className={styles.topHeader}>
        <div className={styles.icons}>
          <a
            href="https://www.linkedin.com/in/hanifeerkalan/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin size="1.5rem" color="white" className={styles.icon} />
          </a>
          <a
            href="https://github.com/eliferkln"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size="1.5rem" color="white" className={styles.icon} />
          </a>
        </div>
        <ul className={styles.onglets} style={{ color: "#ffffff" }}>
          <li>
            <Link href="#home">
              <a className={styles.ongletItem}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#projects">
              <a className={styles.ongletItem}>Projects</a>
            </Link>
          </li>

          {endTouched ? (
            <li>
              <Link href="#contact">
                <a className={styles.ongletItem}>Contact</a>
              </Link>
            </li>
          ) : (
            <li>
              <a className={styles.ongletItem}>Contact</a>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.cuateFreelancer}>
        <Image
          src={avatar}
          alt=""
          height="600"
          width="600"
          layout="responsive"
        />
      </div>
      <div className={styles.headerTextContainer}>
        <p className={styles.Iam}>👋 Hi, I am</p>
        <p className={styles.MyName}>Hanife</p>
        <p>DEVELOPER</p>
      </div>
      <div className={styles.description}>
        A curious Software Developer who enjoys researching, learning and
        developing. I am currently focused on frontend development. My
        experiences at Front-End: - Creating dynamic sites with the desired
        design using React.js, Next.js, WebGL technologies - I have projects
        that I developed open source with React.js in my Github(@eliferkln) -
        Providing state management with Redux, Redux Toolkit, redux-saga -
        Experience with third-party libraries and APIs with JavaScript -
        Experience unique designs with SCSS/SASS - Responsive development of
        Figma design using My experience in other fields - Backend Development
        with Node.js, Express.js and MongoDB
      </div>
    </nav>
  );
};

export default Header;
