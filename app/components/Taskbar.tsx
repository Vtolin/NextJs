import Button from "./btns/Button";
import React from "react";
import Image from "next/image";

const Taskbar = () => {
return (
    <div className="fixed top-0 left-0 right-0 shadow-lg backdrop-blur-md z-50">
        
        <div className="max-w-[910%] mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="text-gray-700 font-semibold text-lg">
                    <Image alt="nextlogo" src="/logo.png" className="h-[50px]" width={50} height={50}/>
                </div>
            </div>
            <Button />
        </div>
    </div>
);
};

export default Taskbar