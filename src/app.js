const obj = {};
process.argv.slice(2).forEach((key, ind, self) => {
  if (key.startsWith('-')) {
    if (self[ind+1] && self[ind+1].startsWith('-')) {
      obj[key] = null;
    } else if (self[ind+1]) {
      obj[key] = self[ind+1];
    } else if (!self[ind+1]) {
      obj[key] = null;
    }
  }
});

module.exports = obj;
