This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Boilerplate code for a bare bones React frontend that can be used to build UI demos on the Cloud Elements APIs

<img width="1187" alt="UI Screenshot" src="https://user-images.githubusercontent.com/13320316/34920721-25a7a260-f934-11e7-866f-4415b69188f1.png">

## Setup

In the project directory, install dependencies.

## `npm install` or `yarn install`

Create an enviroment file to store keys and tokens.

## `touch .env` or `touch .env.local`

Add your Cloud Elements keys to the `.env` file:

```
## Cloud Elements keys
REACT_APP_CE_USER={your-cloud-elements-user-token}
REACT_APP_CE_ORG={your-cloud-elements-org-token}
REACT_APP_CE_ENV=[optional for using staging or snapshot, app defaults to production]
```

Add your vendor OAuth app keys to the `.env` file. Only one is need for the app to function, but total number is unlimited.

```
## Vendor App keys
REACT_APP_HUBSPOT_KEY={your-hubspot-oauth-app-key}
REACT_APP_HUBSPOT_SECRET={your-hubspot-oauth-app-secret}
REACT_APP_SFDC_KEY={your-sfdc-oauth-app-key}
REACT_APP_SFDC_SECRET={your-sfdc-oauth-app-secret}
```

Add the https url where your app is available so that vendor OAuth flows know where to return to after a user signs in.

```
## Misc
REACT_APP_URL=https://c720e32b.ngrok.io
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!