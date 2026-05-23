// components/Footer.jsx

import { Globe, Share2, Send, Monitor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f3f3f3] border-t border-black overflow-hidden">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-10 md:px-20 py-24">
        {/* BRAND */}
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-7 h-7 bg-[#5B21B6]"></div>

            <h1 className="text-5xl font-black text-[#1a1a1a]">VYBE</h1>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-xl leading-relaxed max-w-md mb-12">
            Building the next generation of high-performance peripherals and
            technical apparel for the modern digital architect.
          </p>

          {/* SOCIALS */}
          <div className="flex flex-wrap gap-4">
            {[
              <Share2 size={20} />,
              <Globe size={20} />,
              <Send size={20} />,
              <Monitor size={20} />,
            ].map((icon, index) => (
              <button
                key={index}
                className="w-16 h-16 border border-black flex items-center justify-center hover:bg-black hover:text-white transition duration-300"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* DIRECTORY */}
        <div>
          <p className="text-[#5B21B6] tracking-[5px] text-sm font-bold mb-10">
            // DIRECTORY
          </p>

          <div className="flex flex-col gap-5">
            {["SHOP ALL", "NEW RELEASES", "COLLABORATIONS", "THE ARCHIVE"].map(
              (item, index) => (
                <a
                  key={index}
                  href="/"
                  className="text-2xl font-normal tracking-wide hover:text-[#5B21B6] transition"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <p className="text-[#5B21B6] tracking-[5px] text-sm font-bold mb-10">
            // SUPPORT
          </p>

          <div className="flex flex-col gap-5">
            {[
              "SHIPPING LOG",
              "RETURNS PORT",
              "TECHNICAL FAQ",
              "CONTACT DEV",
            ].map((item, index) => (
              <a
                key={index}
                href="/"
                className="text-2xl font-normal tracking-wide hover:text-[#5B21B6] transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* STATUS */}
        <div>
          <p className="text-[#5B21B6] tracking-[5px] text-sm font-bold mb-10">
            // STATUS
          </p>

          {/* STATUS BOX */}
          <div className="border-2 border-black p-8 bg-black/5 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>

              <h3 className="text-sm tracking-[3px] font-bold">
                GLOBAL SERVER ONLINE
              </h3>
            </div>

            <p className="text-gray-500 tracking-[3px] text-sm">
              V.2.04.18 BUILD SUCCESSFUL
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="px-10 md:px-20">
        <div className="border-t border-black"></div>
      </div>

      {/* BOTTOM */}
      <div className="px-10 md:px-20 py-10 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* COPYRIGHT */}
        <p className="tracking-[4px] text-sm text-gray-500 text-center lg:text-left">
          © 2026 VYBE INDUSTRIES. ALL SPECIFICATIONS RESERVED.
        </p>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-10">
          {["PRIVACY_PROTOCOL", "TERMS_OF_USE", "COOKIES_POLICY"].map(
            (item, index) => (
              <a
                key={index}
                href="/"
                className="tracking-[4px] text-sm text-gray-500 hover:text-[#5B21B6] transition"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
