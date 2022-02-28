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

> Demo usage of app :fire:

> <img src="docs/casino-app-demo.gif" width="250" height="500" alt="app-demo" />

## App structure

- It's a single page application using React - [React.js](https://reactjs.org/) &nbsp; <img src="https://slackmojis.com/emojis/1161-react/download" width="16px" height="16px" alt="reactjs">
- It's using React Router to manage routing. - [React Router](https://reacttraining.com/react-router/web/guides/quick-start) &nbsp; <img src="https://iconape.com/wp-content/files/sm/371377/svg/371377.svg" width="16px" height="16px" alt="react-router">
- Authentication is managed by using custom AuthProvider context. - [React Context](https://reactjs.org/docs/context.html) &nbsp; <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" width="16px" height="16px" alt="react-context">
- Application is using Semantic style for styling and UI components. - [Semantic UI](https://react.semantic-ui.com/) &nbsp; <img src="https://semantic-ui.com/images/logo.png" width="16px" height="16px" alt="semantic-ui">
- Code is written in Typescript - [TypeScript](https://www.typescriptlang.org/) &nbsp; <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width="16px" height="16px" alt="typescript">
- It's using JSON-Server to mock API calls and Database data. - [JSON-Server](https://github.com/typicode/json-server) &nbsp; <img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/27871/preview_image/json.jpg" width="16px" height="16px" alt="json-server">

> Folder structure for the app.

    .
    ├── src
        ...
        ├── index.tsx (main entry point)             # entry into the app
        ├── App
        |   ├── index.tsx
        |   ├── AuthProvider.tsx                     # AuthProvider context
        |   ├── AuthenticatedRoute.tsx               # Protected Route wrapper
        |   ├── routes.ts                            # Routes templates
        ├── Components                               # Common components
        |   ├── Game
        |   |   ├── index.tsx
        |   |   ├── types.ts                         # Type definition
        |   ├── Profile
        |   |   ├── index.tsx
        |   ├── SearchBar
        |   |   ├── index.tsx
        ├── Containers                               # Containers/Pages of App
            ├── GameScreen
            |   ├── index.tsx                        # Game play page
            ├── Home
            |   ├── index.tsx                        # Home page
            |   ├── actions.ts
            |   ├── Games.tsx
            |   ├── Categories.tsx
            ├── Login
                ├── index.tsx                        # Login screen
                ├── actions.ts
        ...

## Implemented Functionalities And Improvements To Do &nbsp;:seedling:

- [x] **AUTHENTICATED ROUTES COMPONENT**
  - [x] _Custom component that checks for auth state before taking to protected route and redirects to login page if not authenticated._
- [x] **LOGIN**
  - [x] _Store the path that user is trying to access if not logged in, and redirect to login page._
  - [x] _Login with username and password_
  - [x] _Error message when login fails, allow to retry_
  - [x] _Redirect to home page or path user was trying to access, after successful login_
  - [x] _Persist login state after page reload, using localStorage_
  - [x] _If already logged in, redirect to home page when accessing login page_
- [x] **LOGOUT**
  - [x] _Clear login state from localStorage and context on successful logout._
  - [x] _Redirect to login page_
  - [ ] _Show error message if logout fails_
- [x] **LIST GAMES AND CATEGORIES**
  - [x] _Requires user to be logged in_
  - [x] _List all games and categories using provided API's_
  - [x] _Filter games by category_
  - [x] _Filter games by search term_
  - [ ] _Paginate games by page number in case of large list_
  - [ ] _Sort games by popularity, published date, etc_
  - [ ] _Show loading indicator while fetching data_
- [x] **PLAY GAME**
  - [x] _Requires user to be logged in_
  - [x] _Play a game by clicking on Play button, using provided JS Function_
  - [x] _Page should be responsive on Mobile device as well_
  - [x] _Ability to go back to listing screen_
  - [ ] _Game screen iframe can send an event to parent window when game is finished loading, so that parent window can show the game screen. While the game iframe is loading the game screen can show a loading screen._
- [x] **FILTER GAMES BY SEARCHING IN THE SEARCH BOX**
  - [x] _Search by game name_
  - [ ] _Search by game description_
  - [x] _Debounce user typing event to reduce state updates_
  - [x] _Show empty state text when no results found_
- [x] **FILTER GAMES BY CATEGORY BY CHOOSING A CATEGORY**
  - [x] _Filter games by category by clicking on a category_
  - [x] _Show active state on selected category by background color_

## Updates to the existing code :v:

- updated game and category listing grid to be `stackable` on mobile devices using semantic classes.

```diff
- <div className="ui grid">
+ <div className="ui stackable grid">
```

- updated the search bar to be responsive on mobile devices. using `fluid` semantic class and stack below the user details.

```diff
- <div className="search ui small icon input">
+ <div className="search ui fluid left floated icon input">
```

- made the category list relaxed by using `relaxed` semantic class.
- added active category state to the category list. by adding `active` semantic class to the category list item.
- made the game-play screen responsive on mobile devices, by updating the width to `100%` during initializing the iframe, inside the `game.launch` function definition inside `/lib/comeon.game-1.0.min.js`.

```diff
- s.frameBorder=0,s.width="640px",s.height="480px"
+ s.frameBorder=0,s.width="100%",s.height="480px"
```

- moved the back button to the top row of the game screen, so that game screen can occupy full grid width

## Dev Notes :robot:

**Custom Auth provider implementation using React Context.**

```typescript
export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider: FC<Props> = ({ children }) => {
  const prevAuth = localStorage.getItem(AUTH_KEY);
  const userDetails = JSON.parse(prevAuth!);
  const [authenticated, setAuthenticated] = useState<Player | null>(() => userDetails);

  useEffect(() => {
    // save to localstorage on login
    if (authenticated) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(authenticated));
    }
  }, [authenticated]);
  const signIn = (username: string, password: string, callback: any) => {
    // do somthing after login API success
  };
  const signOut = (username: string, callback: any) => {
    // do somthing after logout API success
  };
  const initialValue = { authenticated, signIn, signOut };

  return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>;
};
```

**Custom Protected Route component using React Router@6**

```typescript
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // component above

const AuthenticatedRoute: FC<Props> = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
```
