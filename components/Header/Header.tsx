import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__greetings}>Cześć!</h1>
      <p className={styles.header__description}>Witam Cię na moim blogu.</p>
      <p className={styles.header__description}>
        Sprawdź co dla Ciebie przygotowałem.
      </p>
    </div>
  );
}
