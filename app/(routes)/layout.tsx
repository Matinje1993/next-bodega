import BackToTop from "@/components/BackToTop";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <NavBar />
        <div className="flex flex-col max-w-[1258px] mx-auto mt-5 mb-10 min-h-[500px] lg:mt-[20px]">
          {children}
        </div>
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default layout;