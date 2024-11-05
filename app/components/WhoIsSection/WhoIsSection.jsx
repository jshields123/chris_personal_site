import styles from "./WhoIsSection.module.css";
import { WhoIs } from "../WhoIs";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";
import Image from "next/image";

const WhoIsSection = ({ isMobile }) => {
  return (
    <div id="bio" className={styles.container}>
      <WhoIs />
      <div className={styles.content}>
        <Image
          src={"/images/bloke2.png"}
          alt="bloke2"
          height={isMobile ? 260 : 380}
          width={isMobile ? 350 : 550}
        />
        <Paragraph />
      </div>
      <Button text={"Contact Today!"} isDisabled={false} onClick={() => {}} />
    </div>
  );
};

export { WhoIsSection };
