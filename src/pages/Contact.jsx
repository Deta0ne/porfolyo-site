// src/pages/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Form verilerini işleme veya back-end'e gönderme
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-header">İletişim</h1>
        <label htmlFor="name">Adınız</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Adınız"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">E-posta Adresiniz</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-posta adresiniz"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Mesajınız</label>
        <textarea
          id="message"
          name="message"
          placeholder="Mesajınız"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Contact;
