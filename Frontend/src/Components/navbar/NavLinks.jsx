import { Link } from "react-router-dom";
import { routeConfig } from "../../routes/routeConfig";

const NavLinks = ({ className = "", itemClassName = "" }) => {
  return (
    <nav className={className}>
      {routeConfig.map((item) => {
        if (item.path.includes("#")) {
          return (
            <a key={item.label} href={item.path} className={itemClassName}>
              {item.label}
            </a>
          );
        }

        return (
          <Link key={item.label} to={item.path} className={itemClassName}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
