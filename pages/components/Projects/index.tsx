import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "../../../styles/Projects.module.css";
import ProjectItem from "./ProjectItem";
import { IoChevronForwardOutline, IoChevronBackSharp } from "react-icons/io5";

function Projects({
  endTouched,
  setEndTouched,
}: {
  endTouched: boolean;
  setEndTouched: Dispatch<SetStateAction<boolean>>;
}) {
  const projectsListRef = useRef<HTMLUListElement | null>(null);
  const refContainer = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState<number>(0);

  let progress = 0;

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = percentY < 0 ? 0 : percentY > 1 ? 1 : percentY;
  }

  const getTransform: (progress: number) => string = (progress: number) => {
    let scrollSize = 180;
    if (typeof window !== "undefined") {
      // Client-side-only code
      scrollSize = window.innerWidth > 700 ? 180 : 240;
    }
    return `translateX(-${progress * scrollSize}vw)`;
  };

  const getLeft: (index: number) => string = (index: number) => {
    return 30 + index * 80 + "vw";
  };

  return (
    <div className={styles.container} ref={refContainer} id="projects">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Some things I’ve worked on</h1>
        <div className={styles.underline}></div>
      </div>

      <ul className={styles.projectsList} ref={projectsListRef}>
        <li
          key={1}
          style={{ left: getLeft(0), transform: getTransform(progress) }}
        >
          <ProjectItem
            title="AI Meeting"
            description="Artificial Intelligence Supported Video Conferencing System"
            technoDescription="React - Socket.io - WebRTC - Express - MongoDB"
            owner="Fırat Üniversitesi"
            ownerLink="https://github.com/firat-university-graduation-project/graduation-backend"
            imageUrl="/images/frame1.png"
            index={1}
          />
        </li>
        <li
          key={2}
          style={{ left: getLeft(1), transform: getTransform(progress) }}
        >
          <ProjectItem
            title="Discord Clone UI"
            description="Clone of a chat app that people can send messages to."
            technoDescription=""
            owner="Hanife Erkalan"
            ownerLink="https://github.com/eliferkln/discordclone"
            imageUrl="/images/frame5.png"
            index={2}
          />
        </li>
        <li
          key={3}
          style={{ left: getLeft(2), transform: getTransform(progress) }}
        >
          <ProjectItem
            title="Restaurant Reservation System "
            description="Restaurant Reservation System control panel "
            technoDescription="Node.js -  JavaScript - Express.js - SASS - MongoDB"
            owner="Fırat Üniversitesi"
            ownerLink="https://github.com/eliferkln/Restaurant-System-/tree/master/Restaurant"
            imageUrl="/images/fram2.png"
            index={3}
          />
        </li>
      </ul>
    </div>
  );
}

export default Projects;
