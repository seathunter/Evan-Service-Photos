CREATE TABLE photos (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    restaurant varchar NOT NULL,
    urlOne varchar NOT NULL,
    urlTwo varchar NOT NULL,
    urlThree varchar NOT NULL,
    urlFour varchar NOT NULL,
    urlFive varchar NOT NULL,
    urlSix varchar NOT NULL,
    urlSeven varchar NOT NULL,
    urlEight varchar NOT NULL,
    urlNine varchar NOT NULL,
    urlTen varchar NOT NULL,
    urlEleven varchar NOT NULL,
    urlTwelve varchar NOT NULL,
    timeStamp varchar NOT NULL,
    unrelated_report int NOT NULL,
    inappropriate_report int NOT NULL,
    dislike int NOT NULL
);

CREATE TABLE info (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    address varchar NOT NULL,
    crossStreet varchar NOT NULL,
    neighborhood varchar NOT NULL,
    hoursOfOperation varchar NOT NULL,
    cuisines varchar NOT NULL,
    diningStyle varchar NOT NULL,
    dressCode varchar NOT NULL,
    paymentOptions varchar NOT NULL,
    executiveChef varchar NOT NULL,
    additional varchar NOT NULL,
    website varchar NOT NULL,
    phoneNumber varchar NOT NULL
);


COPY photos (
    restaurant, urlOne, urlTwo, urlThree, urlFour, urlFive, urlSix, urlSeven, urlEight, urlNine, urlTen, urlEleven, urlTwelve, timeStamp, unrelated_report, inappropriate_report, dislike )
    from '/Users/hermit/sdc/Evan-Service-Photos/bigSeedTest/dataP.csv' with csv header;
COPY info (
    address, crossStreet, neighborhood, hoursOfOperation,
    cuisines, diningStyle, dressCode, paymentOptions, executiveChef, additional, website, phoneNumber )
    from '/Users/hermit/sdc/Evan-Service-Photos/bigSeedTest/dataI.csv' with csv header; 
