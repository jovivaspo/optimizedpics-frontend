import AppRouter from "./router/AppRouter";
import { BrowserRouter as Browser } from "react-router-dom";

function App() {
  return (
    <Browser>
      <AppRouter />
    </Browser>
  );
}

export default App;
