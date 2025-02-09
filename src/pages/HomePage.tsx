import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Featured from "@/components/ui/sections/Featured";
import MemberStories from "@/components/ui/sections/MemberStories";
import Footer from "@/components/layout/Footer";

const HomePage: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <Header />
      <Featured />
      <MemberStories />
      <Footer />
    </main>
  );
};

export default HomePage;
