"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PoemCard from "@/components/PoemCard";
import SearchBar from "@/components/SearchBar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
}

export default function Home() {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [filteredPoems, setFilteredPoems] = useState<Poem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadPoems = async () => {
    try {
      const response = await fetch("api/poems");
      const data = await response.json();
      setPoems(data);
      setFilteredPoems(data);
    } catch (error) {
      console.error("Failed to load poems:", error);
      const fallbackPoems: Poem[] = [
        {
          id: "banvari-tujhko-kahuun",
          title: "बनवारी तुझको कहूँ",
          author: "जग ग्वालियरी",
          content:
            "बनवारी तुझको कहूँ, कृष्ण कहूँ घनश्याम।\nजितना सुन्दर रूप है, उतने सुन्दर नाम।।\n\nउतने सुन्दर नाम, भक्ति से मन भर देते।\nतेरे खेल विचित्र, मोह सबको ही लेते।।।\n\nकहते कवि जगराज, कृष्ण की लीला न्यारी।\nरचता स्वांग अनेक, मदन मोहन बनवारी।।\n\nजगदीश गोकलानी — जग ग्वालियरी",
        },
      ];
      setPoems(fallbackPoems);
      setFilteredPoems(fallbackPoems);
    } finally {
      setLoading(false);
    }
  };

  loadPoems();
}, []);


  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredPoems(poems);
      return;
    }

    const filtered = poems.filter((poem) =>
      poem.title.toLowerCase().includes(term.toLowerCase()) ||
      poem.content.toLowerCase().includes(term.toLowerCase()) ||
      poem.author.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPoems(filtered);
  };

  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <SearchBar onSearch={handleSearch} />
        
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">लोड कर रहे हैं...</p>
          </div>
        ) : filteredPoems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredPoems.map((poem) => (
              <PoemCard key={poem.id} poem={poem} searchTerm={searchTerm} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">कोई कविता नहीं मिली।</p>
          </div>
        )}
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}
