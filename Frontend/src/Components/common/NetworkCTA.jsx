// components/NetworkCTA.jsx

import { ArrowRight } from "lucide-react";

const NetworkCTA = () => {
  return (
    <section className="relative w-full bg-[#0d0d0d] overflow-hidden py-40 px-6">
      {/* BACKGROUND GLOW */}
      <div className="absolute w-full h-full top-0 left-1/2 -translate-x-1/2 bg-[#5B21B6]/10 blur-[180px] rounded-full"></div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center my-25">
        {/* TAG */}
        <p className="text-[#6D28D9] tracking-[6px] text-sm font-bold mb-8">
          // NETWORK_ACCESS
        </p>

        {/* HEADING */}
        <h2 className="text-white text-5xl md:text-7xl font-black mb-10 leading-[0.9]">
          JOIN THE
          <br />
          NETWORK
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-20">
          Subscribe to receive early access to technical drops, firmware
          updates, beta hardware releases, and exclusive network events.
        </p>

        {/* INPUT AREA */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row border border-gray-700 overflow-hidden bg-white/5 backdrop-blur-sm">
          {/* INPUT */}
          <input
            type="email"
            placeholder="ENTER EMAIL ADDRESS"
            className="flex-1 bg-transparent px-8 py-7 text-white tracking-[3px] text-sm outline-none placeholder:text-gray-500"
          />

          {/* BUTTON */}
          <button className="group bg-[#5B21B6] hover:bg-[#6D28D9] transition-all duration-300 px-12 py-7 flex items-center justify-center gap-4 text-white tracking-[4px] text-sm font-bold">
            CONNECT
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </button>
        </div>

        {/* CHECKBOX OPTIONS */}
        <div className="flex flex-wrap justify-center gap-12 mt-14">
          {/* OPTION */}
          <label className="flex items-center gap-4 cursor-pointer group">
            <input
              type="checkbox"
              className="w-5 h-5 appearance-none w-6 h-6 rounded-sm border border-gray-600 bg-black checked:bg-[#6D28D9] checked:border-[#6D28D9] transition duration-300 cursor-pointer"
            />

            <span className="tracking-[4px] text-sm text-gray-300 group-hover:text-white transition">
              MARKETING
            </span>
          </label>

          {/* OPTION */}
          <label className="flex items-center gap-4 cursor-pointer group">
            <input
              type="checkbox"
              className="w-5 h-5 appearance-none w-6 h-6 rounded-sm border border-gray-600 bg-black checked:bg-[#6D28D9] checked:border-[#6D28D9] transition duration-300 cursor-pointer"
            />

            <span className="tracking-[4px] text-sm text-gray-300 group-hover:text-white transition">
              HARDWARE UPDATES
            </span>
          </label>

          {/* EXTRA OPTION */}
          <label className="flex items-center gap-4 cursor-pointer group">
            <input
              type="checkbox"
              className="w-5 h-5 appearance-none w-6 h-6 rounded-sm border border-gray-600 bg-black checked:bg-[#6D28D9] checked:border-[#6D28D9] transition duration-300 cursor-pointer"
            />

            <span className="tracking-[4px] text-sm text-gray-300 group-hover:text-white transition">
              BETA ACCESS
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default NetworkCTA;
