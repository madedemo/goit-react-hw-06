import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import data from '../data/contactList.json'

const App = () => {
  const [users, setUsers] = useState(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    return storedUsers || data;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleUserAdd = (newUser) => {
    const updatedUsers = [...users, { ...newUser, id: nanoid() }];
    setUsers(updatedUsers);
  };

  const handleUserDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) => {
    const nameIncludesFilter = user.name && user.name.toLowerCase().includes(filter.toLowerCase());
    const numberIncludesFilter = typeof user.number === "string" && user.number.toLowerCase().includes(filter.toLowerCase());
    return nameIncludesFilter || numberIncludesFilter;
  });

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleUserAdd} />
      <SearchBox onChange={handleFilterChange} value={filter} />
      <ContactList users={filteredUsers} onUserDelete={handleUserDelete} />
    </div>
  );
};

export default App;


