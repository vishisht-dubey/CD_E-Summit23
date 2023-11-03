import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const columns = [
  { field: "id", headerName: "ID", width: 120 },
  { field: "ranking", headerName: "Ranking", width: 120 },
  { field: "firstName", headerName: "First name", width: 170 },
  {
    field: "points",
    headerName: "Points",
    type: "number",
    width: 120,
  },
  { field: "instituteName", headerName: "Institue Name", width: 200 },
  { field: "referalCode", headerName: "Referal Code", width: 200 },
];

const rows = [
  // { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  // { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 70 },
  // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // { id: 12, lastName: "Snow", firstName: "Jon", age: 35 },
  // { id: 23, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // { id: 33, lastName: "Lannister", firstName: "Jaime", age: 45 },
  // { id: 44, lastName: "Stark", firstName: "Arya", age: 16 },
  // { id: 54, lastName: "Targaryen", firstName: "Daenerys", age: 70 },
  // { id: 61, lastName: "Melisandre", firstName: null, age: 150 },
  // { id: 73, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  // { id: 83, lastName: "Frances", firstName: "Rossini", age: 36 },
  // { id: 94, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // { id: 100, lastName: "Snow", firstName: "Jon", age: 35 },
  // { id: 212, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // { id: 323, lastName: "Lannister", firstName: "Jaime", age: 45 },
  // { id: 423, lastName: "Stark", firstName: "Arya", age: 16 },
  // { id: 521, lastName: "Targaryen", firstName: "Daenerys", age: 70 },
  // { id: 612, lastName: "Melisandre", firstName: null, age: 150 },
  // { id: 733, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  // { id: 843, lastName: "Frances", firstName: "Rossini", age: 36 },
  // { id: 931, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // { id: 113, lastName: "Snow", firstName: "Jon", age: 35 },
  // { id: 213, lastName: "Lannister", firstName: "Cersei", age: 42 },
  // { id: 344, lastName: "Lannister", firstName: "Jaime", age: 45 },
  // { id: 4323, lastName: "Stark", firstName: "Arya", age: 16 },
  // { id: 5424, lastName: "Targaryen", firstName: "Daenerys", age: 70 },
  // { id: 6324, lastName: "Melisandre", firstName: null, age: 150 },
  // { id: 7242, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  // { id: 4258, lastName: "Frances", firstName: "Rossini", age: 36 },
  // { id: 9424, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Leaderboard() {
  return (
    <div className="bg-white w-3/6 h-3/4">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{ fontSize: "50px", fontWeight: "bold", color: "black" }}
          className="md:text-4xl sm:text-lg"
        >
          LeaderBoard
        </div>
      </div>
      <div>
        <div className="flex h-12 items-center border rounded-full p-2 mx-auto max-w-sm mb-2">
          <input
            className="flex-1 appearance-none border-none  text-gray-700 leading-tight focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-orange-500 text-white border-none rounded-full p-2 ml-2 cursor-pointer">
            Search
          </button>
        </div>
      </div>
      <div className=" bg-white rounded-[20px]">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
          style={{ borderRadius: "20px" }}
          // checkboxSelection
        />
      </div>
    </div>
  );
}


