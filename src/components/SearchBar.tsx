"use client";

import { useState, useCallback } from "react";

export default function SearchBar({ onSearch }: { onSearch: (term: string) => void }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      onSearch(value);
    },
    [onSearch]
  );

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12" id="poems">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="कविता खोजें (शीर्षक या शब्द लिखें)…"
          className="w-full px-6 py-4 pl-12 pr-12 text-lg rounded-full border-2 border-amber-200 focus:border-amber-700 focus:outline-none shadow-lg bg-white"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
