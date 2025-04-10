"use client"

import { ThemeSelector } from "./theme-selector"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSelector />
        </div>
      </div>
    </nav>
  )
} 