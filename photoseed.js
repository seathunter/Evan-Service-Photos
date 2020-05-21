const Axios = require('axios');
const fs = require('fs');

const pics = () => {
  for (let i = 0; i < 1000; i++) {
    Axios({
      method: 'get',
      url: `https://loremflickr.com/320/240/${i}`,
      responseType: 'stream',
    })
      .then(function(result) {
        result.data.pipe(fs.createWriteStream(`../../images/${i}.jpg`));
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};

pics();