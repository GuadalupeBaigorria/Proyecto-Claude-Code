import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-linear-to-b from-slate-950 via-gray-900 to-black">
      <Hero />
      <Footer />
    </main>
  );
}
