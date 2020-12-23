import React from "react";
import "./InputTag.css";

const InputTagComponent = (props) => {
  const { tags, addTags } = props;
  const removeTagData = (indexToRemove) => {
    addTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTagData = (event) => {
    if (event.target.value !== "") {
      addTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tag-input">
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag-title">{tag}</span>
            <span
              className="tag-close-icon"
              onClick={() => removeTagData(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTagData(event) : null)}
        placeholder="Press enter to add a tag"
      />
    </div>
  );
};

export const InputTag = InputTagComponent;
