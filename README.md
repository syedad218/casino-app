# Casino App

- Install node >= v12.x
- Run `npm install` to install dependencies
- Run `npm install -g json-server` to install json-server
- Run `json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js` to start mock server on port 3001
- create a `.env.local` file and add following variables:
  - `REACT_APP_JSON_SERVER=http://localhost:3001`
- Run `npm run start` to start the react app locally
- go to http://localhost:3000/ and voila! you have the app running

## App structure

- It's a single page application using React - [React.js](https://reactjs.org/)
- It's using React Router to manage routing. - [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- Authentication is managed by using custom AuthProvider context. - [React Context](https://reactjs.org/docs/context.html)
- Application is using Semantic style for styling and UI components. - [Semantic UI](https://react.semantic-ui.com/)
- Code is written in Typescript - [TypeScript](https://www.typescriptlang.org/)
- It's using JSON-Server to mock API calls and DB. - [JSON-Server](https://github.com/typicode/json-server)

## Functionality

- [x] Login
- [x] Logout
- [x] List Games and Categories
- [x] Play Game
- [x] Filter Games by searching in the search bar
- [x] Filter Games by category by choosing a category
