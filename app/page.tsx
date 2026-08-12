"use client"

import Header from "@/components/Header"
import { User } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "30+", label: "Projects Completed" },
    { value: "10+", label: "Technologies Used" },
  ]

  const projects = [
    {
      tag: "Posting App",
      title: "Vibe App",
      image: "/Vue_project.png",
      desc: "A social media app for sharing posts and interacting with other users designed with HTML, Vue.js.",
      link: "https://vibe-app-beryl-psi.vercel.app",
    },
    {
      tag: "Fintech",
      title: "BudgetFlex",
      image: "/budgetflex.png",
      desc: "A fintech analytics dashboard with interactive charts, real-time financial insights, and secure API integrations, built with Next.js.",
      link: "https://www.budgetflexinc.com/",
    },
        {
      tag: "Hospital Management",
      title: "Hospital Management",
      image: "/hospital management.png",
      desc: "A hospital management system for patient records, appointment scheduling, billing, and staff dashboards, implemented with Next.js and REST APIs.",
      link: "https://hospital-management-s438.vercel.app",
    },
    {
      tag: "Online Arabic School",
      title: "Al-hirz",
      image: "/Al-hirz.png",
      desc: "A comprehensive online platform for Arabic language education with structured courses, Designed with HTML, CSS, JavaScript. ",
      link: "https://al-hirz.onrender.com/",
    },
    {
      tag: "Ecommerce",
      title: "MarketPro",
      image: "/marketpro.png",
      desc: "A social media app for sharing posts and interacting with other users designed with HTML, Vue.js.",
      link: "https://market-pro-y317.vercel.app/",
    },
    {
      tag: "Golf App",
      title: "golfngv",
      image: "/golf.png",
      desc: "A modern golf application with course navigation, tee time booking, and social features, Designed with HTML, CSS, JavaScript. ",
      link: "https://golfngv.vercel.app/",
    },
  ]
  const skills = [
    {
      title: "Frontend Development",
      desc: "Building modern and responsive web applications using HTML, CSS, JavaScript React.js, React Native, Git, Next.js, TypeScript, and Tailwind CSS.",
    },
    {
      title: "UI Implementation",
      desc: "Transforming Figma designs into pixel-perfect interfaces with clean and maintainable code.",
    },
    {
      title: "Performance Optimization",
      desc: "Improving website speed, SEO, and accessibility to deliver a better user experience.",
    },
    {
      title: "API Integration",
      desc: "Connecting applications to REST APIs and third-party services to create dynamic experiences.",
    },
  ]

  const VISIBLE_COUNT = 3
  const ROTATE_INTERVAL_MS = 60 * 1000 // 1 minute
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    if (projects.length <= VISIBLE_COUNT) return // nothing to rotate

    const id = setInterval(() => {
      setStartIndex((prev) => (prev + VISIBLE_COUNT) % projects.length)
    }, ROTATE_INTERVAL_MS)

    return () => clearInterval(id)
  }, [])

  // wraps around the array so it always returns VISIBLE_COUNT items, even near the end
  const visibleProjects = Array.from(
    { length: Math.min(VISIBLE_COUNT, projects.length) },
    (_, i) => projects[(startIndex + i) % projects.length]
  )

  return (
    <div className="overflow-x-hidden">
      {/* ---------------- Header ---------------- */}
      <Header />

      {/* ---------------- Hero ---------------- */}
      <div className="mt-36 px-4 sm:mt-50 sm:px-10 lg:px-40">
        <p className="mb-5 text-xs tracking-widest text-muted uppercase">
          Alabi Abeeb &bull; Based in Nigeria
        </p>

        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <h1 className="max-w-2xl text-3xl leading-tight sm:text-3xl lg:text-5xl">
            I&apos;m a Frontend Developer focused on mobile and web apps
            designs,{" "}
            <span className="text-accent">
              previously at Gigs tech solution and consult.
            </span>
          </h1>

          <div
            className="flex shrink-0 items-center gap-2 text-sm font-medium"
            style={{
              border: "1px solid var(--color-border)",
              borderRadius: "999px",
              padding: "10px 16px",
              background: "var(--color-surface)",
            }}
          >
            Available for work
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>
        </div>
      </div>

      {/* ---------------- About ---------------- */}
      <div className="mt-16 flex flex-col items-center justify-between gap-12 px-4 sm:mt-50 sm:px-10 md:flex-row lg:px-40">
        <div>
          <p className="mb-5 text-xs tracking-widest text-muted uppercase">
            About
          </p>
          <div className="mt-4 flex w-full flex-col items-start space-y-4 md:mt-0 md:w-[82%]">
            <h4 className="text-start text-xl md:text-2xl">
              I am a frontend developer focused on crafting engaging,
              accessible, and high-performance web experiences.
            </h4>

            <h4 className="text-start text-xl md:text-2xl">
              I specialize in building responsive interfaces with modern
              technologies like React, Next.js, TypeScript, and Tailwind CSS.
            </h4>
            <h4 className="text-start text-xl md:text-2xl">
              I enjoy turning complex problems into simple, practical solutions
              while paying close attention to performance, accessibility, and
              user experience.
            </h4>

            <h4 className="text-start text-xl md:text-2xl">
              I am constantly learning, experimenting with new technologies, and
              improving my development workflow through real-world projects.
            </h4>

            <h4 className="text-start text-xl md:text-2xl">
              I believe great products are built through clean code, thoughtful
              design, continuous learning, and good collaboration.
            </h4>
            <h4 className="text-start text-xl md:text-2xl">
              My goal is to transform ideas and designs into fast, scalable, and
              intuitive applications that users enjoy.
            </h4>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 sm:gap-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-accent">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-muted uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
  className="flex aspect-square w-full max-w-xs shrink-0 items-center justify-center overflow-hidden md:w-80 md:max-w-none"
  style={{
    borderRadius: "24px",
    border: "1px solid var(--color-border)",
    background:
      "linear-gradient(135deg, var(--color-surface), var(--color-bg))",
  }}
>
<img
  src="/profiles.png"
  alt="Abeeb - Frontend Developer"
  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
/>
</div>
      </div>

      {/* ---------------- Work ---------------- */}
      <div className="mt-20 px-4 sm:mt-50 sm:px-10 lg:px-40" id="work">
        <p className="mb-4 text-xs tracking-widest text-muted uppercase">
          Selected work
        </p>

        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
          Projects that <span className="text-accent">matter.</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((p) => (
            <div
              key={p.title}
              className="group animate-fadeIn overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-black uppercase">
                  {p.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>

                <Link
                  href={p.link}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-accent transition-transform duration-300 group-hover:translate-x-1"
                >
                  View Project
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Skills ---------------- */}
      <div className="mt-16 px-4 sm:mt-20 sm:px-10 lg:px-40" id="skills">
        <p className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">
          Expertise
        </p>
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
          What I <span className="text-accent">bring.</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.title}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                background: "var(--color-surface)",
                padding: "28px",
              }}
            >
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    {/* ---------------- Contact ---------------- */}
<div className="mt-16 px-4 sm:mt-20 sm:px-10 lg:px-40">
  <div
    className="px-6 text-center sm:px-10"
    style={{
      border: "1px solid var(--color-border)",
      borderRadius: "32px",
      background: "var(--color-bg)",
      padding: "60px 20px",
    }}
  >
    <p className="mb-4 text-xs font-bold tracking-widest text-muted uppercase">
      Get in touch
    </p>
    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
      Let&apos;s build something{" "}
      <span className="text-accent">great.</span>
    </h2>
    <p className="mx-auto mt-5 max-w-md text-muted">
      Have a project in mind or just want to say hi? My inbox is always
      open.
    </p>

    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <Link
        href="mailto:your.email@example.com"
        className="inline-block font-bold text-white"
        style={{
          background: "var(--color-accent)",
          borderRadius: "999px",
          padding: "14px 28px",
        }}
      >
        Send me a message →
      </Link>
      
      {/* ADD CV BUTTON HERE */}
      <a
        href="/public/Alabi_Abeeb_Frontend_Developer_CV_Updated.pdf"
        download
        className="inline-block font-bold"
        style={{
          border: "1px solid var(--color-border)",
          borderRadius: "999px",
          padding: "14px 28px",
          background: "var(--color-surface)",
        }}
      >
        📄 Download CV
      </a>
    </div>

    {/* Social links remain here */}
  </div>
</div>
      {/* ---------------- Footer ---------------- */}
      <p className="py-10 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Devraq. Designed with intention.
      </p>
    </div>
  )
}
