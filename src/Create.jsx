import { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
    const navigate = useNavigate();
    const { expenses, setexpenses } = useContext(ExpenseContext); 

    const [amount, setamount] = useState("");
    const [remark, setremark] = useState("");
    const [payment, setpayment] = useState("cash");

    // Function to handle form submission
    const SubmitHandler = (e) => {
        e.preventDefault();

        const dateTime = new Date().toLocaleString("en-US", {
            dateStyle: "short",
            timeStyle: "short",
        });

        const newexpense = { amount, remark, dateTime, payment };

        const copyexpenses = [...expenses];
        copyexpenses.push(newexpense);
        setexpenses(copyexpenses);
        localStorage.setItem("expenses", JSON.stringify(copyexpenses));

        toast.success("Expense added successfully!");
        navigate("/");

        setamount("");
        setremark("");
    };

    // Disable button if fields are empty
    const isDisabled = 0 == amount;

    return (
        <form onSubmit={SubmitHandler} className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Add Your Expenses :-</h2>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <input
                type="text"
                placeholder=" Add Remark (optional)"
                value={remark}
                onChange={(e) => setremark(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <select
                value={payment}
                onChange={(e) => setpayment(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            >
                <option value="cash">Cash</option>
                <option value="online">Online</option>
                <option value="card">Card</option>
            </select>
            <button
                type="submit"
                disabled={isDisabled}
                className={`w-full py-2 rounded-md text-white font-semibold ${
                    isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
                }`}
            >
                Add Expense
            </button>
        </form>
    );
};

export default Create;
