import React from "react";
import { Checkbox } from "../../components";
import "./CheckboxSearch.css";

const CheckboxWithSearchComponent = (props) => {
  const { options, setOptions, getCount } = props;
  const [filteredOptions, setFilteredOptions] = React.useState(null);

  const onChangeHandler = (e) => {
    if (Boolean(e.target.value)) {
      const filteredBrands = options.filter((o) =>
        o.id.includes(e.target.value)
      );

      setFilteredOptions(filteredBrands);
      getCount(filteredBrands);
    } else {
      setFilteredOptions(null);
      setOptions(options);
      getCount(options);
    }
  };

  return (
    <>
      <input
        className="search-input"
        style={{ display: "block", marginTop: 20 }}
        type="text"
        onChange={onChangeHandler}
        placeholder="Search options"
      />

      <Checkbox
        setFilteredOptions={setFilteredOptions}
        filteredOptions={filteredOptions}
        options={options}
        setOptions={setOptions}
        key={Math.random()}
        getCount={getCount}
      />
    </>
  );
};
export const CheckboxSearch = CheckboxWithSearchComponent;
