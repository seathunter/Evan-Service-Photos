# Food Finder

Note: this is an alteration of the following repo by Matthew Diaz:
https://github.com/freeseats/matthewjdiaz1-photo-service

This repo is not intended for providing the functionality of the original repo, but for simulating and testing large scale deployment traffic.

## Getting Started

* Clone this repo with the following command: 
```
  git clone https://github.com/AlphaOmegaTeam/Evan-Service-Photos.git
```
* Seed the database with the following two commands
```
  - seedTestP
  - seedTestI
```
* Upload the data to postgres with the following command
```
  - log into desired postgres database
  - from the directory of the schemas, enter $ \i bigSchema.sql
```
* Create a dump file from the postgres database
```
  - pg_dump -Fc dbname > dbname.dump
```
* Transfer the dump file to a separate instance
```
  - scp -i <keypair> SourceFile user@host:directory/TargetFile
```
* Restore the file in the new instance
```
  - pg_restore -d dbname dbname.dump
```


## Technologies Used
* React
* Postgres
* Axios
* Node
* AWS (ec2)
* New Relic
* K6
* Loader.io
* Nginx

## Authors

Evan Schafer
* [Github Profile](https://github.com/E-Schaferer)
* [Linkedin Profile](www.linkedin.com/in/schaferer)

## Original Author

Matthew Diaz
* [Github Profile](https://github.com/matthewjdiaz1)
