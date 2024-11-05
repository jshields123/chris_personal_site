import styles from "./WhoIsSection.module.css";
import { WhoIs } from "../WhoIs";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";
import Image from "next/image";

const WhoIsSection = () => {
  const onClick = () => {
    (window.location.href = "mailto:chris@cvdglass.com"),
      "_blank",
      "noopener noreferrer";
  };

  return (
    <div id="bio" className={styles.container}>
      <WhoIs />
      <div className={styles.content}>
        <Image
          src={"/images/bloke2.png"}
          alt="bloke2"
          height={260}
          width={350}
          className={styles.image}
        />
        <Paragraph />
      </div>
      <Button text={"Contact Today!"} isDisabled={false} onClick={onClick} />
    </div>
  );
};

export { WhoIsSection };
