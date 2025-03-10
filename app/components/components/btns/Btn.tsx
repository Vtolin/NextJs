'use client'
import React from "react";

const Btn = () => {
    const click = () => {
        const worksSection = 
            document.getElementById('#works')
        if (worksSection) {
            worksSection.scrollIntoView({ behavior: "smooth" });
        } else {
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            
            let scrollDistance;
            if (viewportWidth <= 768) {
                scrollDistance = viewportHeight * 2;
            } else if (viewportWidth <= 1024) {
                scrollDistance = viewportHeight * 1.8;
            } else {
                scrollDistance = viewportHeight * 1.6;
            }
            
            window.scrollBy({
                top: scrollDistance,
                behavior: "smooth"
            });
        }
    };
    
    return (
        <div>
            <button onClick={click} className="bg-white text-black w-[150px] h-[45px] rounded mt-24 cursor-pointer">
                My Works
            </button>
        </div>
    );
};

export default Btn;