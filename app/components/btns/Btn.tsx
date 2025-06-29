'use client'
import React from "react";

const Btn = () => {
    const scrollToWork = () => { 
        const section = document.getElementById("work");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div>
            <button onClick={scrollToWork} className="bg-white text-black w-[150px] h-[45px] rounded mt-16 cursor-pointer">
                My Works
            </button>
        </div>
    );
};

export default Btn;
