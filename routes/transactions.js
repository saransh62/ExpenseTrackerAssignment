const express = require('express');
const router = express.Router();
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

router.post('/add-income', addIncome);
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome);

router.post('/add-expense', addExpense);
router.get('/get-expenses',getExpenses);
router.delete('/delete-expense/:id',deleteExpense);

module.exports = router;