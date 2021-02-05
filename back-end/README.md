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

# PostgreSQL MAC installation
* `brew install postgresql` (This should automatically start postgresql as a service)
* `psql -d postgres -c "CREATE USER appuser"`
* `psql -d postgres -c "CREATE DATABASE appdb WITH OWNER=appuser"`
