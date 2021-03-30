// based off concept of jed watson's classnames
// creates a classname string given an object and
// its boolean values.
const cn = (object) => {
  let saved = [];

  for (const key in object) {
    if (Boolean(object[key])) {
      saved.push(key);
    }
  }

  return saved.join(' ');
};

export default cn;
