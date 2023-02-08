import { Route, Routes } from "react-router-dom";
import Users from "../components/Users";

function AuthenticatedApp() {
  return (
    <div className="w-screen h-screen flex justify-content-center">
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
