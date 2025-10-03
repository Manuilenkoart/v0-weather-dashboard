import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Weather Master Logo"
              width={112}
              height={58}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
