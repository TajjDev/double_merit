import React, { useState } from "react";
import "./contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const [isSending, setIsSending] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        setIsSending(true);
    
        try {
            const response = await fetch(
                "https://double-merit-backend-1.onrender.com/api/contact",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            alert("Your message has been sent successfully!");
    
            setFormData({
              fullname: "",
              email: "",
              phone: "",
              message: "",
            });
          } else {
            alert(data.message || "Failed to send message.");
          }
        } catch (error) {
          console.error(error);
          alert("Unable to send message. Please try again.");
        } finally {
          setIsSending(false);
        }
      };
    return (
        <div id='cnt'>
            <p id='cntP'>Contact Us</p>
            <section className="contact-section">
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h1>Want to Reach Us?</h1>

          <p>
            Get in touch with us using the enquiry form or contact details below.
          </p>
        </div>

        {/* CONTENT */}
        <div className="contact-content">

          {/* LEFT - FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>

            {/* FIRST NAME */}
            <div className="form-group">
              <label htmlFor="fullname">
                Full Name <span>*</span>
              </label>

              <input
                id="fullame"
                name="Nafmulle"
                type="text"
                placeholder="E.g. John Adams"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span>*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="E.g. john@doe.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="E.g. +1 3004005000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group message-group">

              <div className="message-header">
                <label htmlFor="message">
                  Message
                </label>

                <span>
                  {formData.message.length} / 180
                </span>
              </div>

              <textarea
                id="message"
                name="message"
                placeholder="Enter your message..."
                value={formData.message}
                onChange={handleChange}
                maxLength={180}
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="send-message-btn"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

          </form>


          {/* RIGHT - CONTACT DETAILS */}
          <div className="contact-info">

            {/* LOCATION */}
            <div className="contact-info-item">

              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <h3>Locate Us</h3>

                <p>
                7, Ishaga Road,
                  <br />
                  Mabo junction Ojuelegba,
                  <br />
                  Surulere Lagos State, Nigeria.
                </p>
              </div>

            </div>


            {/* PHONE */}
            <div className="contact-info-item">

              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>

              <div>
                <h3>Call Us</h3>

                <p>
                  +234 7045 071 547
                </p>
              </div>

            </div>


            {/* EMAIL */}
            <div className="contact-info-item">

              <div className="contact-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <h3>Send Us an Email</h3>

                <p>
                 doublemerit1@gmail.com
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
        </div>

    )
}

export default Contact
