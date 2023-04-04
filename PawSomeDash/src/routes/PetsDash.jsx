import React from "react";
import MaterialReactTable from "material-react-table";
import { Button } from "@mui/material";
import { petsData } from "./PetsData";
import PetsDashWelcome from "../components/PetsDashWelcome";
import { Link } from "react-router-dom";
import SpeciesChat from "../visualizations/SpeciesPieChat";
import AgePieChat from "../visualizations/AgePieChat";
import BreedsBarChat from "../visualizations/BreedsBarChat";
import { FaLink } from "react-icons/fa";
// import LocationMap from "../visualizations/LocationMap";

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "age",
    header: "Age",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "breeds.primary",
    header: "Breed",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "size",
    header: "Size",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    enableSorting: false,
    size: 200,
    muiTableHeadCellProps: {
      align: "justify",
    },
    muiTableBodyCellProps: {
      align: "justify",
    },
  },
  {
    accessorKey: "contact.address.city",
    header: "City",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "contact.address.state",
    header: "State",
    size: 5,
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "id",
    header: "Details",
    enableSorting: false,
    size: 1,
    Cell: ({ cell }) => (
      <Link
        to={`/pets/${cell.getValue()}`}
        key={cell.getValue()}
        style={{ textDecoration: "none" }}
      >
        <Button>
          <FaLink />
        </Button>
      </Link>
    ),
    muiTableHeadCellProps: {
      align: "center",
    },
    muiTableBodyCellProps: {
      align: "center",
    },
  },
];

const PetsDash = () => {
  const initialState = {
    columnPinning: {
      left: ["name"],
      right: ["id"],
    },
  };
  return (
    <>
      <PetsDashWelcome />
      <div className="pets-table-chats">
        {" "}
        <div className="pets-table">
          <MaterialReactTable
            columns={columns}
            data={petsData}
            enablePinning={true}
            enableStickyHeader={true}
            initialState={initialState}
            isMultiSortEvent={() => true}
            maxMultiSortColCount={3}
            renderTopToolbarCustomActions={({ table }) => (
              <Button onClick={() => table.resetSorting(true)}>
                Clear All Sorting
              </Button>
            )}
          />
        </div>
        <div
          className="pie-chats"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <h5>Species Distribution</h5>
          <SpeciesChat />
          <h5
            style={{
              marginTop: "20px",
            }}
          >
            Age Distribution
          </h5>
          <AgePieChat />
          <h5
            style={{
              marginTop: "20px",
            }}
          >
            Breed Distribution
          </h5>
          <BreedsBarChat />
        </div>
      </div>
    </>
  );
};

export default PetsDash;
