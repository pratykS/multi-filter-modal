import React from "react";

const RadioComponent = (props) => {
  const { options, onChange, setOptions } = props;

  const toggle = (index) => {
    const newData = [...options];

    const selectedData = newData.map((nd, i) => {
      return {
        label: nd.label,
        id: nd.id,
        checked: nd.id === newData[index].id ? true : false
      };
    });
    setOptions(selectedData);
    onChange(newData[index]);
  };

  return (
    <>
      {options.map((item, index) => (
        <label key={item.label} style={{ display: "block" }}>
          <input
            readOnly
            checked={item.checked}
            style={{ marginTop: 10 }}
            value={item.label}
            name={"Transmission"}
            type="radio"
            onClick={() => toggle(index)}
          />
          {item.label}
        </label>
      ))}
    </>
  );
};

export const Radiobutton = RadioComponent;
