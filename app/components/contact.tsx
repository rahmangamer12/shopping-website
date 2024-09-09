"use client"
// pages/contact.tsx
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., send data to an API)
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="container mx-auto px-6 py-10" id='contact'>
      <h1 className="text-4xl font-bold text-center text-gray-800">Contact Us</h1>
      <p className="mt-4 text-center text-gray-600 text-lg">We’d love to hear from you! Please fill out the form below or use our contact information to get in touch.</p>

      {/* Contact Information */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Our Address</h2>
          <p className="mt-2 text-gray-600">123 Fashion St., New York, NY 10001</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Call Us</h2>
          <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Email Us</h2>
          <p className="mt-2 text-gray-600">support@yourshop.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-800">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-500 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
