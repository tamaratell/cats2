const fs = require('fs');

const breedDetailsFromFile = (breed, callback) => {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      return callback(data);
    }
    if (error) {
      return undefined;
    }
  });
};

const bombay = breedDetailsFromFile('Bombay', (breed) => { console.log(breed); });



module.exports = breedDetailsFromFile;