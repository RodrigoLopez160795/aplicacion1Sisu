import { Route, Routes } from "react-router-dom";
import Users from "../components/Users";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default AuthenticatedApp;
