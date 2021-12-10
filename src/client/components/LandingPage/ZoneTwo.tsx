import { FunctionComponent } from "react";
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logos/name.png'
import styles from "../../styles/LandingPage/LandingPageZoneOne.module.scss";
import womanSit from "../../../public/landing-page/woman-sit.svg";

interface Props {}

const LandingPageZoneTwo: FunctionComponent<Props> = () => {
  return (
    <div className={styles.lpZone1}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          className={styles.logoImg}
          src={logo}
          alt='Logo'
        />
      </div>
      {/* Femme assise + text */}
      <div className={styles.txtWoman}>
        {/* Femme */}
        <div className={styles.womanSitDiv}>
          <Image
            className={styles.womanSitImg}
            src={womanSit}
            alt='Woman sit with a book'
          />
        </div>
        {/* Text */}
        <div className={styles.txt}>
          <p className={styles.txtQuestionInstit}>
            Vous êtes&nbsp;
            <span className={styles.txtQuestionInstitSpan}>
              instituteur
            </span>
            ?
          </p>
          <p className={styles.txtQuestionInspi}>
            Vous voulez &nbsp;
            <span className={styles.txtQuestionInspiSpan}>
              partager&nbsp;
            </span>
            vos cours<br/>
          
            ou vous cherchez l&apos;
            <span className={styles.txtQuestionInspiSpan}>
              inspiration
            </span>
            ?
          </p>
          <button type='button' className={styles.btnInscription}>
            Je m&apos;inscris
          </button>
          <Link href={``}>
            <a className={styles.redirectConnection}>Vous possédez déjà un compte ?</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LandingPageZoneTwo;