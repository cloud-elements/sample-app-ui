## Overview

Boilerplate code for a bare bones React frontend that can be used to build UI demos and examples on the Cloud Elements APIs. Keep in mind that Cloud Elements is a server-side API library, production applications should not store keys or make API calls directly from client-side code. This project is meerly a source of sample code intended as a tool for gaining familiarity with the Cloud Elements APIs in a user-facing example.

> The goal for this code base is to be as beginner friendly as possible. The app has a crude routing implementation and does not utilize any 3rd party state management tools. In addition, it does not include a connected backend, it utilizes browser based local storage for occasions where a backend database would be useful.  If you're interested in a version of this app that contains additional functionality, please file an [issue](https://github.com/cloud-elements/saas-demo-boilerplate-ui/issues/new).

<img width="1187" alt="UI Screenshot" src="https://cl.ly/3R3F2T330n1e/Screen%20Recording%202018-03-02%20at%2010.54%20AM.gif">


## Installation
If you don't have `node` and `npm` installed, do [that](https://docs.npmjs.com/getting-started/installing-node) first.

> __PROTIP:__ `node` version must be >= `7.5.0` and `npm` version must be >= `4.1.2`

Navigate into the project directory and install package dependencies.

```bash
# Make sure you are in the correct directory
$ cd cloud-elements-boilerplate

# Install all necessary npm packages:
$ npm install
# or
$ yarn install
```

Create an environment file to store keys and tokens

```bash
 $ touch .env
 # or 
 touch .env.local
 ```

Add your Cloud Elements keys to the `.env` file:

```
## Cloud Elements keys
REACT_APP_CE_USER={your-cloud-elements-user-token}
REACT_APP_CE_ORG={your-cloud-elements-org-token}
REACT_APP_CE_ENV=[optional for using staging or snapshot, app defaults to production]
```

Add your vendor OAuth app keys to the `.env` file. Only one is needed for the app to function, but total number is unlimited. These keys are utilized in the LoginCardList component.

```
## Vendor App keys
REACT_APP_HUBSPOT_KEY={your-hubspot-oauth-app-key}
REACT_APP_HUBSPOT_SECRET={your-hubspot-oauth-app-secret}
```

Add the https url where your app is available so that vendor OAuth flows know where to return to after a user signs in.

```
## Misc
REACT_APP_URL=https://c720e32b.ngrok.io
```

## Running
```bash
# Fire that bad boy up:
$ yarn start
# or
$ npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

#### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!