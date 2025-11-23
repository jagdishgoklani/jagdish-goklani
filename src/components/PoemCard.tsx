"use client";

import { useState } from "react";

interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
}

interface PoemCardProps {
  poem: Poem;
  searchTerm?: string;
}

// Helper function to highlight search terms
const highlightText = (text: string, searchTerm?: string) => {
  if (!searchTerm || !searchTerm.trim()) {
    return text;
  }

  const parts = text.split(new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
  
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <span key={index} className="font-bold bg-yellow-200 text-gray-900 px-0.5 rounded">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

export default function PoemCard({ poem, searchTerm }: PoemCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const excerpt = poem.content
    .split("\n\n")
    .slice(0, 2)
    .join("\n\n")
    .substring(0, 200);

  return (
    <>
      <div className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-amber-100">
        <div className="h-40 bg-gradient-to-r from-amber-600 via-indigo-600 to-slate-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-20 rounded-full -translate-x-20 -translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-amber-900 mb-2 line-clamp-2">
            {highlightText(poem.title, searchTerm)}
          </h3>
          <p className="text-sm text-indigo-700 font-semibold mb-4">
            लेखक: {poem.author}
          </p>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 mb-6 whitespace-pre-wrap">
            {highlightText(excerpt, searchTerm)}...
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full px-4 py-3 bg-gradient-to-r from-amber-700 to-indigo-700 text-white rounded-lg font-semibold hover:from-amber-800 hover:to-indigo-800 transition-all transform hover:scale-105"
          >
            पूर्ण कविता पढ़ें
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-amber-700 to-indigo-700 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{poem.title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <p className="text-sm text-indigo-700 font-semibold mb-6">
                लेखक: {poem.author}
              </p>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap font-light text-lg">
                {highlightText(poem.content, searchTerm)}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
