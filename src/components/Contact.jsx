import { IoMail, IoPhonePortraitOutline } from "react-icons/io5";
import { PROFILE_DATA } from "../utils/data";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_0ueriuk";
    const templateId = "template_wsxlexh";
    const publicKey = "65TZ5QKOSWlkDOPzw";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Mr. Rizki",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  return (
    <section className="max-w-screen-xl mx-auto px-6 pb-20" id="contact">
      <h5 className="text-white text-2xl md:text-4xl font-semibold text-center pb-8 md:pb-14">
        Contact
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
        <div>
          <ContactInfoCard icon={<IoMail />} text={PROFILE_DATA.email} />
          <ContactInfoCard
            icon={<IoPhonePortraitOutline />}
            text={PROFILE_DATA.phone}
          />
        </div>
        <div>
          <h5 className="md:hidden text-cyan-300 text-lg font-medium mt-4 pb-5">
            Contact Form
          </h5>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={name}
              className="input-box"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              required
              className="input-box"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              className="input-box"
              rows="3"
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit" className="primary-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700">
        {icon}
      </div>
      <p className="text-cyan-100 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default Contact;
