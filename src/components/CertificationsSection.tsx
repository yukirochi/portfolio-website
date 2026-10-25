import { useEffect, useRef, useState } from "react"

const certificates = [
    {
    title: "Machine Learning",
    file: "flyrank-certificate-of-completion-machine-learning-6530af15-9814-42f6-90ce-5c30caf1b8d6.pdf",
    preview: "flyrank-certificate-of-completion-machine-learning-6530af15-9814-42f6-90ce-5c30caf1b8d6-1.png",
  },
  {
    title: "Data Engineer",
    file: "DE0011892904299.pdf",
    preview: "DE0011892904299-1.png",
  },
  {
    title: "Python Data Associate",
    file: "PDA0018620324679.pdf",
    preview: "PDA0018620324679-1.png",
  },
  {
    title: "SQL Associate",
    file: "SQA0014011767255.pdf",
    preview: "SQA0014011767255-1.png",
  },
  { title: "DEA0017292502517", file: "DEA0017292502517 (1).pdf", preview: "DEA0017292502517 (1)-1.png" },
  { title: "Understanding Data Engineering", file: "Understanding Data Engineering.pdf", preview: "Understanding Data Engineering-1.png" },
  { title: "Introduction to SQL", file: "Introduction to SQL.pdf", preview: "Introduction to SQL-1.png" },
  { title: "Intermediate Python", file: "Intermediate Python.pdf", preview: "Intermediate Python-1.png" },
  { title: "Introduction to Snowflake", file: "Introduction to Snowflake.pdf", preview: "Introduction to Snowflake-1.png" },
  { title: "Introduction to Python", file: "Introduction to Python.pdf", preview: "Introduction to Python-1.png" },
  { title: "Introduction to Importing Data in Python", file: "Introduction to Importing Data in Python.pdf", preview: "Introduction to Importing Data in Python-1.png" },
  { title: "Intermediate Importing Data in Python", file: "Intermediate Importing Data in Python.pdf", preview: "Intermediate Importing Data in Python-1.png" },
  { title: "Advanced AI-Assisted Coding for Developers", file: "Advanced AI-Assisted Coding for Developers.pdf", preview: "Advanced AI-Assisted Coding for Developers-0.png" },
  { title: "AI Ethics", file: "AI Ethics.pdf", preview: "AI Ethics-1.png" },
  { title: "AI-Assisted Coding for Developers", file: "AI-Assisted Coding for Developers.pdf", preview: "AI-Assisted Coding for Developers-1.png" },
  { title: "Anthropic Claude 101", file: "certificate-dvpgnvhvumfw-1785226723.pdf", preview: "certificate-dvpgnvhvumfw-1785226723-1.png" },
  { title: "GitHub Copilot Fundamentals", file: "certificate.pdf", preview: "certificate-1.png" },
  { title: "GitHub Foundations", file: "GitHub Foundations.pdf", preview: "GitHub Foundations-1.png" },
  { title: "Intermediate Git", file: "Intermediate Git.pdf", preview: "Intermediate Git-1.png" },
  { title: "Intermediate GitHub Concepts", file: "Intermediate GitHub Concepts.pdf", preview: "Intermediate GitHub Concepts-1.png" },
  { title: "Introduction to Git", file: "Introduction to Git.pdf", preview: "Introduction to Git-1.png" },
  { title: "Introduction to GitHub Concepts", file: "Introduction to GitHub Concepts.pdf", preview: "Introduction to GitHub Concepts-1.png" },
  { title: "Python Basic", file: "python_basic certificate.pdf", preview: "python_basic certificate-0.png" },
  { title: "Software Development with GitHub Copilot", file: "Software Development with GitHub Copilot.pdf", preview: "Software Development with GitHub Copilot-1.png" },
  { title: "SQL Basic", file: "sql_basic certificate.pdf", preview: "sql_basic certificate-1.png" },
  { title: "freeCodeCamp JavaScript", file: "Profile _ freeCodeCamp.JS.org.pdf", preview: "Profile _ freeCodeCamp.JS.org-1.png" },
  { title: "freeCodeCamp", file: "Profile _ freeCodeCamp.org.pdf", preview: "Profile _ freeCodeCamp.org-1.png" },
]

const certificateUrl = (file: string) =>
  `${import.meta.env.BASE_URL}certifications/${encodeURIComponent(file)}`

function CertificationsSection() {
  const [showAll, setShowAll] = useState(false)
  const [renderAll, setRenderAll] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const featured = certificates.slice(0, 4)
  const remaining = certificates.slice(4)

  useEffect(
    () => () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current)
      }
    },
    [],
  )

  function toggleCertificates() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }

    if (showAll) {
      setShowAll(false)
      closeTimer.current = setTimeout(() => {
        setRenderAll(false)
        closeTimer.current = null
      }, 350)
      return
    }

    setRenderAll(true)
    setShowAll(true)
  }

  return (
    <section
      aria-labelledby="certifications-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24"
      id="certifications"
    >
      <div className="mb-8 space-y-2">
          <h2
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
            id="certifications-heading"
          >
            Certifications
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            A selection of certificates and courses I have completed.
          </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((certificate) => (
          <a
            aria-label={`View ${certificate.title} certificate`}
            className="group block overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
            href={certificateUrl(certificate.file)}
            key={certificate.file}
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden">
              {certificate.preview ? (
                <img
                  alt={`${certificate.title} certificate preview`}
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-[1.02]"
                  loading="lazy"
                  src={`${import.meta.env.BASE_URL}certifications/previews/${encodeURIComponent(certificate.preview)}`}
                />
              ) : null}
            </div>
          </a>
        ))}
      </div>

      {remaining.length > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            aria-expanded={showAll}
            className="rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            onClick={toggleCertificates}
            type="button"
          >
            {showAll ? "Show fewer certificates" : `View all ${certificates.length} certificates`}
          </button>
        </div>
      )}

      {renderAll && (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {remaining.map((certificate, index) => (
            <a
              aria-label={`View ${certificate.title} certificate`}
              aria-hidden={!showAll}
              className={`group block overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 ${showAll ? "motion-safe:animate-certificate-reveal" : "motion-safe:animate-certificate-hide"}`}
              href={certificateUrl(certificate.file)}
              inert={!showAll}
              key={certificate.file}
              rel="noreferrer"
              style={{ animationDelay: showAll ? `${Math.min(index, 8) * 45}ms` : "0ms" }}
              target="_blank"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden">
                <img
                  alt={`${certificate.title} certificate preview`}
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-[1.02]"
                  loading="lazy"
                  src={`${import.meta.env.BASE_URL}certifications/previews/${encodeURIComponent(certificate.preview ?? "")}`}
                />
              </div>
            </a>
        ))}
        </div>
      )}

    </section>
  )
}

export default CertificationsSection
