import React from 'react';
import UserData from '../UserData';

function Table({ users, selectedUsers, onSelect, onSelectAll, onDelete, onSave }) {
  const isSelectAllChecked = users.length > 0 && selectedUsers.length === users.length;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={isSelectAllChecked}
              onChange={onSelectAll}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th className='hide'>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserData
            key={user.id}
            user={user}
            isSelected={selectedUsers.includes(user.id)}
            onSelect={() => onSelect(user.id)}
            onDelete={() => onDelete(user.id)}
            onSave={onSave}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;