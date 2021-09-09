import {createStore } from "redux";
import {userFormReducer} from "./st/user/reducer"
const store = createStore(userFormReducer);

export default store;