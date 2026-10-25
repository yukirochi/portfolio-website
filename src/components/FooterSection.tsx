const contactLinks = [
  {
    label: "Email",
    href: "mailto:Justineabanilla80@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justine-abanilla-a008b93a4/",
  },
  {
    label: "GitHub",
    href: "https://github.com/yukirochi",
  },
  {
    label: "Indeed",
    href: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage--homepage-frontend",
  },
]

function FooterSection() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Get in touch
          </h2>
          <a
            className="mt-1 inline-block text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
            href="mailto:Justineabanilla80@gmail.com"
          >
            Justineabanilla80@gmail.com
          </a>
        </div>
        <nav aria-label="Contact links" className="flex flex-wrap gap-3">
          {contactLinks.map(({ label, href }) => (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              href={href}
              key={label}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              target={label === "Email" ? undefined : "_blank"}
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-zinc-500 sm:text-right">
          © {new Date().getFullYear()} Justine Abanilla
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
