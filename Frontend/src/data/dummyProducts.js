import jacket from "../assets/images/jacket.jpeg";
import flux from "../assets/images/flux.jpeg";
import coat from "../assets/images/coat.jpeg";
import vest from "../assets/images/vest.jpeg";
import hoodie from "../assets/images/hoddie.jpeg";

const products = [
  {
    id: 1,
    image: jacket,
    tag: "NEW SPEC",
    type: "TYPE: 01-HARDSHELL",
    name: "VORTEX SHELL JKT",
    description: "Matte Black / Gore-Tex Pro",
    price: "$540.00",
  },

  {
    id: 2,
    image: flux,
    tag: "-20% ARCHIVE",
    type: "TYPE: 04-INSULATOR",
    name: "FLUX MID-LAYER",
    description: "Charcoal / PrimaLoft",
    price: "$224.00",
    oldPrice: "$280.00",
  },

  {
    id: 3,
    image: coat,
    type: "TYPE: 02-PARKA",
    name: "OBSIDIAN LONG COAT",
    description: "Deep Navy / 3-Layer Laminate",
    price: "$715.00",
  },

  {
    id: 4,
    image: vest,
    type: "TYPE: 08-MODULAR",
    name: "CARGO VEST MK II",
    description: "Slate / Ripstop Nylon",
    price: "$340.00",
  },

  {
    id: 5,
    image: hoodie,
    type: "TYPE: 05-SOFTSHELL",
    name: "KINETIC HOODIE",
    description: "Ghost Grey / Stretch-Woven",
    price: "$195.00",
  },
];

export default products;
