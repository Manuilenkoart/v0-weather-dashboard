"use client";

import { useState } from "react";
import { Check, Thermometer, Droplets, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@radix-ui/react-slider";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";

import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";

// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Slider } from "@/components/ui/slider";
import { Header } from "@/components/ui/header";

export default function PersonalSettings() {
  const [hotUnit, setHotUnit] = useState("celsius");
  const [hotValue, setHotValue] = useState([42.5]);
  const [hotInput, setHotInput] = useState("");

  const [wetUnit, setWetUnit] = useState("mm");
  const [wetValue, setWetValue] = useState([0.55]);

  const [coldUnit, setColdUnit] = useState("celsius");
  const [coldValue, setColdValue] = useState([-35.0]);

  const [windyUnit, setWindyUnit] = useState("mc");
  const [windyValue, setWindyValue] = useState([0.75]);
  const router = useRouter();

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
            {/* Very Hot Card */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Thermometer className="w-6 h-6 text-[#757575]" />
                <h3 className="text-xl font-medium">Very Hot</h3>
              </div>

              <RadioGroup
                value={hotUnit}
                onValueChange={setHotUnit}
                className="flex gap-4 mb-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="fahrenheit"
                    id="hot-f"
                    className="border-[#757575]"
                  />
                  <Label htmlFor="hot-f" className="text-sm cursor-pointer">
                    °F
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="celsius"
                    id="hot-c"
                    className="border-[#1976d2]"
                  />
                  <Label htmlFor="hot-c" className="text-sm cursor-pointer">
                    °C
                  </Label>
                </div>
              </RadioGroup>

              <div className="mb-4">
                <Label className="text-sm text-[#757575] mb-2 block">
                  Temperature
                </Label>
                <Input
                  type="text"
                  value={hotInput}
                  onChange={(e) => setHotInput(e.target.value)}
                  className="bg-[#151515] border-[#1976d2] text-white h-12"
                />
              </div>

              <div className="space-y-2">
                <Slider
                  value={hotValue}
                  onValueChange={setHotValue}
                  min={25}
                  max={60}
                  step={0.1}
                  // className="[&_[role=slider]]:bg-[#1976d2] [&_[role=slider]]:border-[#1976d2]"
                />
                <div className="flex justify-between text-xs text-[#757575]">
                  <span>+25.0°C</span>
                  <span>+60.0°C</span>
                </div>
              </div>
            </div>

            {/* Very Wet Card */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-6 h-6 text-[#757575]" />
                <h3 className="text-xl font-medium">Very Wet</h3>
              </div>

              <RadioGroup
                value={wetUnit}
                onValueChange={setWetUnit}
                className="flex gap-4 mb-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="in"
                    id="wet-in"
                    className="border-[#757575]"
                  />
                  <Label htmlFor="wet-in" className="text-sm cursor-pointer">
                    in
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="mm"
                    id="wet-mm"
                    className="border-[#1976d2]"
                  />
                  <Label htmlFor="wet-mm" className="text-sm cursor-pointer">
                    MM
                  </Label>
                </div>
              </RadioGroup>

              <div className="mb-4">
                <div className="h-12 flex items-center text-[#757575]">
                  E.g. 0.19
                </div>
              </div>

              <div className="space-y-2">
                <Slider
                  value={wetValue}
                  onValueChange={setWetValue}
                  min={0}
                  max={1.1}
                  step={0.01}
                  className="[&_[role=slider]]:bg-[#1976d2] [&_[role=slider]]:border-[#1976d2]"
                />
                <div className="flex justify-between text-xs text-[#757575]">
                  <span>0.00 mm</span>
                  <span>1.10 mm</span>
                </div>
              </div>
            </div>

            {/* Very Cold Card */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Thermometer className="w-6 h-6 text-[#757575]" />
                <h3 className="text-xl font-medium">Very Cold</h3>
              </div>

              <RadioGroup
                value={coldUnit}
                onValueChange={setColdUnit}
                className="flex gap-4 mb-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="fahrenheit"
                    id="cold-f"
                    className="border-[#757575]"
                  />
                  <Label htmlFor="cold-f" className="text-sm cursor-pointer">
                    °F
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="celsius"
                    id="cold-c"
                    className="border-[#1976d2]"
                  />
                  <Label htmlFor="cold-c" className="text-sm cursor-pointer">
                    °C
                  </Label>
                </div>
              </RadioGroup>

              <div className="mb-4">
                <div className="h-12 flex items-center text-[#757575]">
                  E.g. -35.5
                </div>
              </div>

              <div className="space-y-2">
                <Slider
                  value={coldValue}
                  onValueChange={setColdValue}
                  min={-60}
                  max={-10}
                  step={0.1}
                  className="[&_[role=slider]]:bg-[#1976d2] [&_[role=slider]]:border-[#1976d2]"
                />
                <div className="flex justify-between text-xs text-[#757575]">
                  <span>-10.0°C</span>
                  <span>-60.0°C</span>
                </div>
              </div>
            </div>

            {/* Very Windy Card */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <Wind className="w-6 h-6 text-[#757575]" />
                <h3 className="text-xl font-medium">Very Windy</h3>
              </div>

              <RadioGroup
                value={windyUnit}
                onValueChange={setWindyUnit}
                className="flex gap-4 mb-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="mph"
                    id="windy-mph"
                    className="border-[#757575]"
                  />
                  <Label htmlFor="windy-mph" className="text-sm cursor-pointer">
                    mph
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="mc"
                    id="windy-mc"
                    className="border-[#1976d2]"
                  />
                  <Label htmlFor="windy-mc" className="text-sm cursor-pointer">
                    m/c
                  </Label>
                </div>
              </RadioGroup>

              <div className="mb-4">
                <div className="h-12 flex items-center text-[#757575]">
                  E.g. 17.0
                </div>
              </div>

              <div className="space-y-2">
                <Slider
                  value={windyValue}
                  onValueChange={setWindyValue}
                  min={0}
                  max={1.5}
                  step={0.01}
                  className="[&_[role=slider]]:bg-[#1976d2] [&_[role=slider]]:border-[#1976d2]"
                />
                <div className="flex justify-between text-xs text-[#757575]">
                  <span>0.0 m/c</span>
                  <span>1.5 m/c</span>
                </div>
              </div>
            </div>
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
