"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { SimpleTooltip } from "@/src/components/ui/tooltip";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full border-b">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-sm font-semibold">
          Anotherrizz
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <SimpleTooltip content="see u on github.com/Anotherrizz">
            <Link href="https://github.com/Anotherrizz" target="_blank">
              <img
                src="https://api.iconify.design/devicon:github.svg"
                width={28}
                height={28}
                alt="Anotherrizz"
                className="rounded-full dark:bg-white"
              />
            </Link>
          </SimpleTooltip>

          {/* Toggle Theme */}
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-gray-200 cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
