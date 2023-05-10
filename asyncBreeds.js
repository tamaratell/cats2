const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (error) {
      return callback(undefined);
    }
    if (!error) {
      return callback(data);
    }
  });
};

const bombay = breedDetailsFromFile('Bombay', (breed) => { console.log(breed); });



module.exports = breedDetailsFromFile;