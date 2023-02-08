import { BrowserRouter } from "react-router-dom";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";

function App() {
  return (
    <BrowserRouter>
      <UnauthenticatedApp />
    </BrowserRouter>
  );
}

export default App;
