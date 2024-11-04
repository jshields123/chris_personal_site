import styles from "./WhoIsSection.module.css";
import { WhoIs } from "../WhoIs";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";
import Image from "next/image";

const WhoIsSection = ({ isMobile }) => {
  return (
    <>
      <div className={styles.container}>
        <WhoIs />
        {!isMobile && (
          <Image
            src={"/images/bloke2.png"}
            alt="bloke2"
            height={380}
            width={550}
          />
        )}
        <Paragraph />
        <Button text={"Contact Today!"} isDisabled={false} onClick={() => {}} />
      </div>
    </>
  );
};

export { WhoIsSection };
