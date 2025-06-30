"use client";
import React from "react";
import Taskbar from "../components/Taskbar";
import Link from "next/link";
import "../lib/font-awsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <Taskbar />
      <section className="bg-[#1a1a1a] py-12 px-6 min-h-screen">
         <h2 className="text-4xl font-bold mb-6 text-center mt-[50px]">Contact Me</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 mt-[50px]">

        <div className="flex-1 bg-[#2b2b2b] p-8 rounded-lg shadow-lg border border-zinc-700 w-full">
            <h2 className="text-2xl font-semibold text-white mb-6">Send Me</h2>
            <form
              action="https://formspree.io/f/mblywdja"
              method="POST"
              className="space-y-6 "
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#1e1e1e] border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#1e1e1e] border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-[#1e1e1e] border border-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1 text-white">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-6 text-base">
              <Link
                href="https://wa.me/+6281382454752"
                target="_blank"
                className="flex items-center gap-4 hover:underline"
              >
                <FontAwesomeIcon icon={["fab", "whatsapp"]} className="text-green-400 text-2xl" />
                <span>WhatsApp</span>
              </Link>
              <Link
                href="https://www.instagram.com/lukirainilucu"
                target="_blank"
                className="flex items-center gap-4 hover:underline"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} className="text-pink-400 text-2xl" />
                <span>Instagram</span>
              </Link>
              <Link
                href="mailto:arya.photor8@gmail.com"
                target="_blank"
                className="flex items-center gap-4 hover:underline"
              >
                <FontAwesomeIcon icon={["fab", "google"]} className="text-red-500 text-2xl" />
                <span>Email</span>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
