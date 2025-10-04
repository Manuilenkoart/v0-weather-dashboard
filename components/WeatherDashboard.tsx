"use client";

import { Calendar, Target, Settings } from "lucide-react";
import { Header } from "./ui/header";
import Asidemenu from "./ui/asideMenu";
import Image from "next/image";
import DashboardCard from "./ui/dashboardCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type WeatherKeys = "heat" | "very_wet" | "cold" | "windy";

interface Weather {
  event_history: Partial<Record<WeatherKeys, { probability_percent: number }>>;
  live_forecast: Partial<Record<WeatherKeys, { flag: boolean; value: number }>>;
}

export default function WeatherDashboard() {
  const router = useRouter();

  const [weather, setWeather] = useState<Weather>({
    event_history: {},
    live_forecast: {},
  });

  const conditions = [
    {
      name: "Very Hot",
      icon: (
        <Image
          src={"/color/hot.svg"}
          width={50}
          height={50}
          alt={""}
          style={{ width: "50px", height: "50px", margin: "20px 0" }}
        />
      ),
      data: `${weather.event_history?.heat?.probability_percent ?? ""}%`,
    },
    {
      name: "Very Wet",
      icon: (
        <Image
          src={"/color/drops.svg"}
          width={50}
          height={50}
          alt={""}
          style={{ width: "50px", height: "50px", margin: "20px 0" }}
        />
      ),
      data: `${weather.event_history?.very_wet?.probability_percent ?? ""}%`,
    },
    {
      name: "Very Windy",
      icon: (
        <Image
          src={"/color/windy.svg"}
          width={50}
          height={50}
          alt={""}
          style={{ width: "50px", height: "50px", margin: "20px 0" }}
        />
      ),
      data: `${weather.event_history?.windy?.probability_percent ?? ""}%`,
    },
    {
      name: "Very Cold",
      icon: (
        <Image
          src={"/cold.svg"}
          width={50}
          height={50}
          alt={""}
          style={{ width: "50px", height: "50px", margin: "20px 0" }}
        />
      ),
      data: `${weather.event_history?.cold?.probability_percent ?? ""}%`,
    },
  ];

  const liveForecast = [
    {
      name: "Temperature",
      icon: (
        <Image
          src={"/color/hot.svg"}
          width={50}
          height={50}
          alt={""}
          style={{ width: "50px", height: "50px", margin: "20px 0" }}
        />
      ),
      data: `${weather.live_forecast?.heat?.value ?? ""} °C`,
    },
    {
      name: "Wet",
      icon: (
        <Image
          src={"/color/drops.svg"}
          width={50}
          height={50}
          alt={""}
          style={{ width: "50px", height: "50px", margin: "20px 0" }}
        />
      ),
      data: `${weather.live_forecast?.very_wet?.value ?? ""} mm/day`,
    },
    // {
    //   name: "Cold",
    //   icon: (
    //     <Image
    //       src={"/cold.svg"}
    //       width={50}
    //       height={50}
    //       alt={""}
    //       style={{ width: "50px", height: "50px", margin: "20px 0" }}
    //     />
    //   ),

    //   data: `${weather.live_forecast?.cold?.value ?? ""} °C`,
    // },
    {
      name: "Windy",
      icon: (
        <Image
          src={"/color/windy.svg"}
          width={50}
          height={50}
          alt={""}
          style={{ width: "50px", height: "50px", margin: "20px 0" }}
        />
      ),
      data: `${weather.live_forecast?.windy?.value ?? ""} mm/s`,
    },
  ];
  const [form, setForm] = useState({
    location: "",
    event: "",
    date: "",
  });
  useEffect(() => {
    try {
      const local = localStorage.getItem("eventForm");

      if (local) {
        const eventForm = JSON.parse(local);
        setForm(eventForm);
      }
    } catch (error) {
      console.error("Failed to save form data:", error);
    }
  }, []);

  useEffect(() => {
    fetch("https://chronos-labs.vercel.app/api/passport")
      .then((d) => d.json())
      .then(setWeather)
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] ">
      {/* Sidebar */}
      <Header />

      {/* Main Content */}
      <main className="flex px-8">
        <Asidemenu />

        {/* Content Area */}
        <div className="flex-1 px-12 py-6">
          {/* Main Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Event Risk */}
            <div className="bg-[#1e1e1e] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Event Risk</h3>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {conditions.map((c) => (
                  <DashboardCard key={c.name} {...c} />
                ))}
              </div>
            </div>

            {/* Event Card */}
            <div className="bg-[#1e1e1e] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4 text-[#d8d8d8]">
                  <Calendar className="w-5 h-5" />
                  <span>{form.date}</span>
                  {/* <span className="ml-4">3:00 PM</span> */}
                </div>
                <button
                  className="text-[#979797] hover:text-[#ffffff]"
                  onClick={() => router.push("/event")}
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-5xl font-bold mb-6">{form.event}</h2>

                  <div className="space-y-2 text-[#d8d8d8]">
                    {/* <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>Warsaw, Poland</span>
                    </div> */}
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      <span>{form.location}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-[#FFC107]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M16 6L8 14L4 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-medium">
                      It’s not the most comfortable day out there
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-40 h-40">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 160 160"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#272727"
                        strokeWidth="12"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        strokeDasharray="439.8"
                        strokeDashoffset="355.92"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#7c7cf5" />
                          <stop offset="100%" stopColor="#9b7cf5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-5xl font-bold">20</span>
                      <span className="text-sm text-[#979797]">/100</span>
                    </div>
                  </div>
                  <span className="mt-3 text-sm text-[#d8d8d8]">
                    Comfort Index
                  </span>
                </div>
              </div>
            </div>

            {/* Live Forecast */}
            <div className="bg-[#1e1e1e] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Live Forecast</h3>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {liveForecast.map((c) => (
                  <DashboardCard key={c.name} {...c} />
                ))}
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}
