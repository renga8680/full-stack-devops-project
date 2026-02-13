import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchHealth();
    fetchUsers();
  }, []);

  const fetchHealth = async () => {
    try {
      const response = await axios.get(`${API_URL}/health`);
      setHealth(response.data);
    } catch (error) {
      console.error('Health check failed:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/users`, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
      alert('User added successfully!');
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Full Stack DevOps App</h1>
        <p>React + Node.js + Docker + Kubernetes + Jenkins + Ansible + Terraform</p>
        
        {health && (
          <div className="health-status">
            <p>✅ Backend Status: {health.status}</p>
            <small>{health.timestamp}</small>
          </div>
        )}
      </header>

      <main className="App-main">
        <section className="add-user">
          <h2>Add New User</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
            <button type="submit">Add User</button>
          </form>
        </section>

        <section className="users-list">
          <h2>Users</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong> - {user.email}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
