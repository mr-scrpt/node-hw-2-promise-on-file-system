const fs = require('fs');
const {promisify} = require('util');
const rmdir = promisify(fs.rmdir);

const onDir = async ( dest, del) => {
  del && await rmdir(dest);
};

module.exports = onDir;