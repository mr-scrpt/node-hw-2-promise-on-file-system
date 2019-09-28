const fs = require('fs');

const access = (check) => {
  return new Promise((resolve) => {
    fs.access(check, err => {
      if (!err){
        resolve(true);
      }else {
        resolve(false);
      }
    })
  })

};

module.exports = access;




