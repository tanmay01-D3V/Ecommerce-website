import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

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
