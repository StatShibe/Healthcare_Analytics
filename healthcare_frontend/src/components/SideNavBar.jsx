import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SideNavBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`flex h-screen bg-gray-200 ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}>
            {/* Sidebar */}
            <div className={`bg-white border-r ${isOpen ? "" : "border-gray-300"} w-full flex flex-col`}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <img src="https://img.logoipsum.com/243.svg" alt="Logo" className="w-10 h-10" />
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight	 className="w-6 h-6" />}
                    </button>
                </div>
                {/* Sidebar Content */}
                <ul className="flex flex-col flex-1 overflow-y-auto">
                    {children}
                </ul>
            </div>
            {/* Page Content */}
            <div className="flex flex-col flex-1">
                {/* Content goes here */}
            </div>
        </div>
    );
};

export default SideNavBar;
