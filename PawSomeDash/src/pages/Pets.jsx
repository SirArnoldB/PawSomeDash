import React, { useState, useEffect } from "react";
import { Table, Pagination } from "rsuite";
import { getAccessToken, getPets } from "../utils/petFinderApi";
import ToolBar from "../components/ToolBar";
import PetsDashWelcome from "../components/PetsDashWelcome";

const { Column, HeaderCell, Cell } = Table;
const PAGE_SIZE = 20;

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(pets);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const accessToken = await getAccessToken();
      const petsData = await getPets(accessToken);
      console.log(petsData);
      setPets(petsData.animals);

      setLoading(false);
    };
    fetchData();
  }, []);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleLimitChange = (limit) => {
    setLimit(limit);
    setPage(1);
  };

  const handleFilterChange = (filters) => {
    let newFilteredData = [...pets];
    Object.keys(filters).forEach((filter) => {
      if (filters[filter]) {
        newFilteredData = newFilteredData.filter(
          (pet) => pet[filter].toLowerCase() === filters[filter].toLowerCase()
        );
      }
    });
    setFilteredData(newFilteredData);
  };

  const handleSearch = (value) => {
    const newFilteredData = pets.filter(
      (pet) =>
        pet.name.toLowerCase().includes(value.toLowerCase()) ||
        pet.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };

  const paginatedPets = pets.filter((currentValue, index) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return index >= startIndex && index < endIndex;
  });

  return (
    <div>
      <PetsDashWelcome />
      <ToolBar onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <Table
        height={700}
        width={1400}
        data={paginatedPets}
        wordWrap="break-word"
        loading={loading}
      >
        <Column fixed flexGrow={1}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>
        <Column fixed flexGrow={1}>
          <HeaderCell>Type</HeaderCell>
          <Cell dataKey="type" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Breed</HeaderCell>
          <Cell dataKey="breeds.primary" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Size</HeaderCell>
          <Cell dataKey="size" />
        </Column>
        <Column flexGrow={3}>
          <HeaderCell>Description</HeaderCell>
          <Cell dataKey="description" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Location</HeaderCell>
          <Cell dataKey="contact.address.city" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>LearnMore</HeaderCell>
          <Cell>
            {(rowData) => (
              <a href={rowData.url} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            )}
          </Cell>
        </Column>
      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={["total", "-", "limit", "|", "pager", "skip"]}
          total={pets.length}
          limitOptions={[10, PAGE_SIZE, 30, 40, 50]}
          limit={limit}
          activePage={page}
          onChangePage={handlePageChange}
          onChangeLimit={handleLimitChange}
        />
      </div>
    </div>
  );
};

export default Pets;
