import { Dropdown as PrimeDropdown } from "primereact/dropdown";

function Dropdown(props) {
  return (
    <div className="p-inputgroup">
      <span className="p-inputgroup-addon">
        <i className="pi pi-map"></i>
      </span>
      <span className="p-float-label">
        <PrimeDropdown
          options={props.options}
          name={props.name}
          inputId={props.inputId}
          optionLabel={props.optionLabel}
          className={props.className}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
        <label htmlFor={props.name}>{props.label}</label>
      </span>
    </div>
  );
}

export default Dropdown;
