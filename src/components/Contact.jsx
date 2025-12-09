import React ,{useState}from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zki1bc8",
        "template_m3ma6zc",
        e.target,
        "m2Ze3EooFmELn92wo"
      )
      .then(() => {
        setFormStatus("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => setFormStatus("Failed to send message. Try again."));
  };
  return (
    <>
      {/*   <div id="contact" className="bg-gray-100 py-10">
            <h1 className="text-3xl font-bold text-center m-3">Contact</h1>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
            <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
            <div className="space-y-4">
                <div>
                <label className="block text-gray-700 font-medium">EmailID</label>
                <input type="text" className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 text-gray-700"/>
                </div>
                <div>
                <label className="block text-gray-700 font-medium">Github</label>
                <input type="text" className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 text-gray-700"/>
                </div>
                <div>
                <label className="block text-gray-700 font-medium">LinkedIn</label>
                <input type="text" className="w-full mt-1 px-3 py-2 border rounded-lg bg-gray-50 text-gray-700"/>
                </div>
               
               
            </div>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
                <form className="flex flex-col space-y-4">
                    <label className="block text-gray-700 font-medium">Username</label>
                    <input type="text"  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <label className="block text-gray-700 font-medium">Email</label>
                    <input type="email"  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <label className="block text-gray-700 font-medium">PhoneNumber</label>
                    <input type="number"  className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
                </form>
            </div>
            </div>
        </div> */}
      <div id="contact" className="bg-gray-100 py-14 px-6">
        <h1 className="text-center text-4xl font-bold mb-10">Contact Me</h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section - Contact Details */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>

            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <a
                  href="mailto:ponmarimdeiveega@gmail.com"
                  className="hover:underline"
                >
                 ponmarimdeiveega@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaGithub className="text-gray-800" />
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  className="hover:underline"
                >
                https://github.com/deiveegaponmari
                </a>
              </p>

              <p className="flex items-center gap-3">
                <FaLinkedin className="text-blue-700" />
                <a
                  href="https://linkedin.com/in/you"
                  target="_blank"
                  className="hover:underline"
                >
                 https://www.linkedin.com/in/deiveega-ponmari-m-637158238/
                </a>
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows="4"
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>

              {formStatus && (
                <p className="text-green-600 font-medium">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
