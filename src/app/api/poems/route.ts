import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Poem {
  id: string;
  title: string;
  author: string;
  content: string;
}

let cachedPoems: Poem[] | null = null;

function loadPoemsFromFile(): Poem[] {
  try {
    // Try to load from public/poems-data.json
    const filePath = path.join(process.cwd(), "public/poems-data.json");
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const loadedPoems = JSON.parse(fileContent);
      if (Array.isArray(loadedPoems)) {
        cachedPoems = loadedPoems;
        return loadedPoems;
      }
    }
  } catch (error) {
    console.log("Could not load from poems-data.json, using fallback");
  }

  // Fallback poem
  return [
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
}

export async function GET() {
  const poems = cachedPoems || loadPoemsFromFile();
  return NextResponse.json(poems);
}
