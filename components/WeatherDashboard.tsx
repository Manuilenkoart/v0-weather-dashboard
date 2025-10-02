import {
  Calendar,
  MapPin,
  Target,
  Settings,
  ChevronDown,
  Info,
  CloudRain,
  Thermometer,
  Wind,
  Eye,
} from "lucide-react";

import { Header } from "./ui/header";
import Asidemenu from "./ui/asideMenu";

export default function WeatherDashboard() {
  const conditions = [
    {
      name: "Hot",
      icon: <Thermometer className="h-5 w-5 text-warning" />,
      risk: 20,
    },
    {
      name: "Wet",
      icon: <CloudRain className="h-5 w-5 text-info" />,
      risk: 40,
    },
    {
      name: "Cold",
      icon: <Thermometer className="h-5 w-5 text-info" />,
      risk: 20,
    },
    {
      name: "Windy",
      icon: <Wind className="h-5 w-5 text-warning" />,
      risk: 40,
    },
  ];

  const alternativeDates = [
    {
      dateShort: "Sep, 28",
      year: 2025,
      comfortIndex: 70,
    },
    {
      dateShort: "Sep, 29",
      year: 2025,
      comfortIndex: 90,
    },
  ];

  const metrics = [
    {
      name: "Wind Speed",
      icon: <Wind className="h-6 w-6 text-warning" />,
      data: "7.90 km/h",
    },
    {
      name: "Temperature",
      icon: <Thermometer className="h-6 w-6 text-info" />,
      data: "-25°C",
    },
    {
      name: "Precipitationd",
      icon: <CloudRain className="h-6 w-6 text-info" />,
      data: ">10 mm",
    },
    {
      name: "Air Quality",
      icon: <Eye className="h-6 w-6 text-warning" />,
      data: "50 (AQI)",
    },
  ];

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
            {/* Event Card */}
            <div className="bg-[#1e1e1e] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4 text-[#d8d8d8]">
                  <Calendar className="w-5 h-5" />
                  <span>Aug 28, 2026</span>
                  <span className="ml-4">3:00 PM</span>
                </div>
                <button className="text-[#979797] hover:text-[#ffffff]">
                  <Settings className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-5xl font-bold mb-6">Music Festival</h2>

                  <div className="space-y-2 text-[#d8d8d8]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>Warsaw, Poland</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      <span>52.2297, 21.0122</span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-[#1ad66f]">
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
                      Looks good, Enjoy your event
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
                        strokeDashoffset="175.92"
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
                      <span className="text-5xl font-bold">60</span>
                      <span className="text-sm text-[#979797]">/100</span>
                    </div>
                  </div>
                  <span className="mt-3 text-sm text-[#d8d8d8]">
                    Comfort Index
                  </span>
                </div>
              </div>
            </div>

            {/* Event History */}
            <div className="bg-[#1e1e1e] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Event History</h3>
                <Info className="w-5 h-5 text-[#979797]" />
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Very Hot */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">Very Hot</span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <rect
                      x="18"
                      y="8"
                      width="6"
                      height="24"
                      rx="3"
                      fill="#1ad66f"
                    />
                    <circle cx="21" cy="34" r="6" fill="#1ad66f" />
                    <path
                      d="M30 12L34 8M30 16L34 12M30 20L34 16"
                      stroke="#1ad66f"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">Risk: 10%</span>
                </div>

                {/* Very Wet */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">Very Wet</span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <circle cx="18" cy="20" r="4" fill="#ff8c42" />
                    <circle cx="30" cy="20" r="4" fill="#ff8c42" />
                    <circle cx="24" cy="28" r="4" fill="#ff8c42" />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">Risk: 70%</span>
                </div>

                {/* Very Cold */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">Very Cold</span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <rect
                      x="18"
                      y="8"
                      width="6"
                      height="24"
                      rx="3"
                      fill="#1ad66f"
                    />
                    <circle cx="21" cy="34" r="6" fill="#1ad66f" />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">Risk: 10%</span>
                </div>

                {/* Very Windy */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">
                    Very Windy
                  </span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <path
                      d="M8 16H28C30 16 32 18 32 20C32 22 30 24 28 24"
                      stroke="#ffd93d"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 24H32C34 24 36 26 36 28C36 30 34 32 32 32"
                      stroke="#ffd93d"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 32H24"
                      stroke="#ffd93d"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">Risk: 40%</span>
                </div>
              </div>
            </div>

            {/* Alternative Dates */}
            <div className="bg-[#1e1e1e] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Alternative dates</h3>
                <button className="flex items-center gap-2 text-[#979797] hover:text-[#ffffff]">
                  <span className="text-sm">See All</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Date 1 */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-semibold">Sep, 28</div>
                    <div className="text-sm text-[#979797]">2026</div>
                  </div>

                  <div className="relative w-24 h-24">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 96 96"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        fill="none"
                        stroke="#272727"
                        strokeWidth="8"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="8"
                        strokeDasharray="263.89"
                        strokeDashoffset="79.17"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient2"
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
                      <span className="text-2xl font-bold">70</span>
                      <span className="text-xs text-[#979797]">0 100</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-[#979797] mb-1">
                      Comfort index
                    </div>
                    <div className="text-2xl font-semibold">
                      70<span className="text-[#979797]">/100</span>
                    </div>
                  </div>
                </div>

                {/* Date 2 */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-semibold">Sep, 29</div>
                    <div className="text-sm text-[#979797]">2026</div>
                  </div>

                  <div className="relative w-24 h-24">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 96 96"
                    >
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        fill="none"
                        stroke="#272727"
                        strokeWidth="8"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        fill="none"
                        stroke="url(#gradient3)"
                        strokeWidth="8"
                        strokeDasharray="263.89"
                        strokeDashoffset="26.39"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient3"
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
                      <span className="text-2xl font-bold">90</span>
                      <span className="text-xs text-[#979797]">0 100</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-[#979797] mb-1">
                      Comfort index
                    </div>
                    <div className="text-2xl font-semibold">
                      90<span className="text-[#979797]">/100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Forecast */}
            <div className="bg-[#1e1e1e] rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Live Forecast</h3>
                <button className="flex items-center gap-2 text-[#979797] hover:text-[#ffffff]">
                  <span className="text-sm">See All</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Very Hot */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">Very Hot</span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <rect
                      x="18"
                      y="8"
                      width="6"
                      height="24"
                      rx="3"
                      fill="#ff6b42"
                    />
                    <circle cx="21" cy="34" r="6" fill="#ff6b42" />
                    <path
                      d="M30 12L34 8M30 16L34 12M30 20L34 16"
                      stroke="#ff6b42"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">+25°C</span>
                </div>

                {/* Very Wet */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">Very Wet</span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <circle cx="18" cy="20" r="4" fill="#979797" />
                    <circle cx="30" cy="20" r="4" fill="#979797" />
                    <circle cx="24" cy="28" r="4" fill="#979797" />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">7.90 mm/day</span>
                </div>

                {/* Very Cold */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">Very Cold</span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <rect
                      x="18"
                      y="8"
                      width="6"
                      height="24"
                      rx="3"
                      fill="#979797"
                    />
                    <circle cx="21" cy="34" r="6" fill="#979797" />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">-25°C</span>
                </div>

                {/* Very Windy */}
                <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-sm text-[#d8d8d8] mb-4">
                    Very Windy
                  </span>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="mb-4"
                  >
                    <path
                      d="M8 16H28C30 16 32 18 32 20C32 22 30 24 28 24"
                      stroke="#979797"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 24H32C34 24 36 26 36 28C36 30 34 32 32 32"
                      stroke="#979797"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 32H24"
                      stroke="#979797"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm text-[#d8d8d8]">7.90 mm/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
