import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "./Context";
import { Link } from "react-router-dom";

const Filter = () => {
    const { expenses, deleteExpense } = useContext(ExpenseContext);

    const [key, setkey] = useState("payment");
    const [value, setvalue] = useState("");

    const [filterexpenses, setfilterexpenses] = useState([]);

    const applyFilter = () => {
        const filtered = expenses.filter((expense) => expense[key] === value);
        setfilterexpenses(filtered);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        applyFilter();
    };

    // Reapply the filter whenever the global `expenses` state changes
    useEffect(() => {
        applyFilter();
    }, [expenses, key, value]); // Run whenever `expenses`, `key`, or `value` changes

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <select onChange={(e) => setkey(e.target.value)} value={key}>
                    <option value="amount">Amount</option>
                    <option value="remark">Remark</option>
                    <option value="payment">Payment</option>
                    <option value="category">Category</option>
                </select>
                <input
                    onChange={(e) => setvalue(e.target.value)}
                    value={value}
                    type="text"
                    placeholder="Enter Value"
                />
                <button>Filter</button>
            </form>
            <hr />
            <hr />

            {filterexpenses.length === 0
                ? ""
                :
                <div className="overflow-x-auto rounded-lg ml-24 mt-12">
                    <table className="w-2/3 table-auto border-collapse border border-gray-300 bg-white">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px- py-3 border border-gray-300 text-sm font-semibold text-gray-700 text-center">
                                    S.No.
                                </th>
                                <th className="px-4 py-3 border border-gray-300 text-sm font-semibold text-gray-700 text-center">
                                    Date & Time
                                </th>
                                <th className="px- py-3 border border-gray-300 text-sm font-semibold text-gray-700 text-center">
                                    Remark
                                </th>
                                <th className="px-12 py-3 border border-gray-300 text-sm font-semibold text-gray-700 text-center">
                                    Payment Method
                                </th>
                                <th className="px-16 py-3 border border-gray-300 text-sm font-semibold text-gray-700 text-center">
                                    Amount
                                </th>
                                <th className="px-12 py-3 border border-gray-300 text-sm font-semibold text-gray-700 text-center">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.length === 0
                                ? (<tr>
                                    <td
                                        className=" text-2xl font-semibold text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    >
                                        No Data Present
                                    </td>
                                </tr>
                                ) : expenses.map((e, index) => {
                                    console.log(e)
                                    return (
                                        <tr key={index} className="hover:bg-gray-100">
                                            <td className="px-4 py-3 border border-gray-300 text-sm text-gray-700 text-center align-middle">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-3 border border-gray-300 text-sm text-gray-700 text-center align-middle">
                                                {e.dateTime}
                                            </td>
                                            <td className="px-4 py-3 border border-gray-300 text-sm text-gray-700 text-center align-middle">
                                                {e.remark}
                                            </td>
                                            <td className="px-4 py-3 border border-gray-300 text-sm text-gray-700 text-center align-middle">
                                                {e.payment}
                                            </td>
                                            <td className="px-4 py-3 border border-gray-300 text-sm text-gray-700 text-center align-middle">
                                                {e.amount}
                                            </td>
                                            <td className="px-0 py-3 border border-gray-300 text-sm text-center align-middle">
                                                <span className="cursor-pointer" onClick={() => deleteExpense(index)}>❌</span>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody >
                    </table>
                </div >
            }
{/* 
            <Link to="/show">Go back</Link> */}
        </div>
    );
};

export default Filter;
