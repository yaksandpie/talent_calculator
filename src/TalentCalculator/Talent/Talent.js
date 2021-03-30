import React from 'react';
import PropTypes from 'prop-types';

import cn from '../../utilities/cn';

import styles from './Talent.module.css';


const Talent = ({ treeId, name, isFirst, isActive, actions }) => {
  return (
    <div className={cn({
      [styles.container]: !isFirst,
      [styles.isActive]: isActive,
    })}>
      {!isFirst && (
        <div className={styles.connector} aria-hidden />
      )}

      <button
        className={cn({
          [styles.talentButton]: true,
          [styles.icon]: true,
        })}
        style={{
          backgroundPositionX: `var(--${name}-x)`,
          backgroundPositionY: isActive ? '0' : '50px',
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            // Prevents the click event from executing.
            e.preventDefault();
            if (!isActive) {
              actions.addPoint(name, treeId);
            } else {
              actions.removePoint(name, treeId);
            }
          }
        }}
        onClick={() => {
          // If item is not active, on left click, add point
          if (!isActive) {
            actions.addPoint(name, treeId);
          }
        }}
        onContextMenu={(e) => {
          // If item is active, on right click, remove point
          e.preventDefault();
          if (isActive) {
            actions.removePoint(name, treeId);
          }
        }}
      />
    </div>
  );
};

Talent.propTypes = {
  treeId: PropTypes.number,
  name: PropTypes.string,
  isFirst: PropTypes.bool,
  isActive: PropTypes.bool,
  actions: PropTypes.object,
};

export default Talent;