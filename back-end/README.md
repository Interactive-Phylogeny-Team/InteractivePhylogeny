# Available Scripts

In the project directory, you can run:
### `npm install`
This needs to be ran after cloning the project to install node dependencies. If pulling from a branch, this needs to be
ran if that branch has any changes to the dependencies.

### `npm start`

Runs the back end server and the server starts listening for requests. Requests can be made to
[http://localhost:4000](http://localhost:4000).

### `npm test`

Runs the unit tests for the back end app.

```
cd database
npx sequelize-cli db:migrate --env development
cd ..
```

Runs the migrations

# PostgreSQL MAC installation
* `brew install postgresql@13` (This should automatically start postgresql as a service)
* `psql -d postgres -c "CREATE USER appuser WITH PASSWORD 'b'"`
* `psql -d postgres -c "CREATE DATABASE appdb WITH OWNER=appuser"`

# PostegreSQL Windows installation
* Go to https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
* Download Windows installer version 13.1
* During installation uncheck Stack Builder and pgAdmin4
* When prompted for a superuser password enter `password`
* Use default settings for everything else during setup
* In your command prompt type:
  * `C:/"Program Files"/PostgreSQL/13/bin/psql -U postgres -c "CREATE USER appuser WITH PASSWORD 'b'"`
  * `C:/"Program Files"/PostgreSQL/13/bin/psql -U postgres -c "CREATE DATABASE appdb WITH OWNER=appuser"`
  * Enter your superuser password as needed, remember that it is `password`.
  
# API
### GET /tree
#### Request Data - { treeName: string }
#### Example - { treeName: 'Great Apes' }

### GET /species
#### Request Data - { scientificName: string }
#### Example - { scientificName: 'Gorilla Gorilla' }
