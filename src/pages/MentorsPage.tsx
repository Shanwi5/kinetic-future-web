// components/Mentors.jsx
import React from 'react';

const mentors = [
  {
    name: 'Dr.Anitha M L',
    role: 'Mentor',
    image: '/images/john.jpg', // Make sure this path is correct
  },
  {
    name: 'Dr.Mahesh Kaulti',
    role: 'Mentor',
    image: '/images/jane.jpg',
  },
];

const Mentors = () => {
  return (
    <section className="text-center px-4">
      <h2 className="text-3xl font-bold mb-8">Our Mentors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{mentor.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{mentor.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
