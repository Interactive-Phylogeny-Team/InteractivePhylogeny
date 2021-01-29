## Available Scripts

In the project directory, you can run:
### `npm install`
This needs to be ran after cloning the project to install node dependencies. If pulling from a branch, this needs to be
ran if that branch has any changes to the dependencies.

### `npm run build`

Transpiles the typescript code into javascript code. Typescript is what the developer sees. Javascript is what is
actually ran. This script **MUST** be ran before running the back end server.

### `npm run start`

Runs the back end server and the server starts listening for requests. Requests can be made to
[http://localhost:4000](http://localhost:4000).

### `npm test`

Runs the unit tests for the back end app.