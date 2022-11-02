import React from "react";
import {itemType} from '../../interface/index'
const DetailsTable = ({item} : {item: itemType}) => {
  return (
    <table className="details-table">
      <thead>
        <tr>
          <th className="description">Description</th>
          <th>Materials</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <td>
        {item.description}
        </td>
        <td>
            {item.material}
        </td>
        <td>
            {item.color}
        </td>
        </tbody>
    </table>
  );
};

export default DetailsTable;
