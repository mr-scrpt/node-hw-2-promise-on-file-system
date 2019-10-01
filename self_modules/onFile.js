const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const unlink = promisify(fs.unlink);

const getFirsLiters = require('./getFirstLiters');
const dirMaker = require('./dirMaker');
const copyFile = require('./copyFile');

const onFile = async (it,dest, targetPath, del) => {
  const firstLater = getFirsLiters(it);
  const destDir = path.join(dest, firstLater);
  const destFile = path.join(destDir, it);

  await dirMaker(destDir, dest);
  const name = await copyFile(targetPath, destFile);
  console.log(`Файл ${name} скопирован успешно`);

  del && await unlink(targetPath);
};

module.exports = onFile;