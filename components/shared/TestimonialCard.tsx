// components/shared/TestimonialCard.tsx
"use client";
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
}) => {
  return (
    <blockquote className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <p className="text-gray-300 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img
          src={avatar}
          alt={`${author} avatar`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <cite className="text-teal-400 font-semibold">{author}</cite>
          <span className="block text-gray-400 text-sm">{role}</span>
        </div>
      </div>
    </blockquote>
  );
};

export default TestimonialCard;
