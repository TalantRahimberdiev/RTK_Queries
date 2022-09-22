
import { Provider } from "react-redux";
import { store } from './rtk/store'

import Home from "./home";

export default function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}