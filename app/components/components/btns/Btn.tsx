'use client'
import React from "react";

const Btn = () => {
    const scrollToWork = (event: React.MouseEvent<HTMLButtonElement>) => { 
        const section = document.getElementById("work");
        if (section) {
            // Get the position of the element
            const y = section.getBoundingClientRect().top + window.pageYOffset;
            
            // Scroll to element minus 80px (or whatever offset you prefer)
            window.scrollTo({
                top: y - 80,
                behavior: 'smooth'
            });
        }
    }
    return (
        <div>
            <button onClick={scrollToWork} className="bg-white text-black w-[150px] h-[45px] rounded mt-24 cursor-pointer">
                My Works
            </button>
        </div>
    );
};

export default Btn;
