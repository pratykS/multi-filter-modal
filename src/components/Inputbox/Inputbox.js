import React from "react";

const InputboxComponent = (props) => {
  const { keyword, setKeyword } = props;

  const onChangeHandler = (e) => {
    e.target && e.target.value && setKeyword(e.target.value);
  };

  return (
    <input
      style={{ display: "block", marginTop: 20 }}
      type="text"
      value={keyword}
      onChange={onChangeHandler}
      placeholder="Free text search"
    />
  );
};

export const Inputbox = InputboxComponent;
