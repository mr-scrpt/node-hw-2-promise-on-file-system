const fs = require('fs');
const {promisify} = require('util');
const mkdir =  promisify(fs.mkdir);

const dirMaker = (target, base) => {

  return new Promise((resolve, reject) => {
    const baseDir = new Promise(((resolve, reject) => {
      if(!fs.existsSync(base)){
        fs.mkdir(base, err => err ? reject(err) : resolve())
      }
      resolve()
    }));

    const targetDir = new Promise(((resolve, reject) => {
      if(!fs.existsSync(target)){
        fs.mkdir(target, err => err ? reject(err) : resolve())
      }
      resolve()
    }));

    Promise.all([baseDir, targetDir])
      .then(()=> resolve())
      .catch(err=> reject(err))

  })

};


module.exports = dirMaker;