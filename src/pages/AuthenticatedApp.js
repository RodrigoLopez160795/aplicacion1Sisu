import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Users from "../components/Users";

function AuthenticatedApp() {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) navigate("/users");
  }, []);

  return (
    <div className="w-screen h-screen flex justify-content-center">
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default AuthenticatedApp;
