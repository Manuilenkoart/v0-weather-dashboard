"use client";

import { Map } from "lucide-react";
import { useRouter } from "next/navigation";

import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex">
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Logo */}

            {/* Progress Stepper */}
            <div className="mb-16">
              <div className="flex items-center justify-between max-w-3xl">
                {/* Step 1 - Active */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#6366f1] border-2 border-[#6366f1] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#000000]"></div>
                  </div>
                  <span className="text-sm">Basic Details</span>
                </div>

                {/* Connector Line 1 */}
                <div className="flex-1 h-[1px] bg-[#272727] mx-4"></div>

                {/* Step 2 - Inactive */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-[#bdbdbd]"></div>
                  <span className="text-sm text-[#bdbdbd]">
                    Personal Settings
                  </span>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="max-w-2xl">
              {/* Heading */}
              <h1 className="text-xl italic mb-12 font-light">
                Tell us where and when your event will take place.
              </h1>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Location with Map Icon */}
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      className="w-full bg-[#272727] text-[#bdbdbd] px-4 py-4 rounded-lg border border-[#272727] focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#bdbdbd]"
                      placeholder="Location"
                    />
                  </div>
                  <button className="w-14 h-14 bg-[#272727] rounded-lg flex items-center justify-center hover:bg-[#1e1e1e] transition-colors">
                    <Map className="w-5 h-5 text-[#ffffff]" />
                  </button>
                </div>

                {/* Coordinate
                <div>
                  <input
                    type="text"
                    placeholder="Coordinate"
                    className="w-full bg-[#272727] text-[#bdbdbd] px-4 py-4 rounded-lg border border-[#272727] focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#bdbdbd]"
                  />
                </div> */}

                {/* Name of event */}
                <div>
                  <input
                    type="text"
                    placeholder="Name of event"
                    className="w-full bg-[#272727] text-[#bdbdbd] px-4 py-4 rounded-lg border border-[#272727] focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#bdbdbd]"
                  />
                </div>

                {/* Date and Time with Calendar Icon */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Date"
                    className="flex-1 bg-[#272727] text-[#bdbdbd] px-4 py-4 rounded-lg border border-[#272727] focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#bdbdbd]"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-12">
                <button
                  className="px-12 py-3 bg-[#272727] cursor-pointer text-[#ffffff] rounded-lg hover:bg-[#1e1e1e] transition-colors font-medium"
                  onClick={() => router.push("/")}
                >
                  Back
                </button>

                <Button
                  className="bg-[#9b87f5] cursor-pointer hover:bg-[#8b77e5] text-[#ffffff] rounded-lg px-16 text-lg font-medium h-auto"
                  onClick={() => router.push("/personal-settings")}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
          <div className="min-h-screen bg-background text-foreground"></div>
        </main>
      </div>
    </div>
  );
}
