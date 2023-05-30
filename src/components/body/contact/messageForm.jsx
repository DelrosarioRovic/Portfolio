import React, { useState } from "react";
import sendEmail from "./fetchingDataMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function messageForm() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!senderName || !senderEmail || !message) {
      // Display an error message and return without sending the email
      toast.error("Please enter your name, email, and message.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }
  
    const data = {
      senderName: senderName,
      senderEmail: senderEmail,
      recipientEmail: "rovicdelrosario01@gmail.com",
      subject: "New message from your website",
      content: message,
    };
  
    sendEmail(data)
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Your message was sent successfully! ✅", {
          position: "bottom-right",
          autoClose: 3000,
        });
        setSenderName("");
        setSenderEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error Try Again later ❌", error);
        toast.error("Error sending email ❌", {
          position: "bottom-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-aos="fade-left"
      action=""
      className="md:w-2/4 flex flex-col items-start text-white opacity-90 font-light text-sm gap-y-3"
    >
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        name="name"
        value={senderName}
        onChange={(event) => setSenderName(event.target.value)}
        className="bg-transparent p-2 rounded-sm w-full border-b-2 border-white border-opacity-50 hover:border-opacity-100 focus:border-b-0 focus:p-[9px] outline-[2px]"
      />
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        name="email"
        value={senderEmail}
        onChange={(event) => setSenderEmail(event.target.value)}
        className="bg-transparent p-2 rounded-sm w-full border-b-2 border-white border-opacity-50 hover:border-opacity-100 focus:border-b-0 focus:p-[9px] outline-[2px]"
      />
      <label htmlFor="message">Your Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        cols="30"
        rows="10"
        className="bg-transparent w-full p-2 rounded-sm border-b-2 border-white border-opacity-50 hover:border-opacity-100 focus:border-b-0 focus:p-[9px] outline-[2px]"
      ></textarea>
      <button
        type="submit"
        className="bg-white bg-opacity-90 py-2 px-7 text-black font-medium rounded-sm
      duration-300 hover:bg-blue-500 hover:text-white hover:opacity-90 active:scale-90"
      >
        Send
      </button>
    </form>
  );
}

export default messageForm;
