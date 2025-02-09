import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Featured from "@/components/ui/sections/Featured";
import MemberStories from "@/components/ui/sections/MemberStories";

const HomePage: React.FC = () => {
  return (
    <main className="container font-default">
      <Navbar />
      <Header />
      <Featured />
      <MemberStories />
      <Footer />
    </main>
  );
};

export default HomePage;
