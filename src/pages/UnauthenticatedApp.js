import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import FormContainer from "../components/FormContainer";

function UnauthenticatedApp() {
  const navigate = useNavigate();
  let location = useLocation();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (location.pathname === "/" || !user) navigate("/login");
  }, []);
  return (
    <Routes>
      <Route index element={<FormContainer form="login" />} />
      <Route path="/login" element={<FormContainer form="login" />} />
      <Route path="/create-account" element={<FormContainer form="create" />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default UnauthenticatedApp;
