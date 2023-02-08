import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

function Users() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const users = [
    {
      name: "Rodrigo",
      age: 27,
      country: "México",
      state: "Ciudad de México",
      city: "CDMX",
    },
    {
      name: "Mario",
      age: 23,
      country: "México",
      state: "Baja California",
      city: "Ensenada",
    },
  ];
  return (
    <div className="w-10 align-self-center">
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
