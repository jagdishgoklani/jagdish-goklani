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
        const response = await fetch("/api/poems");
        const data = await response.json();
        setPoems(data);
        setFilteredPoems(data);
      } catch (error) {
        console.error("Failed to load poems:", error);
        const fallbackPoems: Poem[] = [
          {
            id: "pariyon-ka-shehzada",
            title: "परियों का है यह शहजादा",
            author: "जग ग्वालियरी",
            content: `परियों का है यह शहजादा, परी लोक से आया है।
परी लोक से आकर इसने, सबका मन हर्षाया है।।

पीयु हर्षिका का भाई यह, माँ की आँखों का तारा।
राजदुलारा है पापा का, कितना सुंदर अति प्यारा।।
ताई कहती नभ से उतरा, ताऊ कहे सितारा है।
शुभ आशीष दिया दादी ने, बही प्रेम की धारा है।।

भक्ति भाव से दादाजी ने, मंगल गीत सुनाया है।
परियों का है यह शहजादा, परी लोक से आया है।

मामू मासी मौसा प्यारे, कहते बड़ा सयाना है।
खुश होकर के झूमे नानी, साथ थिरकते नाना है।।
ढोल बजें घर के आँगन में, गूँजे हँसी तराना है।
रौनक छाई कोने-कोने, पावन दिवस सुहाना है।।

राजा बेटा प्यारा आया, मन मधुवन मुसकाया है।
परियों का है यह शहजादा, परी लोक से आया है।

बहिनों ने अपने आँगन में, सुख का दीप जलाया है।
उसके आने से घर भर में, शुभ उजियारा छाया है।।
सपनों में देखा जो कुछ भी, अवितथ बनकर आया है
खुशियों की सौगात लिए यह, सबके मन को भाया है।

कान्हा बनकर घर में आया, देखो रास रचाया है।।
परियों का है यह शहजादा, परी लोक से आया है।

मौलिक और स्वरचित
जगदीश गोकलानी — जग ग्वालियरी`,
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
