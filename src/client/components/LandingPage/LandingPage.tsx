import { FunctionComponent } from "react";
import styles from '../../styles/LandingPage/LandingPage.module.scss';

interface Props {}

const LandingPage: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <p>Test</p>
    </div>
  );
};

export default LandingPage;
