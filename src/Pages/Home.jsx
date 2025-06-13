import { ThemeToggle } from "../Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle*/}
      <ThemeToggle />
      {/* Background Effects*/}
      <StarBackground />
      {/* Navbar*/}
      <Navbar />
      {/* Main Content*/}
      <main>
        <HeroSection />
      </main>
      {/* Footer*/}
    </div>
  );
};
