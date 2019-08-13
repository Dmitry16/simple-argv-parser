const obj = process.argv.slice(2).reduce((acc, key, ind, self) => {
  if (key.startsWith('-')) {
    if (self[ind+1] && self[ind+1].startsWith('-')) {
      acc[key] = null;
    } else if (self[ind+1]) {
      acc[key] = self[ind + 1];
    } else if (!self[ind+1]) {
      acc[key] = null;
    }
  }
  return acc;
}, {});

module.exports = obj;
