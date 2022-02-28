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
- It's using JSON-Server to mock API calls and Database data. - [JSON-Server](https://github.com/typicode/json-server)

## Functionality

- [x] Authenticated Routes
  - [x] Custom component that checks for auth state before taking to protected route and redirects to login page if not authenticated.
- [x] Login

  - [x] store the path trying to access if not logged in, and redirect to login
  - [x] Login with email and password
  - [x] Error message when login fails, allow to retry
  - [x] Redirect to home page/path trying to access, after successful login
  - [x] Persist login state after page reload, using localStorage
  - [x] if already logged in, redirect to home page when accessing login page

- [x] Logout

  - [x] clear login state from localStorage and context.
  - [x] redirect to login page
  - [] show error message if logout fails

- [x] List Games and Categories

  - [x] Requires user to be logged in
  - [x] List all games and categories using provided API's
  - [x] Filter games by category
  - [x] Filter games by search term
  - [] Paginate games by page number in case of large list
  - [] sort games by popularity, published date, etc

- [x] Play Game

  - [x] Requires user to be logged in
  - [x] Play a game using provided JS Function
  - [x] Page should be responsive on Mobile device as well
  - [x] Ability to go back to listing screen

- [x] Filter Games by searching in the search bar

  - [x] Search by game name
  - [] Search by game description
  - [x] Debounce user typing event to reduce state updates
  - [x] show empty state text when no results found

- [x] Filter Games by category by choosing a category

  - [x] Filter games by category by clicking on a category
  - [x] show active state on selected category by background color
