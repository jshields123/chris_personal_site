import styles from "./WhoIsSection.module.css";
import { WhoIs } from "../WhoIs";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";

const WhoIsSection = () => {
  return (
    <>
      <div className={styles.container}>
        <WhoIs />
        <Paragraph />
        <Button text={"Contact Today!"} isDisabled={false} onClick={() => {}} />
      </div>
    </>
  );
};

export { WhoIsSection };
