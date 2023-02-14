import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import FormContainer from "../components/FormContainer";

function UnauthenticatedApp() {
  const navigate = useNavigate();
  let location = useLocation();
  const { token } = useContext(UserContext);
  useEffect(() => {
    if (!token && location.pathname !== "/create-account") navigate("/login");
  }, []);
  return (
    <Routes>
      <Route index element={<FormContainer form="login" />} />
      <Route path="/login" element={<FormContainer form="login" />} />
      <Route path="/create-account" element={<FormContainer form="create" />} />
    </Routes>
  );
}

export default UnauthenticatedApp;
