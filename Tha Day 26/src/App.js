import "./App.css";
import {Provider} from "react-redux";
import store from './redux/storing';
import Form from "./container/form";
export default function App(){
  return (
    <Provider store={store}>
    <div className="App">
        <Form />
    </div>
    </Provider>
  );
}