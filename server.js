const http = require('http');
const url = require('url');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const expenseController = require('./controllers/expenseController');
const incomeController = require('./controllers/incomeController');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);
  const { pathname } = reqUrl;

  // POST request for adding an expense
  if (req.method === 'POST' && pathname === '/api/expenses/add') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', async () => {
      try {
        const expenseData = JSON.parse(body);
        const expense = await expenseController.addExpense(expenseData);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(expense));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: error.message }));
      }
    });
  } 

  // GET request for retrieving expenses
  else if (req.method === 'GET' && pathname === '/api/expenses') {
    try {
      const expenses = await expenseController.getExpenses();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(expenses));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: error.message }));
    }
  }

  // POST request for adding income
  else if (req.method === 'POST' && pathname === '/api/incomes/add') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', async () => {
      try {
        const incomeData = JSON.parse(body);
        const income = await incomeController.addIncome(incomeData);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(income));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: error.message }));
      }
    });
  }

  // GET request for retrieving income
  else if (req.method === 'GET' && pathname === '/api/incomes') {
    try {
      const incomes = await incomeController.getIncomes();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(incomes));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: error.message }));
    }
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
