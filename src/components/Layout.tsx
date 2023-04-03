import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>
        <div className="bg-gradient-to-b from-green-50 to-green-100">
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Layout;
