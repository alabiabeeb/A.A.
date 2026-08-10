"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/Assignment" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/#")) return false // section links, no route to match
    return pathname === href
  }

  return (
    <div
      className="fixed w-full top-0 z-50 px-4 sm:px-10 lg:px-40"
      style={{ top: "20px", marginTop: "24px" }}
    >
      <div
        className="flex items-center justify-between border border-border"
        style={{
          padding: "15px 19px",
          backdropFilter: "blur(10px)",
          background: "var(--color-header-bg)",
          borderRadius: "10px",
        }}
      >
        <Link href="/" className="font-bold text-2xl">
          A.A.
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex gap-9 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={isActive(link.href) ? "text-accent font-bold" : "hover:text-accent"}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="tel:+2348062237162"
            className="bg-accent p-2 px-3 rounded text-white text-center"
          >
            Book a free call
          </Link>
          <ThemeToggle />
        </div>

        {/* mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div
          className="md:hidden flex flex-col gap-5 border border-border mt-2"
          style={{
            padding: "20px",
            borderRadius: "10px",
            background: "var(--color-header-bg)",
            backdropFilter: "blur(10px)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={isActive(link.href) ? "text-accent font-bold" : "hover:text-accent"}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="tel:+2349054803670"
            onClick={() => setOpen(false)}
            className="bg-accent p-2 rounded text-white text-center"
          >
            Book a free call
          </Link>
        </div>
      )}
    </div>
  )
}

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Press D on your computer to change background"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}