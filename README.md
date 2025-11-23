# जग ग्वालियरी - Poetry Website

A beautiful, modern Hindi poetry website built with Next.js, TypeScript, Tailwind CSS, and React.

## 🎨 Features

- ✨ **Beautiful UI** - Modern design with gradient backgrounds and smooth animations
- 🔍 **Search Functionality** - Search poems by title, content, or author (supports Hindi)
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🎭 **Modal View** - Read full poems in a beautiful modal dialog
- 📖 **Devanagari Support** - Full support for Hindi text with Google Fonts

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Noto Sans Devanagari from Google Fonts
- **Deployment**: Optimized for GitHub Pages, Vercel, or any static host

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── poems/
│   │       └── route.ts         # Poems API endpoint
│   ├── layout.tsx               # Root layout with fonts & metadata
│   ├── page.tsx                 # Main page with search & grid
│   └── globals.css              # Global Tailwind styles
└── components/
    ├── HeroSection.tsx          # Hero banner with title
    ├── PoemCard.tsx             # Individual poem card with modal
    ├── SearchBar.tsx            # Search input component
    ├── ContactSection.tsx       # Contact information section
    └── Footer.tsx               # Footer with copyright
```

## 📝 Adding New Poems

To add more poems, edit the `/src/app/api/poems/route.ts` file:

```typescript
const poems = [
  {
    id: "unique-id",
    title: "कविता का शीर्षक",
    author: "लेखक का नाम",
    content: `कविता की सामग्री...
    एक पंक्ति प्रति लाइन...`,
  },
  // Add more poems here
];
```

## 🌐 GitHub Pages Deployment

### Setup

1. Create a GitHub repository named `jagdish-goklani`
2. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/jagdish-goklani.git
git branch -M main
git push -u origin main
```

3. In repository Settings → Pages:
   - Source: Deploy from branch
   - Branch: `main`, Folder: `/(root)`
   - Click Save

4. Your site will be live at: `https://YOUR_USERNAME.github.io/jagdish-goklani/`

### Environment Setup (for next.config.js if needed)

For GitHub Pages with basePath:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/jagdish-goklani",
  output: "export",
};

export default nextConfig;
```

## 🎨 Customization

### Colors

Edit Tailwind colors in `src/app/globals.css` or use Tailwind's built-in color palette. Currently using:
- Rose/Pink (`rose-*`)
- Purple (`purple-*`)
- Gray (`gray-*`)

### Fonts

Change the Devanagari font in `src/app/layout.tsx`:
```typescript
import { Noto_Sans_Devanagari } from "next/font/google";
```

### Contact Information

Update contact details in `src/components/ContactSection.tsx`

## 📄 License

MIT License - feel free to use and modify for your own projects.

## 🤝 Support

For issues or questions, please create an issue in the repository.

---

**Made with ❤️ for Hindi Poetry**
