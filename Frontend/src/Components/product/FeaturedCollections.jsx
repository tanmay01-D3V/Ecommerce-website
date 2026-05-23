import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    id: "01",
    title: "TECH\nPERIPHERALS",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2070&auto=format&fit=crop",
  },

  {
    id: "02",
    title: "URBAN\nARMOR",
    image:
        "https://i.pinimg.com/736x/0a/08/12/0a0812f5d490694ce305346b9b6c15d4.jpg",
},

  {
    id: "03",
    title: "MODULAR\nSTATIONS",
    image:
        "https://i.pinimg.com/1200x/b7/c9/d8/b7c9d86423dcec48e5daccd0eee7b278.jpg",
},
];

const FeaturedCollections = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-24">

      {/* TOP HEADER */}
      <div className="flex justify-between items-center px-20 mb-16">

        <div>
          <p className="text-[#5B21B6] tracking-[5px] text-sm font-bold mb-5">
            // ARCHIVE_SYSTEM
          </p>

          <h2 className="text-4xl font-light text-[#1a1a1a]">
            FEATURED COLLECTIONS
          </h2>
        </div>

        <button className="text-lg tracking-[3px] border-b border-black pb-2 hover:text-[#5B21B6] transition">
          VIEW ALL CATEGORIES
        </button>
      </div>

      {/* COLLECTION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3">

        {collections.map((item) => (
          <div
            key={item.id}
            className="relative h-[800px] overflow-hidden group cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition"></div>

            {/* CONTENT */}
            <div className="absolute bottom-14 left-14 text-white z-20">

              <p className="tracking-[3px] text-sm font-bold mb-6">
                CATEGORY {item.id}
              </p>

              <h2 className="text-5xl font-light leading-[1] whitespace-pre-line">
                {item.title}
              </h2>
            </div>

            {/* ARROW */}
            <div className="absolute bottom-14 right-14 z-20">
              <ArrowUpRight
                size={50}
                className="text-white group-hover:translate-x-2 group-hover:-translate-y-2 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;