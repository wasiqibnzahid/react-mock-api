import React, { useEffect, useState } from "react";
import { tableDataType } from "../interface/index";
import DetailsTable from "./sub-component/DetailsTable";

const TableComponent = ({
  tableData,
  fetchingData,
} : {
  tableData: tableDataType;
  fetchingData: boolean;
}) => {
  const [expandedRow, setExpandedRow] = useState(-1);
  const expandRow = (x: number) => {
    if (expandedRow === x) {
      setExpandedRow(-1);
    } else {
      setExpandedRow(x);
    }
  };
  const deleteRow = (index: number):void => {
    
  }
  useEffect(() => {
    setExpandedRow(-1)
  }, [tableData.name])
  return (
    <>
      <h3 className="text-center table-header">{tableData.name}</h3>
      <table className="main-data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        {!fetchingData ? (
          <tbody>
            {tableData.items.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.status ? "Available" : "Out of stock"}</td>
                    <td>${item.price}</td>
                    <td>
                      <span
                        className="clickable"
                        onClick={() => {
                          expandRow(index);
                        }}
                      >
                        {expandedRow === index ? "collapse" : "expand"}
                      </span>
                      <span onClick={()=>{deleteRow(index)}}>delete</span>
                    </td>
                  </tr>
                  {expandedRow === index && (
                    <tr key={index + " - details"}>
                      <td colSpan={4}>
                        <DetailsTable item={item} />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        ) : (
          ""
        )}
      </table>
      {fetchingData ? <div className="fetchingLoader"></div> : ""}{" "}
    </>
  );
};
export default TableComponent;
