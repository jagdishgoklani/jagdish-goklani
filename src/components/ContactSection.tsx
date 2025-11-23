export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-amber-50 to-indigo-50 border-t-2 border-amber-100"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">
          संपर्क करें
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-amber-100">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-600 to-indigo-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">नाम</h3>
                <p className="text-gray-600 text-lg">Jagdish Goklani</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-600 to-indigo-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">ईमेल</h3>
                <a
                  href="mailto:jagdish.shamangoklani@gmail.com"
                  className="text-amber-700 hover:text-amber-800 font-semibold text-lg transition"
                >
                  jagdish.shamangoklani@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-600 to-indigo-600 rounded-full flex items-center justify-center">
                {/* Facebook icon (simple 'f') */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.92v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.9h-2.3V22c4.78-.79 8.44-4.93 8.44-9.93z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">फेसबुक</h3>
                <a
                  href="https://www.facebook.com/jagdish.goklani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-800 font-semibold text-lg transition"
                >
                  facebook.com/jagdish.goklani
                </a>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-amber-100">
              <p className="text-gray-600 text-center italic">
                यदि आप कविताओं के बारे में पूछना चाहते हैं, कृपया उपरोक्त ईमेल या फेसबुक पर संपर्क करें।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
