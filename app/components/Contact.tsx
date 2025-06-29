import React from "react";

const Contact = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-white p-6">
            <h1 className="font-bold text-2xl text-center">Send Me a Message</h1>
            <div className="w-full max-w-lg text-center">
                <form action="https://formspree.io/f/xdkalewo" method="POST">    
                <p className="mt-5 text-left">Name</p>
                <input type="text" className="rounded border border-white focus:border-blue-500 outline-none p-2 h-10 w-full bg-black text-white"/>
                
                <p className="mt-5 text-left">Email</p>
                <input type="email" className="rounded border border-white focus:border-blue-500 outline-none p-2 h-10 w-full bg-black text-white"/>
                
                <p className="mt-5 text-left">Message</p>
                <textarea className="rounded border border-white focus:border-blue-500 outline-none p-2 h-28 w-full bg-black text-white"></textarea>
                
                <button type="submit" className="items-center cursor-pointer mt-[20px] bg-gray-700 rounded-[5px] h-[45px] w-[150px] hover:bg-white hover:text-black transition-all 0,3ms">Send Messages</button>
            </form>
            </div>
        </section>
    );
};
export default Contact;
