import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react"; // Optional: nice spinner icon

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_a6ieykq",
        "template_qz9cpga",
        form.current,
        "wo7aoTZiTkKxsY4Ey"
      )
      .then(
        () => {
          form.current.reset();
          setIsSending(false);
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSending(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6 md:px-12 lg:px-24"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white tracking-wide">CONTACT</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          I'd love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      <div
        className="mt-8 w-full max-w-lg bg-gradient-to-br from-[#0d081f] to-[#1c133b] p-8 
      rounded-2xl shadow-2xl border border-gray-700 transition hover:shadow-xl "
      >
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-6 flex flex-col space-y-5"
        >
          {["user_email", "user_name", "subject"].map((name, idx) => (
            <input
              key={idx}
              type={name === "user_email" ? "email" : "text"}
              name={name}
              aria-label={name.replace("_", " ")}
              placeholder={
                name === "user_email"
                  ? "Your Email"
                  : name === "user_name"
                  ? "Your Name"
                  : "Subject"
              }
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-400 hover:bg-[#1e142e]"
            />
          ))}

          <textarea
            name="message"
            aria-label="Message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600
             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder:text-gray-400 hover:bg-[#1e142e]"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 py-3
             text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition duration-300 ${
               isSending ? "opacity-70 cursor-not-allowed" : ""
             }`}
          >
            {isSending ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
