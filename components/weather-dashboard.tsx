import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Cloud,
  CloudRain,
  Thermometer,
  Wind,
  Eye,
  MapPin,
  Settings,
  Search,
  Calendar,
  CheckCircle,
  Home,
  Bookmark,
  BarChart3,
  Grid3X3,
} from "lucide-react";

export function WeatherDashboard() {
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">WeatherMaster</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your location"
              className="pl-10 w-80 bg-card border-border"
            />
          </div>
          <Avatar>
            <AvatarImage src="/user-avatar.jpg" />
            <AvatarFallback>OL</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 bg-sidebar border-r border-sidebar-border p-4">
          <nav className="flex flex-col gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <Grid3X3 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <BarChart3 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <Calendar className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <Home className="h-5 w-5" />
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-2xl font-medium text-balance">
              Hi, Oleno – here's the risk outlook for your events.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Event Card */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Warsaw, Poland</span>
                    <span>52.2297, 21.0122</span>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">
                      Music Festival
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      04 Aug, 2026
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      3:00 PM
                    </div>

                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">
                        Looks good, Enjoy your event
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="relative w-32 h-32 mb-2">
                      <svg
                        className="w-32 h-32 transform -rotate-90"
                        viewBox="0 0 120 120"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-muted"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${60 * 3.14159} ${100 * 3.14159}`}
                          className="text-primary"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold">60</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">100</div>
                  </div>
                </div>

                {/* <div className="flex justify-end gap-2 mt-6">
                  <Button variant="outline">Edit Event</Button>
                  <Button>Save Event</Button>
                </div> */}
              </Card>
            </div>

            {/* Conditions Card */}
            <Card className="lg:col-span-1 p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Conditions</h3>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex justify-between">
                {conditions.map(({ name, icon, risk }) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex flex-col items-center gap-3">
                      <div>
                        <div className="font-medium">Very {name}</div>
                      </div>

                      <div className="p-2 rounded-lg bg-warning/20">{icon}</div>

                      <div className="text-sm text-muted-foreground">
                        Risk: {risk}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Alternative Dates */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Alternative dates</h3>
                <Button
                  variant="ghost"
                  className="text-sm text-muted-foreground"
                >
                  See All
                </Button>
              </div>

              <div className="space-y-4">
                {alternativeDates.map(
                  ({ dateShort, year, comfortIndex }, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-lg bg-accent/50"
                    >
                      <div>
                        <div className="font-medium">{dateShort}</div>
                        <div className="text-sm text-muted-foreground">
                          {year}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="relative w-12 h-12 mb-1">
                          <svg
                            className="w-12 h-12 transform -rotate-90"
                            viewBox="0 0 48 48"
                          >
                            <circle
                              cx="24"
                              cy="24"
                              r="18"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              className="text-muted"
                            />
                            <circle
                              cx="24"
                              cy="24"
                              r="18"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray={`${70 * 1.13} ${100 * 1.13}`}
                              className="text-primary"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold">
                              {comfortIndex}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          Comfort Index
                        </div>
                        <div className="font-semibold">{comfortIndex}/100</div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>

            {/* Metrics */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Metrics</h3>
                <Button
                  variant="ghost"
                  className="text-sm text-muted-foreground"
                >
                  See All
                </Button>
              </div>

              <div className="flex justify-between">
                {metrics.map(({ name, icon, data }) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex flex-col items-center gap-3">
                      <div>
                        <div className="font-medium">{name}</div>
                      </div>

                      <div className="p-2 rounded-lg bg-warning/20">{icon}</div>

                      <div className="text-sm text-muted-foreground">
                        {data}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
