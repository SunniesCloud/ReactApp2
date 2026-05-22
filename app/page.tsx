import React from 'react';
import Link from 'next/link';
import Button from '@/app/components/Button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Arewhon Portfolio</h1>
          <p className="text-xl text-gray-600 mb-6">Full-Stack Developer & UI/UX Enthusiast</p>
          <div className="flex justify-center gap-4 mb-12">
            <Link href="/projects"><Button variant="primary">View My Work</Button></Link>
            <Link href="/contact"><Button variant="outline">Get In Touch</Button></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
               <p className="text-gray-600">Writing maintainable, scalable, and well‑documented code with TypeScript.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-xl font-semibold mb-2">React & Next.js</h3>
              <p className="text-gray-600">Building modern web applications with React 19, Next.js App Router, and server components.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Creating responsive, accessible, and beautiful interfaces with Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}