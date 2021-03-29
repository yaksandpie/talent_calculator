import React from 'react';
import PropTypes from 'prop-types';

import Talent from '../Talent/Talent';

import styles from './TalentTree.module.css';


const TalentTree = ({ name, talents }) => {
  return (
    <div className={styles.container}>
      <span className={styles.talentPathTitle}>{name}</span>

      <ul className={styles.talentsContainer}>
        {talents.map((talent, index, array) => {
          const isLast = array.length - 1 === index;

          return (
            <li key={talent} className={!isLast ? 'width--100pct' : undefined}>
              <Talent name={talent} isLast={isLast} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TalentTree.propTypes = {
  name: PropTypes.string,
  talents: PropTypes.array,
};

export default TalentTree;