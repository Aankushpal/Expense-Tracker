import Nav from "./Nav";
import Create from "./Create";
import Show from "./Show";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="w-full h-screen bg-gray-100 overflow-hidden">
            <Nav />  {/* Navbar */}
            <div className="flex w-full h-full justify-between overflow-hidden">
                <div className="w-1/3 bg-white shadow-lg rounded-md m-4 p-6">
                   <Create />
                </div>

                {/* Right Side (Show Page) */}
                <div className="w-2/3 bg-white shadow-lg rounded-md m-4 p-6 overflow-auto">
                    <Show />
                </div>
            </div>
        </div>
    );
};

export default App;
