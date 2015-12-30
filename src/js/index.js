const React = require("react");
const ReactDOM = require("react-dom");
const { createStore, combineReducers } = require("redux");

const note = require("./reducers/note-reducer");
const reducers = { note, };
const store = createStore(combineReducers(reducers));

const App = require("./components/app");
const appMount = document.getElementById("tada");
const renderApp = () => ReactDOM.render(<App store={store} />, appMount);

// Let's get this party started
store.subscribe(renderApp);
renderApp();