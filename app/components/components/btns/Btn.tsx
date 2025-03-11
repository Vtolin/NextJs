'use client'
import React from "react";

const Btn: React.FC = () => {
    const scrollToWork = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); 
        
        const section = document.getElementById("work");
        if (section) {
            const yOffset = -75;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div>
            <button onClick={scrollToWork} className="bg-white text-black w-[150px] h-[45px] rounded mt-24 cursor-pointer">
                My Works
            </button>
        </div>
    );
};

export default Btn;
