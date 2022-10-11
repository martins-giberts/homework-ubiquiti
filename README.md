# Ubiquiti Homework

Homework task for Ubiquiti based on Create React App (CRA) with Redux and Typescript template.

- [Requirements](./docs/homework-requirements.md)

## Setup

- Git clone for example SSH `git clone git@github.com:martins-giberts/homework-ubiquiti.git && cd homework-ubiquiti`
- Open `homework-ubiquiti` on your favorite code editor
- Copy [.env.example](./.env.example) to `.env`
- Update `REACT_APP_API_ENDPOINT` and `REACT_APP_ICON_URL`

## Preconditions

- Node v16 or newer
- npm v8.15 or newer
- `npm install`

## Run the App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dev tools

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook`

Runs components storybook
Open [http://localhost:6006/](http://localhost:6006/)

Note: Not compatible with npm8 at the time of installation. Uses legacy npm7 setup.

### [Tokens](./src/tokens.ts)

All tokens used for design or client-side configuration.
In proper setup this would work as a central reference from externally imported tokens Figma, Zeroheight, others

## Description

## Stack

- [Create React App](./docs/create-react-app.md)
- [Styled Components](https://styled-components.com/)
- [StoryBook](https://storybook.js.org/)
- [Google Fonts - Lato](https://fonts.google.com/specimen/Lato)
- [Folder Templates](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure)

## Nice to Have improvements

- URL Query support, have query parameters to reflect users navigation
  - Device deep link support
- Devices Tabs by using Device Line data
- Favorite devices list by using either Cookies or local storage
- Possible caching and cache busting by using API version entry
- Search improvement - have searchable keywords prepared right after the fetch for performance benefit.
- Secrets/Vault support for environment variables
- Set Search Bar as Sticky
