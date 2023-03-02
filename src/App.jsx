import AppRouter from "./router/AppRouter";
import { BrowserRouter as Browser } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./store/store";

function App() {
  return (
    <Provider store={Store}>
      <Browser>
        <AppRouter />
      </Browser>
    </Provider>
  );
}

export default App;
