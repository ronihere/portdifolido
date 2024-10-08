"use client";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import useSectionInView from "./Hooks/useSectionInview";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmailClient } from "@/actions/sendEmail";
import toast from "react-hot-toast";
const Contactme = () => {
  const { ref } = useSectionInView("Contact");
  const [senderEmail, setSenderEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const sendEmail = async () => {
    const { data, error } = await sendEmailClient(senderEmail, message);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Email sent successfully!");
  };
  return (
    <motion.section
      ref={ref}
      className="mb-20 scroll-mt-28 max-w-[53rem] text-center sm:mb-28 w-[min(100%,38rem)]"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-5 mb-5">
        Please contact me directly at{" "}
        <a href="mailto:ronihere4work@gmail.com" className="underline">
          ronihere4work@gmail.com
        </a>{" "}
        or through this form
      </p>

      <div className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg borderBlack p-4"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
          onChange={(e) => setSenderEmail(String(e.target.value))}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          required
          maxLength={5000}
          onChange={(e) => setMessage(String(e.target.value))}
        />
        <div className="flex w-full  md:justify-start justify-center">
          <button
            onClick={() => sendEmail()}
            className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          >
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1  transition" />{" "}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contactme;
