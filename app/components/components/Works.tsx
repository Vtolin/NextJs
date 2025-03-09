import React from "react";

const work = () => {
    return (
        <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-md text-black w-[100%]">
                {/* image */}
                <h3 className="text-xl font-semibold mb-2">Basic C.R.U.D. App with Node.Js</h3>
                <p className="text-gray-600">Project description goes here</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[100%] text-black">
                {/* image */}
                <h3 className="text-xl font-semibold mb-2">Project 2</h3>
                <p className="text-gray-600">Project description goes here</p>
            </div>
        </div>
    </section>
    );
};

export default work;