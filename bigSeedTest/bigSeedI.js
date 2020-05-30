const fs = require('fs');
const faker = require('faker');
const writeStream = fs.createWriteStream('./bigSeedTest/dataI.csv', {flags: 'a'});
const { Parser } = require('json2csv');

let writeData = () => {
  const csvParser = new Parser({ header: false });
  let date = new Date();
  for (let i = 0; i < 10000000; i++) {
    let urlArray = [];
    for (let j = 0; j < 12; j++) {
      let randomPic = Math.floor(Math.random() * 999);
      urlArray.push(`https://1001photos.s3.us-west-2.amazonaws.com/${randomPic}.jpg`);
    }
    let data = {
      address: faker.name.findName(),
      crossStreet: faker.name.findName(),
      neighborhood: faker.name.findName(),
      hoursOfOperation: faker.name.findName(),
      cuisines: faker.name.findName(),
      diningStyle: faker.name.findName(),
      dressCode: faker.name.findName(),
      paymentOptions: faker.name.findName(),
      executiveChef: faker.name.findName(),
      additional: faker.name.findName(),
      website: faker.name.findName(),
      phoneNumber: faker.name.findName()
    };
    let csv = csvParser.parse(data);
    writeStream.write(csv + '\n', (err) => {
      if (err) {
        console.log(`===append fail ${i}===`);
        console.log(err);
      }
    });
  }
  writeStream.end();
};

writeData();
