import React from "react";

const CheckboxComponent = (props) => {
  const {
    options,
    setOptions,
    getCount,
    filteredOptions,
    setFilteredOptions
  } = props;

  const toggle = (index) => {
    const newData = [...options];

    const selectedData = newData.map((nd) => {
      return {
        label: nd.label,
        id: nd.id,
        checked: nd.id === index ? !nd.checked : nd.checked
      };
    });

    setOptions(selectedData);
    setFilteredOptions(selectedData);
    getCount(selectedData.filter((sd) => sd.checked));
  };

  let displayData = filteredOptions ? filteredOptions : options;

  return (
    <>
      <ul>
        {displayData &&
          displayData.map((d, i) => (
            <li key={i}>
              <label>
                <input
                  readOnly
                  type="checkbox"
                  checked={d.checked}
                  onClick={() => toggle(d.id)}
                />
                {d.label}
              </label>
            </li>
          ))}
      </ul>
    </>
  );
};

export const Checkbox = CheckboxComponent;
