'use client'
import React from "react";

const Btn = () => {
    const click = () => {
        // First try to find the works section by common identifiers
        const worksSection = 
            document.getElementById('#works')
        if (worksSection) {
            // If found, scroll to it directly
            worksSection.scrollIntoView({ behavior: "smooth" });
        } else {
            // Adaptive scrolling based on viewport size
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            
            // Calculate scroll distance based on device type
            let scrollDistance;
            if (viewportWidth <= 768) {
                // Mobile devices
                scrollDistance = viewportHeight * 2; // Slightly more than one viewport height
            } else if (viewportWidth <= 1024) {
                // Tablets or landscape mobile
                scrollDistance = viewportHeight * 1.8;
            } else {
                // Desktop/PC - reduce the distance
                scrollDistance = viewportHeight * 1.6; // Less than one viewport height
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