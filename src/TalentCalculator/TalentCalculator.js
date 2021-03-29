import React from 'react';

import I18n from '../utilities/i18n';

import TalentTree from './TalentTree/TalentTree';

import styles from './TalentCalculator.module.css';


// Assumption: For reusability and API integration,
// each tree is created by a data structure.
// "talents" ideally would be a controlled list.
const talentTreeData = [
  {
    id: 1,
    name: I18n.t('talent_path_1'),
    talents: ['stack', 'cutlery', 'cake', 'crown'],
  },
  {
    id: 2,
    name: I18n.t('talent_path_2'),
    talents: ['boat', 'scuba', 'bolt', 'skull'],
  },
];

// The container to the talent calculator.
const TalentCalculator = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        {I18n.t('titanstar_legends_rune_mastery_loadout')}
      </h1>

      <section className={styles.talentContainer}>
        <div className={styles.talents}>
          {talentTreeData?.map(({ id, name, talents}) => (
            <TalentTree key={id} name={name} talents={talents} />
          ))}
        </div>

        <div className={styles.pointsContainer}>
          3/6
          <div className='text--blue'>
            {I18n.t('points_spent')}
          </div>
        </div>
      </section>

    </main>
  );
};

export default TalentCalculator;