import React from 'react';
import PropTypes from 'prop-types';

import Talent from '../Talent/Talent';

import I18n from '../../utilities/i18n';

import styles from './TalentTree.module.css';


const TalentTree = ({ actions, points, tree }) => {
  return (
    <div className={styles.container}>
      <span className={styles.talentPathTitle}>{I18n.t(tree.name)}</span>

      <ul className={styles.talentsContainer}>
        {tree.talents.map((talent, index, array) => {
          const isLast = array.length - 1 === index;
          const isActive = points > index;

          return (
            <li key={talent} className={!isLast ? 'width--100pct' : undefined}>
              <Talent
                name={talent}
                isActive={isActive}
                isLast={isLast}
                actions={actions}
                treeId={tree.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

TalentTree.propTypes = {
  actions: PropTypes.object,
  points: PropTypes.number,
  tree: PropTypes.object,
};

export default TalentTree;