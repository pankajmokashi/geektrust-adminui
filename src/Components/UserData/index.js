import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function UserData({ user, isSelected, onSelect, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onSave(editedUser);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <tr className={isSelected ? "selected" : ""}>
      <td>
        <input type="checkbox" checked={isSelected} onChange={onSelect} />
      </td>
      <td>
        {isEditing ? (
          <input
            className="edit"
            type="text"
            value={editedUser.name}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
          />
        ) : (
          user.name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            className="edit"
            type="text"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
          />
        ) : (
          user.email
        )}
      </td>
      <td className='hide'>
        {isEditing ? (
          <input
            className="edit"
            type="text"
            value={editedUser.role}
            onChange={(e) =>
              setEditedUser({ ...editedUser, role: e.target.value })
            }
          />
        ) : (
          user.role
        )}
      </td>

      <td
        style={{ display: "flex", alignItems: "center", height: "43px" }}
      >
        {isEditing ? (
          <>
            <TiTick className="save" onClick={handleSaveClick} />
            <ImCross className="cancle" onClick={handleCancelClick} />
          </>
        ) : (
          <BiSolidEdit onClick={handleEditClick} />
        )}
        <AiFillDelete className="red" onClick={() => onDelete(user.id)} />
      </td>
    </tr>
  );
}

export default UserData;
