import { useState } from "react";

const initialFormData = {
  name: "",
  phone: "",
  location: "",
  message: "",
};

export default function ConsultationForm() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello, I want to request an interior design consultation.

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Requirement: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/918796359302?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormData(initialFormData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="consultation-name">
            Your name
          </label>
          <input
            id="consultation-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="consultation-phone">
            Phone number
          </label>
          <input
            id="consultation-phone"
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="consultation-location">
            Project location
          </label>
          <input
            id="consultation-location"
            type="text"
            name="location"
            autoComplete="address-level2"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="consultation-message">
            Tell us about your space
          </label>
          <textarea
            id="consultation-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <p className="form-hint">
          Submitting this form opens your request securely in WhatsApp.
        </p>
        <button type="submit" className="btn btn-gold">
          Request Consultation
        </button>
      </div>
    </form>
  );
}
