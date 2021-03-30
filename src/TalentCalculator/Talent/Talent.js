import React from 'react';
import PropTypes from 'prop-types';

import styles from './Talent.module.css';


const Talent = ({ treeId, name, isLast, isActive, actions }) => {
  return (
    <div className={!isLast ? styles.container : undefined}>
      <button
        className={`${styles.talentButton} ${styles.icon}`}
        style={{
          backgroundPositionX: `var(--${name}-x)`,
          backgroundPositionY: isActive ? '0' : '50px',
        }}
        onClick={() => {
          if (isActive) {
            actions.removePoint(name, treeId);
          } else {
            actions.addPoint(name, treeId);
          }
        }}
      />

      {!isLast && (
        <div className={styles.connector} aria-hidden />
      )}
    </div>
  );
};

Talent.propTypes = {
  treeId: PropTypes.number,
  name: PropTypes.string,
  isLast: PropTypes.bool,
  isActive: PropTypes.bool,
  actions: PropTypes.object,
};

export default Talent;