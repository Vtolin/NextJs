import React from "react";
import Image from "next/image";

const work = () => {
    return (
        <section className="mb-16 pt-18" id="work">
        <h2 className="text-3xl font-bold mb-6">My Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-md text-black w-[100%]" id="works">
                <Image src="/porto.png" alt="portoapp" width={500} height={300} className="pb-[20px] w-full" />
                <h3 className="text-xl font-semibold mb-2">Basic C.R.U.D. App with Node.Js</h3>
                <p className="text-gray-600">A user management CRUD application built with Node.js and MySQL, allowing users to create, read, update, and delete records containing names, emails, and input dates.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md w-[100%] text-black" id="works">
                <Image src="/porto.png" alt="portoapp" width={500} height={300} className="pb-[20px]" />
                <h3 className="text-xl font-semibold mb-2">Portofolio website with NextJs</h3>
                <p className="text-gray-600">Project description goes here</p>
            </div>
        </div>
    </section>
    );
};

export default work;