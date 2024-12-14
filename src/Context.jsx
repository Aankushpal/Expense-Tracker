import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ExpenseContext = createContext();

const Context = ({ children }) => {
    const [expenses, setexpenses] = useState(
        JSON.parse(localStorage.getItem("expenses")) || [] //  We're using the JSON.parse() method to convert the string back into an array. If there are no expenses in localStorage, we'll default to an empty array.
    );

    const deleteExpense = (index) => {
        console.log("Deleting Expense ID:", index);
        const updatedExpenses = expenses.filter((_, idx) => idx !== index);
        console.log("Updated Expenses After Delete:", updatedExpenses);
        setexpenses(updatedExpenses);
        localStorage.setItem("expenses", JSON.stringify(updatedExpenses)); //  We're updating the localStorage with the updatedExpenses array after deleting an expense.
        toast.error("Expense deleted successfully!");
    };

    return (
        <ExpenseContext.Provider value={{ expenses, setexpenses, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default Context;
