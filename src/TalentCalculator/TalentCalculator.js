import React from 'react';

import talentMockData from './talentMockData';
import I18n from '../utilities/i18n';

import TalentTree from './TalentTree/TalentTree';

import styles from './TalentCalculator.module.css';


const reducer = (state, action) => {
  switch (action.type) {
    case 'addPoint': {
      const { trees, pointCap } = { ...state };
      const currentTree = trees[action.id];
      // Basing points off of indexing.
      const talentValue = currentTree.talents.indexOf(action.name) + 1;
      const pointsSpent = state.getPointsSpent(trees);
      // Getting the points available to spend that the entire tree has.
      const pointsAvailable = pointCap - pointsSpent + currentTree.points;

      // only assign the new value if we have those available points.
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
  pointCap: 6,
  trees: talentMockData.map((tree, index) => {
    // component specific attributes needed.
    tree.id = index;
    tree.points = 0;
    return tree;
  }),
  getPointsSpent: (trees) => {
    // Calculates how many points are in any given set of trees.
    return trees.reduce((acc, item) => acc + item.points, 0);
  },
};

// The container to the talent calculator.
const TalentCalculator = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // Mapping the dispatch actions to an easy-to-pass object.
  const actions = {
    addPoint: (name, id) => dispatch({ type: 'addPoint', name, id }),
    removePoint: (name, id) => dispatch({ type: 'removePoint', name, id }),
  };

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
          {state.getPointsSpent(state.trees)}/{state.pointCap}
          <div className='text--blue'>
            {I18n.t('points_spent')}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TalentCalculator;