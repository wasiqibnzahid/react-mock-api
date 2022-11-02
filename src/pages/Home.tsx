import React, { useEffect, useState } from "react";
import TableComponent from "../components/TableComponent";
import api from "../api/index";
import { tableDataType } from "../interface/index";
const HomeView = () => {
  const itemList = ["Cars", "Products"];
  const [tableData, setTableData] = useState<tableDataType>({
    name: "Cars",
    items: [],
  });
  const [fetchingData, setFetchingData] = useState<boolean>(false);
  useEffect(() => {
    const getData =  async () => {
        setFetchingData(true);
        const apiName = tableData.name.toLowerCase();
        await api.get(`/${apiName}`).then((res) => {
          setTableData({
            name: tableData.name,
            items: res.data,
          });
        });
        setFetchingData(false);
      };
      getData()
  }, [tableData.name]);

  const setTable = (x: string) => {
    setTableData({
      name: x,
      items: tableData.items,
    });
  }; 

      
      return (
          <div className="container">
      <div className="flex justify-center tab-switch-container">
        {itemList.map((x, i) => {
            return (
                <div key={i} className={tableData.name === x ? "selected" : ""}>
              <span
                onClick={() => {
                    setTable(x);
                }}
                >
                {x}
              </span>
            </div>
          );
        })}
      </div>
      <TableComponent fetchingData={fetchingData} tableData={tableData} />
    </div>
  );
 
 
};
export default HomeView;
