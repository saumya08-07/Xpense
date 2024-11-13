const Income = require('../models/Income');

// Sample data to populate incomes
const sampleIncomes = [
  { amount: 1000, source: 'Freelance Work', category: 'Income' },
  { amount: 1500, source: 'Salary', category: 'Job' },
];

exports.addIncome = async (req, res) => {
  try {
    const newIncome = new Income(req.body);
    const income = await newIncome.save();
    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: 'Error adding income' });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    // If no data in DB, add sample data
    const incomes = await Income.find();
    if (incomes.length === 0) {
      await Income.insertMany(sampleIncomes);  // Add mock data
      return res.status(200).json(sampleIncomes);
    }
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching incomes' });
  }
};
