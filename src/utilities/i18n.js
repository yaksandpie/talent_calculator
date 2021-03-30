/* eslint-disable max-len */
export const translations = {
  en: {
    point_spent: 'Point Spent',
    points_spent: 'Points Spent',
    talent_path_1: 'Talent Path 1',
    talent_path_2: 'Talent Path 2',
    titanstar_legends_rune_mastery_loadout: 'TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000',
  },
};

const I18n = {
  // translate function
  // matches key from string object
  t: function (name, locale = 'en') {
    return translations[locale][name];
  },
};

export default I18n;