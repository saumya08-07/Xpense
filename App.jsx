import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Transactions from './Dashboard/Transactions';
import AddExpense from './Expense/AddExpense';
import AddIncome from './Income/AddIncome';
import LandingPage from './LandingPage/LandingPage';
import Login from './Login/Login';
import UpdateInfo from './UpdateInfo/UpdateInfo';

function PathDisplay() {
  const location = useLocation();

  return (
    <div className="path-display">
      <p>Current path: {location.pathname}</p>
    </div>
  );
}

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Set to true for default sidebar visibility
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Fetch Expenses from Backend API
  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  // Fetch Incomes from Backend API
  const fetchIncomes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/incomes');
      const data = await response.json();
      setIncomes(data);
    } catch (error) {
      console.error('Error fetching incomes:', error);
    }
  };

  // Fetch Transactions from Backend API
  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchExpenses();
    fetchIncomes();
    fetchTransactions();
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <Link to="/landing" onClick={toggleSidebar}>Landing</Link>
          <Link to="/login" onClick={toggleSidebar}>Login</Link>
          <Link to="/transactions" onClick={toggleSidebar}>Transactions</Link>
          <Link to="/add-expense" onClick={toggleSidebar}>Add Expense</Link>
          <Link to="/add-income" onClick={toggleSidebar}>Add Income</Link>
          <Link to="/update-info" onClick={toggleSidebar}>Update Info</Link>
        </div>

        {/* Toggle Button */}
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰ Menu
        </button>

        {/* SVG blobs */}
        <div className="transp"></div>
        <svg className='blob1 blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#817DFF" d="M43.5,-12.3C53.3,15.8,55.9,48.1,39.3,62C22.8,75.9,-12.8,71.3,-34,54.1C-55.3,37,-62.1,7.3,-54.1,-18.5C-46,-44.3,-23,-66.2,-3,-65.2C16.9,-64.2,33.8,-40.4,43.5,-12.3Z" transform="translate(100 100)" />
        </svg>
        <svg className='blob2 blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#817DFF" d="M35.5,-12C39.9,1.8,32.9,18.7,20.4,27.8C7.8,36.8,-10.3,38,-24.2,28.9C-38.1,19.9,-47.7,0.6,-43,-13.7C-38.2,-28,-19.1,-37.3,-1.8,-36.7C15.6,-36.2,31.2,-25.7,35.5,-12Z" transform="translate(100 100)" />
        </svg>
        <svg className='blob3 blob' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#817DFF" d="M37.6,-8.5C45.7,12.9,47.3,40.1,30.2,55.9C13,71.8,-22.8,76.2,-37.3,63C-51.8,49.7,-44.9,18.7,-35.1,-4.9C-25.4,-28.6,-12.7,-44.7,1,-45.1C14.7,-45.4,29.4,-29.9,37.6,-8.5Z" transform="translate(100 100)" />
        </svg>

        {/* Path display */}
        <PathDisplay />

        {/* Routes */}
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<Transactions transactions={transactions} />} />
          <Route path="/add-expense" element={<AddExpense fetchExpenses={fetchExpenses} />} />
          <Route path="/add-income" element={<AddIncome fetchIncomes={fetchIncomes} />} />
          <Route path="/update-info" element={<UpdateInfo />} />
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />  {/* Default route to landing */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
