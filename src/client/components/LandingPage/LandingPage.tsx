import Image from 'next/image'
import { FunctionComponent } from "react";
import Link from 'next/link'
import logo from '../../../public/logos/name.png'
import styles from '../../styles/LandingPage/LandingPage.module.scss';
import womanSit from '../../../public/landing-page/woman-sit.svg';

interface Props {}

const LandingPage: FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lpZone1}>
        <div className={styles.logo}>
          <Image
            className={styles.logoImg}
            src={logo}
            alt='Logo'
          />
        </div>
        <div className={styles.womanSitDiv}>
          <Image
            className={styles.womanSitImg}
            src={womanSit}
            alt='Woman sit with a book'
          />
        </div>
        <div className={styles.txt}>
          <p className={styles.txtQuestionInstit}>
            Vous êtes
            <span className={styles.txtQuestionInstitSpan}>
              instituteur
            </span>
            ?
          </p>
          <p className={styles.txtQuestionInspi}>
            Vous voulez
            <span className={styles.txtQuestionInspiSpan}>
              partager
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
      {/* <div className={styles.lpZone2}></div>
      <div className={styles.lpZone3}></div> */}
    </div>
  );
};

export default LandingPage;
