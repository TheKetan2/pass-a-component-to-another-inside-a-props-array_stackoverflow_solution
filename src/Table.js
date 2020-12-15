import React from "react";
// import { Container } from "./styles";

const Table = ({ data, columns }) => {
  return (
    <>
      <thead>
        <tr>
          {columns.map(header => {
            return <th>{header.text}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map(dado => {
          return (
            <tr>
              {columns.map((column, index) => {
                let { Mask } = column;
                console.log(column["Mask"]);
                Mask = {
                  ...Mask,
                  props: { children: dado[Object.keys(dado)[index]] }
                };
                /*------------------------^^^^^^^^^^^^^^^^^^^^^^^^^^^
                above you can see how we can set the children props of button
                */
                return <td>{Mask}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default Table;
