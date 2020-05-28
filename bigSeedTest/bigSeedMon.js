const fs = require('fs');
const faker = require('faker');
const writeStream = fs.createWriteStream('./bigSeedTest/test.json', {flags: 'a'});

let writeData = () => {
  let date = new Date();
  for (let i = 0; i < 100; i++) {
    let urlArray = [];
    for (let j = 0; j < 12; j++) {
      let randomPic = Math.floor(Math.random() * 999);
      urlArray.push(`https://1001photos.s3.us-west-2.amazonaws.com/${randomPic}.jpg`);
    }
    let data = {
      numId: i,
      restaurant: faker.name.findName(),
      urlOne: urlArray[0],
      urlTwo: urlArray[1],
      urlThree: urlArray[2],
      urlFour: urlArray[3],
      urlFive: urlArray[4],
      urlSix: urlArray[5],
      urlSeven: urlArray[6],
      urlEight: urlArray[7],
      urlNine: urlArray[8],
      urlTen: urlArray[9],
      urlEleven: urlArray[10],
      urlTwelve: urlArray[11],
      timestamp: date.toDateString(),
      unrelated_report: Math.floor(Math.random() * 5),
      inappropriate_report: Math.floor(Math.random() * 5),
      dislike: Math.floor(Math.random() * 1),
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
    writeStream.write(JSON.stringify(data) + '\n', (err) => {
      if (err) {
        console.log(`===append fail ${i}===`);
        console.log(err);
      }
    });
  }
  writeStream.end();
};

writeData();


// change numId to _id