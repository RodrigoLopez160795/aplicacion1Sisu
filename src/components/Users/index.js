import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function Users() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div>
      Hola somos los usuarios
      <button
        onClick={() => {
          setUser(false);
          navigate("/login");
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Users;
