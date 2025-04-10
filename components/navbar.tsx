"use client"

import Link from "next/link"
import { ThemeSelector } from "./theme-selector"

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-semibold">
            Flashcard Game
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSelector />
        </div>
      </div>
    </nav>
  )
} 