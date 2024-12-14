import { useContext, useState } from "react";
import { ExpenseContext } from "./Context";
import { CiSearch } from "react-icons/ci";

const Show = () => {
    const { expenses, deleteExpense } = useContext(ExpenseContext);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    const filteredExpenses = expenses.filter((expense) => {
        return (
            expense.remark.toLowerCase().includes(searchTerm.toLowerCase()) ||
            expense.payment.toLowerCase().includes(searchTerm.toLowerCase()) ||
            String(expense.amount).includes(searchTerm)
        );
    });

    const indexOfLastExpense = currentPage * itemsPerPage;
    const indexOfFirstExpense = indexOfLastExpense - itemsPerPage;
    const currentExpenses = filteredExpenses.slice(indexOfFirstExpense, indexOfLastExpense);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            <div className="flex items-center space-x-2">
                <CiSearch className="text-gray-800 text-2xl" />
                <input
                    type="text"
                    placeholder="Search by payment method, remark, or amount"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 w-full rounded-md border border-gray-300 focus:outline-none"
                />
            </div>

            {/* Total Expenses */}
            <div className="flex justify-between px-4">
                <h2 className="text-xl font-semibold">Total Expenses: {filteredExpenses.length}</h2>
                <h2 className="text-xl font-semibold">Total Spent:
                    <span className="text-red-600">{" "}  ₹{filteredExpenses.reduce((ac, cv) => ac + +cv.amount, 0)}</span>
                </h2>
            </div>

            {/* Expenses Table */}
            <div className="overflow-x-auto">
                {filteredExpenses.length === 0 ? (
                    <p className="text-center text-lg text-gray-600">No matching expenses found.</p>
                ) : (
                    <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-5 py-3 text-center font-semibold">
                                    S.No.
                                    </th>
                                <th className="px-5 py-3 text-center font-semibold">
                                    Date & Time
                                    </th>
                                <th className="px-5 py-3 text-center font-semibold">
                                    Remark
                                    </th>
                                <th className="px-5 py-3 text-center font-semibold">
                                    Payment Method
                                    </th>
                                <th className="px-5 py-3 text-center font-semibold">
                                    Amount
                                    </th>
                                <th className="px-5 py-3 text-center font-semibold">
                                    Delete
                                    </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentExpenses.map((e, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-4 py-3 text-center">
                                        {index + 1}
                                        </td>
                                    <td className="px-4 py-3 text-center">
                                        {e.dateTime}
                                        </td>
                                    <td className="px-4 py-3 text-center">
                                        {e.remark}
                                        </td>
                                    <td className="px-4 py-3 text-center">
                                        {e.payment}
                                        </td>
                                    <td className="px-4 py-3 text-center">
                                        ₹{e.amount}
                                        </td>
                                    <td className="px-4 py-3 text-center cursor-pointer" onClick={() =>
                                         deleteExpense(index)}>❌
                                         </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Pagination */}
            {filteredExpenses.length > itemsPerPage && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: Math.ceil(filteredExpenses.length / itemsPerPage) }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className="px-4 py-2 mx-1 bg-blue-600 text-white rounded-md"
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Show;
