import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { USER_TOKEN } from "./config";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(false);
  const userToken = localStorage.getItem(USER_TOKEN);
  const [token, setToken] = useState(userToken);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, setToken }}>
        {!token ? <UnauthenticatedApp /> : <AuthenticatedApp />}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
