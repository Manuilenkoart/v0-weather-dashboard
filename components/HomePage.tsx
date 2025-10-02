import { Button } from "@/components/ui/button";

import Link from "next/link";
import { Header } from "./ui/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex">
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center px-8 pt-16 pb-32">
            <div className="inline-block bg-[#272727]/50 border border-[#767373]/20 rounded-full px-6 py-2 mb-8">
              <span className="text-[#9b87f5] text-sm">
                Empowered by NASA data
              </span>
            </div>

            <h1 className="text-center mb-6 max-w-4xl">
              <span className="block text-[#ffffff] text-6xl font-bold leading-tight">
                Plan Events with
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7c6fd6] text-6xl font-bold leading-tight">
                Weather master
              </span>
            </h1>

            <p className=" text-center text-lg max-w-2xl mb-8 leading-relaxed">
              Get comprehensive weather risk analysis for your outdoor events.
              Make informed decisions with real-time weather data, alternative
              date suggestions, and detailed risk assessments.
            </p>

            <Link href={"/event"}>
              <Button className="bg-[#9b87f5] cursor-pointer hover:bg-[#8b77e5] text-[#ffffff] rounded-lg px-16 text-lg font-medium h-auto">
                Start
              </Button>
            </Link>
          </section>

          <div className="min-h-screen bg-background text-foreground"></div>
        </main>
      </div>
    </div>
  );
}
