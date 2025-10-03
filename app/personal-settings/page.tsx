"use client";

import { useState } from "react";
import { Check, Thermometer, Droplets, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { Header } from "@/components/ui/header";
import SettingsCard from "@/components/ui/settingsCard";

export default function PersonalSettings() {
  const [hotValue, setHotValue] = useState([42.5]);
  const [wetValue, setWetValue] = useState([0.55]);
  const [coldValue, setColdValue] = useState([-35.0]);
  const [windyValue, setWindyValue] = useState([10]);
  const router = useRouter();

  const cards = [
    {
      title: "Hot",
      label: "Temperature",
      unit: "°C",
      labelValue: hotValue,
      onValueChange: setHotValue,
      icon: <Thermometer className="w-6 h-6 text-[#757575]" />,
      min: 25,
      max: 60,
      step: 0.1,
    },
    {
      title: "Wet",
      label: "E.g.",
      unit: "mm",
      labelValue: wetValue,
      onValueChange: setWetValue,
      icon: <Droplets className="w-6 h-6 text-[#757575]" />,
      min: 0.0,
      max: 1.1,
      step: 0.01,
    },
    {
      title: "Cold",
      label: "Temperature",
      unit: "°C",
      labelValue: coldValue,
      onValueChange: setColdValue,
      icon: <Thermometer className="w-6 h-6 text-[#757575]" />,
      min: -60,
      max: -10,
      step: 0.1,
    },
    {
      title: "Windy",
      label: "E.g.",
      unit: "m/c",
      labelValue: windyValue,
      onValueChange: setWindyValue,
      icon: <Wind className="w-6 h-6 text-[#757575]" />,
      min: 0.0,
      max: 60,
      step: 1,
    },
  ];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="flex">
        <main className="flex-1 p-8">
          {/* Progress Stepper */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center justify-between max-w-3xl">
              {/* Step 1 - Completed */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6366f1] border-2 border-[#6366f1] flex items-center justify-center">
                  <Check className="w-2 h-2" />
                </div>
                <span className="text-sm">Basic Details</span>
              </div>

              {/* Connector Line 1 */}
              <div className="flex-1 h-[1px] bg-[#272727] mx-4"></div>

              {/* Step 2 - Active */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#6366f1] border-2 border-[#6366f1] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#000000]"></div>
                </div>
                <span className="text-sm text-[#bdbdbd]">
                  Personal Settings
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-white/90 italic text-lg leading-relaxed">
              Set your comfort limits. Choose when it feels Very Hot, Very Cold,
              Very Wet, or Very Windy for you — we’ll use these to calculate
              event risks.
            </p>
          </div>

          {/* Weather Cards Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cards.map((c) => (
              <SettingsCard key={c.title} {...c} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="max-w-6xl mx-auto flex gap-4">
            <button
              className="px-12 py-3 bg-[#272727] cursor-pointer text-[#ffffff] rounded-lg hover:bg-[#1e1e1e] transition-colors font-medium"
              onClick={() => router.back()}
            >
              Back
            </button>

            <Button
              className="bg-[#9b87f5] cursor-pointer hover:bg-[#8b77e5] text-[#ffffff] rounded-lg px-16 text-lg font-medium h-auto"
              onClick={() => router.push("/dashboard")}
            >
              Continue
            </Button>
          </div>

          <div className="min-h-screen bg-background text-foreground"></div>
        </main>
      </div>
    </div>
  );
}
