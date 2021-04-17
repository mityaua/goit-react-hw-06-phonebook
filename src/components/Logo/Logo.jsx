import { CSSTransition } from 'react-transition-group';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
      <h1 className={styles.title}>Phonebook</h1>
    </CSSTransition>
  );
};

export default Logo;
