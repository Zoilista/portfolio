import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlagshipProject from "@/components/FlagshipProject";
import Approach from "@/components/Approach";
import EngineeringStack from "@/components/EngineeringStack";
import SelectedWork from "@/components/SelectedWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col selection:bg-white selection:text-black">
      <Navbar/>
      <Hero/>
      <FlagshipProject/>
      <Approach/>
      <EngineeringStack/>
      <SelectedWork/>
      <Contact/>
    </div>
  );
}
