import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Components/Table";
import Pagination from "./Components/Pagination";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const usersPerPage = 10;

  useEffect(() => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleSelect = (userId) => {
    console.log(userId);
    const updatedSelectedUsers = selectedUsers.includes(userId)
      ? selectedUsers.filter((id) => id !== userId)
      : [...selectedUsers, userId];
    setSelectedUsers(updatedSelectedUsers);
  };

  const usersOnPage = () => {
    const filteredUsers = users.filter((user) => {
      const searchValue = filter.toLowerCase();
      return (
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.role.toLowerCase().includes(searchValue)
      );
    });

    return filteredUsers.slice(
      (currentPage - 1) * usersPerPage,
      currentPage * usersPerPage
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSelectAll = () => {
    const currentPageUsers = usersOnPage();
    if (selectedUsers.length === currentPageUsers.length) {
      setSelectedUsers([]);
    } else {
      const currentPageUserIds = currentPageUsers.map((user) => user.id);
      setSelectedUsers(currentPageUserIds);
    }
  };

  const handleDirectDelete = (id) => {
    const updatedUsers = users.filter(
      (user) => id !== user.id
    );
    setUsers(updatedUsers);
  }

  const handleDeleteSelected = () => {
    const updatedUsers = users.filter(
      (user) => !selectedUsers.includes(user.id)
    );
    setUsers(updatedUsers);
    setSelectedUsers([]);
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSaveUser = (user) => {
    const updatedUsers = users.map((existingUser) => {
      if (existingUser.id === user.id) {
        return user;
      }
      return existingUser;
    });

    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search by Name, Email or Role"
        value={filter}
        onChange={handleFilterChange}
      />

      <Table
        users={usersOnPage()}
        selectedUsers={selectedUsers}
        onSelect={handleSelect}
        onSelectAll={handleSelectAll}
        onDelete={handleDirectDelete}
        onSave={handleSaveUser}
      />

      <Pagination
        className="pagination"
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / usersPerPage)}
        onPageChange={handlePageChange}
        maxVisiblePages={5}
        onDelete={handleDeleteSelected}
      />
    </div>
  );
}

export default App;
