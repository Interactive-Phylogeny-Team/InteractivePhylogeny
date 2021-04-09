# PostgreSQL Installation
Follow the installation instructions for your preferred operating system
## MAC installation
* `brew install postgresql@13` (This should automatically start postgresql as a service)
* `psql -d postgres -c "CREATE USER appuser WITH PASSWORD 'b'"`
* `psql -d postgres -c "CREATE DATABASE appdb WITH OWNER=appuser"`
* `psql -d appdb -c "CREATE EXTENSION IF NOT EXISTS citext"`
* `psql -d postgres -c "CREATE DATABASE apptestdb WITH OWNER=appuser"`
* `psql -d apptestdb -c "CREATE EXTENSION IF NOT EXISTS citext"`

## Windows installation
* Go to https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
* Download Windows installer version 13.1
* During installation uncheck Stack Builder and pgAdmin4
* When prompted for a superuser password enter `password`
* Use default settings for everything else during setup
* In your command prompt type:
  * `C:/"Program Files"/PostgreSQL/13/bin/psql -U postgres -c "CREATE USER appuser WITH PASSWORD 'b'"`
  * `C:/"Program Files"/PostgreSQL/13/bin/psql -U postgres -c "CREATE DATABASE appdb WITH OWNER=appuser"`
  * `C:/"Program Files"/PostgreSQL/13/bin/psql -U postgres -d appdb -c "CREATE EXTENSION IF NOT EXISTS citext"`
  * `C:/"Program Files"/PostgreSQL/13/bin/psql -U postgres -c "CREATE DATABASE apptestdb WITH OWNER=appuser"`
  * `C:/"Program Files"/PostgreSQL/13/bin/psql -U postgres -d apptestdb -c "CREATE EXTENSION IF NOT EXISTS citext"`
  * Enter your superuser password as needed, remember that it is `password`.

# Available Scripts

In the `back-end` directory, you can run:
### `npm install`
This needs to be ran after cloning the project to install node dependencies. This should only need to be ran once.

### `npm run migrate`
Sets up the database. This assumes PostgreSQL is already installed on your computer using the instructions above. This should only need to be ran once.

### `npm start`
Runs the back end server and the server starts listening for requests. Requests can be made to
[http://localhost:4000](http://localhost:4000).

### `npm test`
Runs the unit tests for the back end app.

# API
### GET /tree
#### Request Data - { treeName: string }
#### Example - { treeName: 'primates' }
#### Response Data:
```
{
	name: string,
	tree: object
}
```
### GET /species
#### Request Data - { scientificName: string }
#### Example - { scientificName: 'Homo Sapiens' }
#### Response Data:
```
{
	scientificName: string,
	commonName: string,
	imageUrl: string,
	dnaSequences: array<string>,
	mapLink: string
}
```
### GET /comparison
#### Request Data - { compKey: string }
#### Example - { compKey: 'gorilla_gorilla_homo_sapiens' }
#### Response Data:
```
{
	key: string,
	compStrings: array<string>
}
```
