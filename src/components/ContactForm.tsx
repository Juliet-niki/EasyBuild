import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO } from "../constants";

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add timestamp for {{time}} placeholder
      const formDataWithTime = {
        ...formState,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formDataWithTime,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-14 md:py-16 px-6 bg-slate-900 text-white"
    >
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Get a Free Quote"
          subtitle="Ready to start your project? Contact us today for a consultation or estimate."
          light
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-[clamp(18px,1.8vw,20px)] font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {CONTACT_INFO.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-primary-900 p-3 rounded-lg text-primary-400">
                      <info.icon strokeWidth={1.5} size={20} />
                    </div>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-slate-400 text-sm mb-1">
                        {info.title}
                      </p>
                      <p className="font-semibold text-base">{info.text}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. We will get back to you within
                    24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 mb-4 rounded-lg border border-slate-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 mb-4 rounded-lg border border-slate-200"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 mb-4 rounded-lg border border-slate-200"
                  />
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 mb-4 rounded-lg border border-slate-200"
                  >
                    <option value="">Select a service...</option>
                    <option value="Building Design">Building Design</option>
                    <option value="Building Estimate">Building Estimate</option>
                    <option value="Land Survey">Land Survey</option>
                    <option value="Property Verification">
                      Property Verification
                    </option>
                    <option value="Construction">Construction</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Project Details..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 mb-4 rounded-lg border border-slate-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-lg font-bold text-white bg-primary-600 hover:bg-primary-700"
                  >
                    {isSubmitting ? "Sending Request..." : "Submit Request"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
