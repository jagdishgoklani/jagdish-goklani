export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 border-t-4 border-amber-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              जग ग्वालियरी
            </h3>
            <p className="text-gray-400">मौलिक और स्वरचित कविताएँ</p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-2">© {currentYear} जग ग्वालियरी</p>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:jagdish.shamangoklani@gmail.com"
              className="text-gray-400 hover:text-amber-400 transition"
              title="Email"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/jagdish.goklani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition"
              title="Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.9h-2.3V22c4.78-.79 8.44-4.93 8.44-9.93z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
