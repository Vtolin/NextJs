import Button from "./btns/Button";
import React from "react";

const Taskbar = () => {
return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
        
        <div className="max-w-[910%] mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="text-gray-700 font-semibold text-lg">
                    <img src="/next.svg" className="h-[15px]" />
                </div>
            </div>
            <Button />
        </div>
    </div>
);
};

export default Taskbar;