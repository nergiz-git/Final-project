import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {legacy_createStore} from 'redux'
const store=legacy_createStore(Reducer)
import { Provider } from 'react-redux'
import Reducer from "./store/Reducer";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <App />
    </Provider>
);



