const obj = parseArgs(process.argv);

function parseArgs(arrArgs) {
  return arrArgs.slice(2).reduce((acc, key, ind, self) => {
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
}

console.log('obj:::', obj);

exports.obj = obj;
exports.parseArgs = parseArgs;
