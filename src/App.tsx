import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { MenubarDemo } from "@/components/ui/menubar"
import ProfileSection from "@/components/ProfileSection"
import ToolsSection from "@/components/ToolsSection"
import CertificationsSection from "@/components/CertificationsSection"
import GitHubContributionsSection from "@/components/GitHubContributionsSection"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import ScrollReveal from "@/components/ScrollReveal"
import FooterSection from "@/components/FooterSection"
import AnimatedBackground from "@/components/AnimatedBackground"

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false
    }

    try {
      const savedTheme = window.localStorage.getItem("portfolio-theme")
      return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches
    } catch (error) {
      console.error("Could not read the saved theme preference.", error)
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"

    try {
      window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light")
    } catch (error) {
      console.error("Could not save the theme preference.", error)
    }
  }, [isDark])

  return (
    <div className="relative isolate flex min-h-svh flex-col">
      <AnimatedBackground isDark={isDark} />
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex w-full max-w-[100rem] items-center justify-between px-6 py-4">
          <MenubarDemo />
          <button
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white/90 text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:bg-zinc-950/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
            onClick={() => setIsDark((dark) => !dark)}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {isDark ? (
              <Sun aria-hidden="true" className="size-5" />
            ) : (
              <Moon aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </header>
      <main className="relative z-10 scroll-mt-24 flex-1 px-6 pt-10 pb-16 md:pt-30" id="home">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:gap-24">
          <ScrollReveal>
            <ProfileSection />
          </ScrollReveal>
          <ScrollReveal>
            <GitHubContributionsSection />
          </ScrollReveal>
          <ScrollReveal>
            <ToolsSection />
          </ScrollReveal>
          <ScrollReveal>
            <CertificationsSection />
          </ScrollReveal>
          <ScrollReveal>
            <ExperienceSection />
          </ScrollReveal>

          <ScrollReveal>
            <ProjectsSection />
          </ScrollReveal>
        </div>
      </main>
      <div className="relative z-10">
        <FooterSection />
      </div>
    </div>
  )
}

export default App
