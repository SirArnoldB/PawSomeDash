import { useState } from "react";
import states from "states-us";
import SearchIcon from "@rsuite/icons/Search";
import { Input, InputGroup, CheckPicker } from "rsuite";

const filterOptions = {
  size: ["small", "medium", "large", "xlarge"].map((item) => ({
    label: item,
    value: item,
  })),
  gender: ["male", "female"].map((item) => ({ label: item, value: item })),
  age: ["baby", "young", "adult", "senior"].map((item) => ({
    label: item,
    value: item,
  })),
  status: ["adoptable", "adopted", "found"].map((item) => ({
    label: item,
    value: item,
  })),
  location: states
    .map((state) => state.name)
    .map((item) => ({ label: item, value: item })),
};

const ToolBar = ({ onFilterChange, onSearch }) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (filter, value) => {
    const newFilters = { ...filters, [filter]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <div
      style={{
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {Object.keys(filterOptions).map((filter) => (
        <CheckPicker
          key={filter}
          label={`${filter}`}
          data={filterOptions[filter]}
          style={{ width: 200 }}
          onChange={(value) => handleFilterChange(filter, value)}
        />
      ))}

      <InputGroup inside style={{ width: "25%" }}>
        <Input
          placeholder="Search"
          onChange={handleSearch}
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
        />
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default ToolBar;
