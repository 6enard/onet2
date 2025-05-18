import React, { useState } from "react";
import { MapPin,  Mail,  Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import Alert from "./Alert.tsx"; // Adjust path if needed

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    experience: "beginner",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_fpizptm",
        "template_5wm5fq7",
        {
          from_name: formState.name,
          from_email: formState.email,
          message: `Experience: ${formState.experience}\n\n${formState.message}`,
        },
        "odeWgS5PvV3YKOWsU"
      )
      .then(() => {
        setAlert({
          visible: true,
          message: "Your message has been sent successfully!",
          type: "success",
        });
        setFormState({
          name: "",
          email: "",
          message: "",
          experience: "beginner",
        });
      })
      .catch(() => {
        setAlert({
          visible: true,
          message: "There was an error sending your message. Please try again.",
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAlertClose = () => {
    setAlert({ visible: false, message: "", type: "" });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title slide-up">Contact Us</h2>
        <p className="section-subtitle slide-up">
          Ready to start your BJJ journey? Get in touch with us!
        </p>

        {alert.visible && (
          <div className="mt-4">
            <Alert
              message={alert.message}
              type={alert.type}
              onClose={handleAlertClose}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact form */}
          <div className="bg-white rounded-lg shadow-md p-8 slide-up">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-slate-700">
                  Your Experience
                </label>
                <select
                  name="experience"
                  value={formState.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Let us know if you have any questions..."
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white w-full py-3 rounded-md font-semibold transition-colors hover:bg-green-700 flex justify-center items-center"
              >
                {loading ? (
                  <span className="animate-spin mr-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact info + Map (unchanged) */}
          <div className="scale-in">
            <div className="bg-green-800 rounded-lg shadow-md p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Academy Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-green-300 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-green-100">
                      Ramata Greens Apartments
                      <br />
                      Nairobi, Ruaraka
                    </p>
                  </div>
                </div>

                
                  

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-green-300 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-green-100">
                      <a href="mailto:info@onetribebjj.com">
                        info@onetribebjj.com
                      </a>
                    </p>
                  </div>
                </div>

                
              </div>

              <div className="mt-12">
                <h4 className="font-bold mb-4">Visit Us</h4>
                <div className="rounded-lg overflow-hidden h-60 bg-slate-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.512437335079!2d36.86104653253514!3d-1.2438908271153684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15f678b59017%3A0xb08739f721ee91f!2sOne%20Tribe%20Brazilian%20Jiu-Jitsu!5e0!3m2!1sen!2ske!4v1747407213523!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Academy Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
