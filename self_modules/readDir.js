const path = require('path');
const fs = require('fs');
const {promisify} = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const rmdir = promisify(fs.rmdir);
const unlink = promisify(fs.unlink);

const copyFile = require('./copyFile');
const getFirsLiters = require('./getFirstLiters');
const dirMaker = require('./dirMaker');

const readDir = async({del, base, dest}, onFile, onDir) => {

  try {
    let list = await readdir(base);

    for await (const it of list){
      const targetPath = path.join(base, it);
      const stats = await stat(targetPath);

      if(stats && stats.isDirectory()){
        const options = {base: targetPath, dest: dest, del: del};
        await readDir(options, onFile, onDir);

        await onDir(it, dest, targetPath, del);

      }else {
        await onFile(it, dest, targetPath, del)

      }

    }
  }catch (err) {
    throw new Error(err);
  }

};
module.exports = readDir;