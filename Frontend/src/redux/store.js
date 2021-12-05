import { createStore } from "redux";
import locationsReducer from "./reducer";

const store = createStore(locationsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store