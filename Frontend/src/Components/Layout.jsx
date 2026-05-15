import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;