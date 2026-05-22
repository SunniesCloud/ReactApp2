import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <p className="text-lg text-gray-700 mb-6">
           Hello! Im Arewhon, a passionate Web Developer currently completing a Diploma program in Web Development at triOS College, Toronto. My background as a Digital Marketing Specialist, along with a Diploma in Supply Chain and Operations Management, has equipped me with a unique blend of technical and strategic skills. I thrive on problem solving and enjoy collaborating with teams to bring innovative ideas to life. Im excited to leverage my skills to create impactful web experiences that meet both business objectives and user needs.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Background</h2>
          <p className="text-gray-700 mb-4">
            I am about to finish my Diploma program in Web Development at triOS College, Toronto where I have learned a wide range of technologies including Javascript, Typescript, React, Next.js, Node.js, and more.
         </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Goals & Vision</h2>
          <p className="text-gray-700 mb-4">
            My goal is to become a proficient developer who can build intuitive and responsive web applications. Enhance my skills in frontend and backend development, and contribute to open source programs. I aspire to work in a collaborative environment where I can learn from experienced developers and contribute to meaningful projects that empower businesses and users across various industries.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Exploring new frontend technologies (React 19, Next.js 15)</li>
            <li>Building side projects and AI integrations</li>
            <li>Contributing to tech communities</li>
            <li>Visiting museums, photography, and nature walks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}