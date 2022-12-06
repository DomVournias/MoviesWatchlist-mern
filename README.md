# Movies Watchlist
## _Built with MongoDB, Express, Reactjs, Node_




<a href="https://watchlist-mern.vercel.app/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Live%20Demo-success" alt="Go to - Live Site" data-canonical-src="https://img.shields.io/badge/-Live%20Demo-success" style="max-width: 100%; height: 20px;"></a>

A web application where you can add your favourite movies in your watchlist. The movies are fetched from an open source API and when the user adds one to the watchlist it gets the selected data and stores them to the database (MongoDB). The user needs to be authenticated to save or to load the films. The state management is mainly done with Redux and localStorage.

### Core Technologies
<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="width: 40px; height: 40px; " alt="nextjs wordpress"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style="width: 40px; height: 40px;" alt="nextjs wordpress"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" style="width: 40px; height: 40px;" alt="nextjs wordpress"/>
</div>

### Dependancies

-  **Client**
	- Reactjs
	- React Dom
	- React Router Dom
	- Axios
	- DotEnv
	- React Loader Spinner
	- Framer Motion
	- React Icons
	- React Scripts
	- Redux Devtools
	- Redux
	- Redux Thunk
	- Styled Components

-  **Server**
	- Bcryptjs
	- Config
	- Cookie Parser
	- Cors
	- DotEnv
	- Express
	- JsonWebToken
	- Mongoose
	- Concurrently


### Config

#### Client ***package.json***

```json
{
  "name": "client",
  "version": "0.1.2",
  "private": false,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.1",
    "dotenv": "^16.0.3",
    "framer-motion": "^7.6.19",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-loader-spinner": "^5.3.4",
    "react-redux": "^8.0.5",
    "react-router-dom": "^6.4.4",
    "react-scripts": "^5.0.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-thunk": "^2.4.2",
    "styled-components": "^5.3.6",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {},
  "proxy": "https://watchlist-mern.vercel.app/api" /* This is production only url */
}
```

#### Server ***package.json***

```json
{
  "name": "watchlist",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "config": "^3.3.8",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.8.0"
  },
  "type": "commonjs",
  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js --ignore './client/'",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "devDependencies": {
    "concurrently": "^7.2.2"
  }
}
```

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

