CREATE TABLE photos (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    restaurant text NOT NULL,
    urlOne text NOT NULL,
    urlTwo text NOT NULL,
    urlThree text NOT NULL,
    urlFour text NOT NULL,
    urlFive text NOT NULL,
    urlSix text NOT NULL,
    urlSeven text NOT NULL,
    urlEight text NOT NULL,
    urlNine text NOT NULL,
    urlTen text NOT NULL,
    urlEleven text NOT NULL,
    urlTwelve text NOT NULL,
    timeStamp text NOT NULL,
    unrelated_report int NOT NULL,
    inappropriate_report int NOT NULL,
    dislike int NOT NULL
);

CREATE TABLE info (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    address text NOT NULL,
    crossStreet text NOT NULL,
    neighborhood text NOT NULL,
    hoursOfOperation text NOT NULL,
    cuisines text NOT NULL,
    diningStyle text NOT NULL,
    dressCode text NOT NULL,
    paymentOptions text NOT NULL,
    executiveChef text NOT NULL,
    additional text NOT NULL,
    website text NOT NULL,
    phoneNumber text NOT NULL
);


COPY photos (
    restaurant, urlOne, urlTwo, urlThree, urlFour, urlFive, urlSix, urlSeven, urlEight, urlNine, urlTen, urlEleven, urlTwelve, timeStamp, unrelated_report, inappropriate_report, dislike )
    from '/Users/hermit/sdc/Evan-Service-Photos/bigSeedTest/dataP.csv' delimiter ',';
COPY info (
    address, crossStreet, neighborhood, hoursOfOperation,
    cuisines, diningStyle, dressCode, paymentOptions, executiveChef, additional, website, phoneNumber )
    from '/Users/hermit/sdc/Evan-Service-Photos/bigSeedTest/dataI.csv' delimiter ','; 
