import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { indexUsers } from "../../services/user";

function Users() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [users, setUsers] = useState();

  useEffect(() => {
    indexUsers().then((data) => {
      setUsers(
        data.map((user) => ({
          ...user,
          state: user.state.name,
          city: user.city.name,
          country: user.country.name,
        }))
      );
    });
  }, []);

  return (
    <div className="w-10 align-self-center">
      {users && (
        <DataTable
          value={users}
          header="Usuarios"
          showGridlines
          responsiveLayout="scroll"
        >
          <Column field="name" header="Nombre"></Column>
          <Column field="age" header="Edad"></Column>
          <Column field="country" header="País"></Column>
          <Column field="state" header="Estado"></Column>
          <Column field="city" header="Ciudad"></Column>
        </DataTable>
      )}
      <div className="mt-2 flex justify-content-center">
        <Button
          onClick={() => {
            setUser(false);
            navigate("/login");
          }}
          label="Cerrar sesión"
          icon="pi pi-power-off"
          className="p-button-danger"
        />
      </div>
    </div>
  );
}

export default Users;
