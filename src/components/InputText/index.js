import { InputText as PrimeInputText } from "primereact/inputtext";

function InputText({ keyfilter = "", ...props }) {
  return (
    <div>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className={`pi pi-${props.icon}`}></i>
        </span>
        <span className="p-float-label">
          <PrimeInputText
            id={props.id}
            name={props.name}
            keyfilter={keyfilter}
            className="p-inputtext-sm"
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
          <label htmlFor={props.name}>{props.label}</label>
        </span>
      </div>
      <small>{props.small}</small>
    </div>
  );
}

export default InputText;
