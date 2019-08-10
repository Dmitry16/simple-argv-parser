const obj = {};
const argv = process.argv.slice(2).forEach((key, ind, self) => {
  if (key.startsWith('-')) {
    if (self[ind+1].startsWith('-')) {
      obj[key] = null;
    } else {
      obj[key] = self[ind+1];
    }
  }
});

console.log('process.argv:::', obj);

module.exports = obj;
