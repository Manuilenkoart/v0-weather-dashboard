import { Menu, Grid, Bookmark, BookOpen, Home, HelpCircle } from "lucide-react";
export default function Asidemenu() {
  return (
    <aside className="w-[84px] bg-[#151515] flex flex-col items-center py-8 gap-8 rounded-3xl">
      <button className="w-14 h-14 rounded-full bg-[#272727] flex items-center justify-center hover:bg-[#1e1e1e] transition-colors">
        <Menu className="w-5 h-5 text-[#d8d8d8]" />
      </button>

      <nav className="flex flex-col gap-6 flex-1">
        <button className="w-14 h-14 rounded-lg bg-[#272727] flex items-center justify-center hover:bg-[#1e1e1e] transition-colors">
          <Grid className="w-5 h-5 text-[#9b9ead]" />
        </button>
        <button className="w-14 h-14 rounded-lg flex items-center justify-center hover:bg-[#272727] transition-colors">
          <Bookmark className="w-5 h-5 text-[#979797]" />
        </button>
        <button className="w-14 h-14 rounded-lg flex items-center justify-center hover:bg-[#272727] transition-colors">
          <BookOpen className="w-5 h-5 text-[#979797]" />
        </button>
        <button className="w-14 h-14 rounded-lg flex items-center justify-center hover:bg-[#272727] transition-colors">
          <Home className="w-5 h-5 text-[#979797]" />
        </button>
      </nav>

      <button className="w-14 h-14 rounded-full flex items-center justify-center hover:bg-[#272727] transition-colors">
        <HelpCircle className="w-5 h-5 text-[#979797]" />
      </button>
    </aside>
  );
}
