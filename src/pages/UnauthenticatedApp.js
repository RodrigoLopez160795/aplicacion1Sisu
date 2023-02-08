import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";

function UnauthenticatedApp() {
  const navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") navigate("/login");
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
