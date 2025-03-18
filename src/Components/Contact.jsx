import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending...");

    emailjs
      .send(
        "service_bevbp7p",
        "template_ojic7df",
        formData,
        "Vdl7FRyuAf5kaADHp"
      )
      .then(() => {
        toast.update(toastId, {
          render: "Message Sent Successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.update(toastId, {
          render: "Failed to send message. Try again later.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  return (
    <div className={`contact-wrapper ${isVisible ? "show" : ""}`}>
      <div id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type your message..." required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
