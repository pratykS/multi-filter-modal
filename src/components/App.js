import React from "react";
import "./styles.css";
import {
  Selectbox,
  Radiobutton,
  Modal,
  CheckboxSearch,
  InputTag
} from "../components";

const brands = [
  { id: "maruti", label: "Maruti", checked: false, display: true },
  { id: "honda", label: "Honda", checked: false, display: true },
  { id: "hyundai", label: "Hyundai", checked: false, display: true },
  { id: "mahindra", label: "Mahindra", checked: false, display: true }
];

const transmissionType = [
  { id: "automatic", label: "Automatic", checked: false },
  { id: "manual", label: "Manual", checked: false }
];

const color = [
  { id: "red", label: "Red" },
  { id: "white", label: "White" },
  { id: "black", label: "Black" }
];

export default function App() {
  const [isModal, setModal] = React.useState(false);
  const [filterbrand, setFilteredBrand] = React.useState(null);
  const [filtercolor, setFilteredColor] = React.useState(null);
  const [filtertype, setFilteredType] = React.useState(null);
  const [totalFilter, setTotalFilter] = React.useState(0);
  const [b, sb] = React.useState(brands);
  const [tags, addTags] = React.useState([]);
  const [t, st] = React.useState(transmissionType);

  const onBrandChangeHandler = (e) => {
    setFilteredBrand(e);
  };
  const onColorChangeHandler = (e) => {
    setFilteredColor(e);
  };

  const onTransmissionChangeHandler = (e) => {
    setFilteredType(e);
  };

  const resetFilters = (e) => {
    addTags([]);
    st(transmissionType);
    sb(brands);
  };

  const onApplyFilter = (e) => {
    const transmissionCount = filtertype ? 1 : 0;
    const colorCount = filtercolor ? 1 : 0;
    const brandCount = filterbrand ? filterbrand.length : 0;
    const tagCount = tags.length;
    const totalCount = transmissionCount + brandCount + colorCount + tagCount;
    setTotalFilter(totalCount);
    setModal(false);
  };

  return (
    <div className="App">
      <button className="btn filter-btn" onClick={() => setModal(true)}>
        Filters <span className="filter-count">{totalFilter}</span>
      </button>

      <Modal
        isVisible={isModal}
        title="Filters"
        content={
          <div className="form-wrapper">
            <section className="section">
              <label className="category-label">Transmission</label>
              <Radiobutton
                options={t}
                onChange={onTransmissionChangeHandler}
                setOptions={st}
              />
            </section>
            <section className="section">
              <label className="category-label">Brands</label>
              <CheckboxSearch
                options={b}
                setOptions={sb}
                getCount={onBrandChangeHandler}
              />
            </section>
            <section className="section">
              <label className="category-label">Color</label>
              <Selectbox values={color} onValueChange={onColorChangeHandler} />
            </section>
            <section className="section">
              <label className="category-label">Keywords</label>
              <InputTag tags={tags} addTags={addTags} />
            </section>
          </div>
        }
        footer={
          <section>
            <button className="btn clear-btn" onClick={resetFilters}>
              Clear
            </button>
            <button className="btn apply-btn" onClick={onApplyFilter}>
              Apply Filters
            </button>
          </section>
        }
        onClose={() => setModal(false)}
      />
    </div>
  );
}
