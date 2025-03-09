'use client'
import React from "react";

const Btn = () => {
    const click = () => {
        window.scrollBy({
            top: 750,
            behavior: "smooth"
        })
    }
    return (
        <div>
            <button onClick={click} className="bg-white text-black w-[150px] h-[45px] rounded mt-24 cursor-pointer">
                My Works
            </button>
        </div>
    );
};

export default Btn;
