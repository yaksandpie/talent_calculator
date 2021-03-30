import React from 'react';

import talentMockData from './talentMockData';
import I18n from '../utilities/i18n';

import TalentTree from './TalentTree/TalentTree';

import styles from './TalentCalculator.module.css';


const reducer = (state, action) => {
  const getPointsSpent = (trees) => {
    return trees.reduce((acc, item) => acc + item.points, 0);
  }

  switch (action.type) {
    case 'addPoint': {
      const { trees, pointCap } = { ...state };
      const currentTree = trees[action.id];
      const talentValue = currentTree.talents.indexOf(action.name) + 1;

      const pointsSpent = getPointsSpent(trees);
      const pointsAvailable = pointCap - pointsSpent + currentTree.points;

      if (pointsAvailable >= talentValue) {
        currentTree.points = talentValue;
      }

      return {
        ...state,
        trees,
      };
    }
    case 'removePoint': {
      const { trees } = { ...state };
      trees[action.id].points = trees[action.id].points - 1;
      return {
        ...state,
        trees,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  trees: talentMockData.map((tree, index) => {
    tree.id = index;
    tree.points = 0;
    return tree;
  }),
  pointCap: 6,
};

// The container to the talent calculator.
const TalentCalculator = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const actions = {
    addPoint: (name, id) => dispatch({ type: 'addPoint', name, id }),
    removePoint: (name, id) => dispatch({ type: 'removePoint', name, id }),
  };

  // calculate how many points have been spent
  const pointsSpent = state.trees.reduce((acc, item) => acc + item.points, 0);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        {I18n.t('titanstar_legends_rune_mastery_loadout')}
      </h1>

      <section className={styles.talentContainer}>
        <div className={styles.talents}>
          {state.trees.map(({ points, ...tree }) => (
            <TalentTree
              key={tree.id}
              tree={tree}
              actions={actions}
              points={points}
            />
          ))}
        </div>

        <div className={styles.pointsContainer}>
          {pointsSpent}/{state.pointCap}
          <div className='text--blue'>
            {I18n.t('points_spent')}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TalentCalculator;