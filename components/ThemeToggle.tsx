"use client";

import { themes } from "@/app/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Circle } from "lucide-react";
import { useTheme } from "next-themes";
import { FaPalette } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer hover:text-gray-400">
          <FaPalette aria-label="Pallete Icon" size={20} className="rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="">
        <DropdownMenuGroup>
          {themes.map((color) => (
            <DropdownMenuItem
              key={color.value}
              className={`flex items-center gap-2 cursor-pointer ${color.hoverClass}`}
              onClick={() => setTheme(color.value)}
              aria-label={`Switch to ${color.name} theme`}
            >
              <div className="relative">
                {theme === color.value ? (
                  <Check className={`h-4 w-4 ${color.class}`} />
                ) : (
                  <Circle className={`h-4 w-4 fill-current ${color.class}`} />
                )}
              </div>
              <span>{color.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
