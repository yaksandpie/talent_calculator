import React from 'react';
import PropTypes from 'prop-types';

import styles from './Talent.module.css';


const Talent = ({ name, isLast}) => {
  return (
    <div className={!isLast ? styles.container : undefined}>
      <button
        className={`${styles.talentButton} ${styles.icon}`}
        style={{ backgroundPositionX: `var(--${name}-x)` }}
      />

      {!isLast && (
        <div className={styles.connector} aria-hidden />
      )}
    </div>
  );
};

Talent.propTypes = {
  name: PropTypes.string,
  isLast: PropTypes.bool,
};

export default Talent;