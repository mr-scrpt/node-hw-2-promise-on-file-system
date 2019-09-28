const fs = require('fs');


const copyFile = (target, dest) =>{
  return new Promise((resolve, reject) => {
    const rd = fs.createReadStream(target);
    rd.on('error', err => reject(err));

    const wr = fs.createWriteStream(dest);
    wr.on('error', err => reject(err))
      .on('close', () => {
        resolve(target);
      });

    rd.pipe(wr);
  })

};

module.exports = copyFile;