import { FunctionComponent } from "react";
import styles from '../../styles/LandingPage/LandingPage.module.scss';
import ZoneOne from "./ZoneOne";
import ZoneTwo from "./ZoneTwo";
import ZoneThree from "./ZoneThree";

interface Props {}

const LandingPage: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <ZoneOne/>
      <ZoneTwo/>
      <ZoneThree/>
    </div>
  );
};

export default LandingPage;
