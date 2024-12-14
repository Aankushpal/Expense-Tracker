import { Link } from "react-router-dom";

const Nav = () => { 
    return (
        <nav className="w-full bg-green-700 text-white p-4 flex justify-between items-center shadow-md px-12">

            <div className="logo flex items-center">
                {/* Logo SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10 mr-4">
                <path fill="white" d="M28.93 10.63a14 14 0 0 0-23-4.29 1 1 0 1 0 1.41 1.35A12 12 0 0 1 23.91 7H20a1 1 0 0 0 0 2h5.73c.23.32.45.66.65 1H17a1 1 0 0 0 0 2h10.3a12.05 12.05 0 0 1 .7 4 11.77 11.77 0 0 1-1.11 5H19a1 1 0 0 0 0 2h6.73a11.06 11.06 0 0 1-.81 1H22a1 1 0 0 0 0 2h.62A12 12 0 0 1 4.7 20H13a1 1 0 0 0 0-2H4.18A12 12 0 0 1 4 16h4a1 1 0 0 0 0-2H4.19a12.26 12.26 0 0 1 1.16-3.54 1 1 0 1 0-1.77-.92 14 14 0 1 0 25.35 1.09z"/>
                <path fill="white" d="M23 18a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 10a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2zM13 24h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"/>
             </svg>
                <span className="text-xl font-bold">Expense Tracker</span>
            </div>

            <div className="link  flex justify-end gap-12 items-center">
                <Link to="/create" className="text-lg font-semibold">
                    Create Expense
                </Link>
                <Link to="/" className="text-lg font-semibold">
                    Show Expenses
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
