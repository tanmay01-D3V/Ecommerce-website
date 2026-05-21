import Navbar from "../Components/Navbar";
import NetworkCTA from "../Components/Home/NetworkCTA";
import Footer from "../Components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main>
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default MainLayout;