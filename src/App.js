import React from "react";
import "./style.css";
import Table from "./Table";

export default function App() {
  const data = [
    { name: "test1", age: 30, place: "brazil", place2: "brazil" },
    { name: "test2", age: 30, place: "brazil", place2: "brazil" },
    { name: "test2", age: 30, place: "brazil", place2: "brazil" }
  ];

  const columns = [
    {
      dataField: "name",
      text: "Nome",
      Mask: (
        <button
          type="button"
          onClick={() => {
            console.log("Do Something");
          }}
        >
          {data.name}
        </button>
      )
    },
    {
      dataField: "age",
      text: "Idade",
      Mask: (
        <button
          type="button"
          onClick={() => {
            console.log("Do Something");
          }}
        >
          {data.name}
        </button>
      )
    },
    {
      dataField: "place",
      text: "Localidade",
      Mask: (
        <button
          type="button"
          onClick={() => {
            console.log("Do Something");
          }}
        >
          {data.name}
        </button>
      )
    },
    {
      dataField: "place2",
      text: "2",
      Mask: (
        <button
          type="button"
          onClick={() => {
            console.log("Do Something");
          }}
        >
          {data.name}
        </button>
      )
    }
  ];

  return (
    <div className="App">
      <Table data={data} columns={columns} />
    </div>
  );
}
