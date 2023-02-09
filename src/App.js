import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import UnauthenticatedApp from "./pages/UnauthenticatedApp";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState(false);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        {!user ? <UnauthenticatedApp /> : <AuthenticatedApp />}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
