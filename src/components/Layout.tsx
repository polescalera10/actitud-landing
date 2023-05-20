import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="bg-gradient-to-b from-green-50 to-green-100 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Layout;
