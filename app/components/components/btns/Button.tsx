import React from "react";
import Link from "next/link";

const Button = () => {
    return (
        <div className="flex gap-4">
            <Link href="https://github.com/Vtolin">
                <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-700 hover:text-gray-100 transition-all text-gray-800 cursor-pointer">
                    Github
                </button>
            </Link>
            <Link href="https://www.instagram.com/manx100ultra/">
                <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-700 hover:text-gray-100 transition-all text-gray-800 cursor-pointer">
                    Instagram
                </button>
            </Link>
        </div>
    );
};

export default Button;