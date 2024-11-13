const Expense = require('../models/Expense');

// Sample data to populate expenses
const sampleExpenses = [
  { amount: 50, description: 'Lunch', category: 'Food' },
  { amount: 200, description: 'Groceries', category: 'Shopping' },
];

exports.addExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const expense = await newExpense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Error adding expense' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    // If no data in DB, add sample data
    const expenses = await Expense.find();
    if (expenses.length === 0) {
      await Expense.insertMany(sampleExpenses);  // Add mock data
      return res.status(200).json(sampleExpenses);
    }
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses' });
  }
};
