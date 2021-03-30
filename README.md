
  _______          _____        _       
 |__   __|        |  __ \      | |      
    | | __ _  __ _| |  | | __ _| |_ ___ 
    | |/ _` |/ _` | |  | |/ _` | __/ _ \
    | | (_| | (_| | |__| | (_| | ||  __/
    |_|\__,_|\__, |_____/ \__,_|\__\___|
              __/ |                     
             |___/                      


# Welcome to tagDate, where you will find your soul buddy!

### Client Side Info

To use expo:

> cd client
> npm start
> Select "Run in web browser"

### Server Site Info
The server is connected with Prisma and Postgres. To initiate the connection, please run the commands listed below in sequence from the server folder. It is possible to run the postgresQL DB from Docker.

**Starting Docker**

To initiate the database from a container, please run the following command:

```
docker-compose up
```

```
docker-compose run postgres bash
```

```
psql --username=USERNAME --host=HOST
```

To stop the db, run

```
docker-compose down
```


**Generate DB template**

To generate the database model with Prisma, run the following command

```
npm run generate
```

**Migrate and create the DB in Postgres**

To create the db and tables, please run the following command 

```
npm run migrate
```

**Seeding the DB**

Optionally, run the following command to populate with mock data

```
npm run seed
```

**Starting the server**

Start the server with the following command

```
npm run start
```


### Links:

Trello:
https://trello.com/b/Zguti6wp/tagdate%F0%9F%8F%84%E2%99%80%EF%B8%8F%F0%9F%8F%84%E2%99%82%EF%B8%8F-thesis-project

