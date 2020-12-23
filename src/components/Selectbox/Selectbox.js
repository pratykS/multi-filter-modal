import React from "react";

const SelectboxComponent = (props) => {
  const { values, onValueChange, selectedValue, ...rest } = props;
  return (
    <select
      style={{ display: "block", marginTop: 20, width: 100 }}
      defaultValue={selectedValue}
      onChange={({ target: { value } }) => onValueChange(value)}
      {...rest}
    >
      {values.map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
    </select>
  );
};

export const Selectbox = SelectboxComponent;
