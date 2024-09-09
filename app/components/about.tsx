// pages/about.tsx
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-10" id='about'>
      <h1 className="text-4xl font-bold text-center text-gray-800">About Us</h1>
      <p className="mt-4 text-center text-gray-600 text-lg">
        We are passionate about delivering high-quality products to our customers.
      </p>

      {/* Mission Section */}
      <section className="mt-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image
              src={require("../../public/about.jpeg")} // Replace with your image
              alt="About us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to provide the best shopping experience, with high-quality products and exceptional customer service. We are committed to creating a sustainable and inclusive brand for everyone.
            </p>
            <p className="mt-2 text-gray-600">
              We believe that everyone deserves the best, and we strive to make that happen with every product we offer.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src={require("../../public/memeber1.jpeg")} // Replace with your image
              alt="Team Member 1"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Muhammad Ahmed</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div className="text-center">
            <Image
              src={require("../../public/member2.jpeg")} // Replace with your image
              alt="Team Member 2"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Abdul rehman</h3>
            <p className="text-gray-500">Database Manger</p>
          </div>
          <div className="text-center">
            <Image
              src={require("../../public/member3.jpeg")} // Replace with your image
              alt="Team Member 3"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Suleman</h3>
            <p className="text-gray-500">Lead Product Management</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Optional) */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800">What Our Customers Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-gray-600 italic">
              Amazing products and fantastic customer service. Highly recommend this store!
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- Sarah J.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-gray-600 italic">
              High-quality products at great prices. I love shopping here!
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- Mark R.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <p className="text-gray-600 italic">
              Exceptional customer service and fast delivery. Will be back for more&aquot;
            </p>
            <p className="mt-4 text-gray-800 font-semibold">- Emma W.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
