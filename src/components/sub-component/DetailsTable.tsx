import React, { useState } from "react";
import { itemType } from "../../interface/index";
const DetailsTable = ({ item }: { item: itemType }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [itemDesc, setItemDesc] = useState<string>(item.description);

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
        <tr>
          <td>
            {!editMode ? (
              <p>{item.description}</p>
            ) : (
              <textarea
                style={{ display: "block" }}
                defaultValue={item.description}
                onChange={(e) => {
                  setItemDesc(e.target.value);
                }}
              />
            )}
            <button
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              {!editMode ? "edit" : "cancel"}
            </button>
            {editMode && item.description !== itemDesc && <button>save</button>}
          </td>
          <td>{item.material}</td>
          <td>{item.color}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailsTable;
