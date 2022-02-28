# Casino App

- Install node >= v12.x
- Run `npm install` to install dependencies
- Run `npm install -g json-server` to install json-server
- Run `json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js` to start mock server on port 3001
- create a `.env.local` file and add following variables:
  - `REACT_APP_JSON_SERVER=http://localhost:3001`
- Run `npm run start` to start the react app locally
- go to http://localhost:3000/

> Voila! you have the app running :tada:

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
  - [x] Store the path that user is trying to access if not logged in, and redirect to login page.
  - [x] Login with username and password
  - [x] Error message when login fails, allow to retry
  - [x] Redirect to home page or path user was trying to access, after successful login
  - [x] Persist login state after page reload, using localStorage
  - [x] If already logged in, redirect to home page when accessing login page
- [x] Logout
  - [x] Clear login state from localStorage and context on successful logout.
  - [x] Redirect to login page
  - [ ] Show error message if logout fails
- [x] List Games and Categories
  - [x] Requires user to be logged in
  - [x] List all games and categories using provided API's
  - [x] Filter games by category
  - [x] Filter games by search term
  - [ ] Paginate games by page number in case of large list
  - [ ] Sort games by popularity, published date, etc
- [x] Play Game
  - [x] Requires user to be logged in
  - [x] Play a game by clicking on Play button, using provided JS Function
  - [x] Page should be responsive on Mobile device as well
  - [x] Ability to go back to listing screen
  - [ ] Game screen iframe can send an event to parent window when game is finished loading, so that parent window can show the game screen. While the game iframe is loading the game screen can show a loading screen.
- [x] Filter Games by searching in the search bar
  - [x] Search by game name
  - [ ] Search by game description
  - [x] Debounce user typing event to reduce state updates
  - [x] Show empty state text when no results found
- [x] Filter Games by category by choosing a category
  - [x] Filter games by category by clicking on a category
  - [x] Show active state on selected category by background color

## Updates to the existing code

- updated game and category listing grid to be stackable on mobile devices using semantic classes.
- updated the search bar to be responsive on mobile devices. using fluid semantic class and stack below the user details.
- made the category list relaxed by using relaxed semantic class.
- added active category state to the category list. by adding active semantic class to the category list item.
- made the game-play screen responsive on mobile devices, by updating the width to `100%` during initializing the iframe, inside the `game.launch` function definition.
- moved the back button to the top row of the game screen, so that game screen can occupy full grid width
