import React, {useState, useEffect, useContext} from "react";
import "./ContactFormModal.scss";
import StyleContext from "../../contexts/StyleContext";
import emailjs from "@emailjs/browser";

export default function ContactFormModal({isOpen, onClose}) {
  const {isDark} = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  // Validate form
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFormValid =
      formData.name.trim().length > 0 &&
      emailRegex.test(formData.email.trim()) &&
      formData.message.trim().length > 10;
    setIsValid(isFormValid);
  }, [formData]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type) => {
    setNotification({message, type});
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      // Get EmailJS credentials from environment variables
      const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
      const EMAILJS_TEMPLATE_ID =
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
      const EMAILJS_AUTO_REPLY_TEMPLATE_ID =
        process.env.REACT_APP_EMAILJS_AUTO_REPLY_TEMPLATE_ID || "";

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
        showNotification(
          "EmailJS not configured. Please restart the server.",
          "error"
        );
        setIsSubmitting(false);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
        to_name: "MD Shahidur Rahman",
        user_email: formData.email // For auto-reply template
      };

      // Send main email to you
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      // Send auto-reply to the sender if template is configured
      if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        try {
          const autoReplyParams = {
            name: formData.name,
            email: formData.email
          };

          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTO_REPLY_TEMPLATE_ID,
            autoReplyParams
          );
        } catch (autoReplyError) {
          // Don't show error to user since main email was sent
        }
      }

      showNotification("Message sent successfully!", "success");
      setFormData({name: "", email: "", message: ""});
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      showNotification("Failed to send message. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = e => {
    if (e.target.className.includes("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isDark ? "dark-mode" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Contact Me</h2>
        <p className="modal-subtitle">
          Fill out the form below and I'll get back to you soon!
        </p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message (min 10 characters)"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={!isValid || isSubmitting ? "btn-disabled" : ""}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
}
