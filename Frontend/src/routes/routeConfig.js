import { ROUTES } from "../constants/routes";

export const routeConfig = [
  { path: ROUTES.SHOP, label: "SHOP" },
  { path: `${ROUTES.HOME}#collections`, label: "COLLECTIONS" },
  { path: `${ROUTES.HOME}#new-arrivals`, label: "NEW ARRIVALS" },
  { path: `${ROUTES.HOME}#network`, label: "NETWORK" },
];
