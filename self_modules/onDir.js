const fs = require('fs');
const {promisify} = require('util');
const rmdir = promisify(fs.rmdir);

const onDir = async (it, dest, targetPath, del) => {
  del === 'true' ? await rmdir(targetPath) : null;
};

module.exports = onDir;