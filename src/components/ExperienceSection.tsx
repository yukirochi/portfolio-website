import { MapPin } from "lucide-react"
import eskwelabsLogo from "@/assets/eskwelabs-logo.png"
import flyrankLogo from "@/assets/flyrank-logo.png"

const experiences = [
  {
    role: "Data Innovation Intern",
    company: "Eskwelabs",
    dates: "Sep 2026 – Nov 2026",
    location: "Manila, National Capital Region, Philippines · Remote",
    logo: eskwelabsLogo,
    logoAlt: "Eskwelabs",
    skills: ["Data Analytics", "Data Modeling", "Data Engineering"],
    responsibilities: [
      "Complete a required project as part of this project-based internship.",
      "Attend progress check-ins every two weeks through late November.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "FlyRank AI",
    dates: "Jun 2026 – Sep 2026",
    location: "Bosnia and Herzegovina · Remote",
    logo: flyrankLogo,
    logoAlt: "FlyRank AI",
    skills: ["Data Modeling", "Machine Learning", "Python", "Random Forest"],
    responsibilities: [
      "Developed the Content Refresh Opportunity Ranking system to prioritize web page updates using traffic and engagement signals.",
      "Trained a Random Forest model that outperformed the existing rule-based baseline, achieving a Precision@50 of 0.740, up from 0.240.",
    ],
    certificate: {
      file: "flyrank-certificate-of-completion-machine-learning-6530af15-9814-42f6-90ce-5c30caf1b8d6.pdf",
      preview:
        "flyrank-certificate-of-completion-machine-learning-6530af15-9814-42f6-90ce-5c30caf1b8d6-1.png",
    },
  },
]

function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24"
      id="experience"
    >
      <div className="mb-8 space-y-2">
        <h2
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          id="experience-heading"
        >
          Experience
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Roles and projects that have shaped my work in data.
        </p>
      </div>

      <ol className="relative ml-3 space-y-8 border-l border-zinc-300 dark:border-zinc-700">
        {experiences.map((experience, index) => (
          <li className="relative pl-8 sm:pl-10" key={experience.role}>
            <span className="absolute -left-[9px] top-1 flex size-[18px] items-center justify-center rounded-full border-4 border-background bg-zinc-700 dark:bg-zinc-300">
              <span className="size-1 rounded-full bg-white dark:bg-zinc-900" />
            </span>
            <article className="rounded-2xl border border-zinc-200 bg-white/70 p-5 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-6">
              <div className="grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-4">
                <img
                  alt={experience.logoAlt}
                  className="size-12 rounded-xl bg-white p-1 object-contain dark:bg-transparent"
                  src={experience.logo}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                        {experience.role}
                      </h3>
                      <p className="mt-0.5 font-medium text-zinc-700 dark:text-zinc-300">
                        {experience.company} · Internship
                      </p>
                    </div>
                    {index === 0 && (
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        In progress
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {experience.dates}
                  </p>
                  <p className="mt-1 flex items-start gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                    <span>{experience.location}</span>
                  </p>

                  {experience.responsibilities && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {experience.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  )}

                  {experience.certificate && (
                    <a
                      aria-label="View Machine Learning internship certificate"
                      className="mt-4 inline-flex items-center gap-3 rounded-xl border border-zinc-200 p-2 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                      href={`${import.meta.env.BASE_URL}certifications/${encodeURIComponent(experience.certificate.file)}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        alt=""
                        className="h-14 w-20 rounded-md object-cover"
                        loading="lazy"
                        src={`${import.meta.env.BASE_URL}certifications/previews/${encodeURIComponent(experience.certificate.preview)}`}
                      />
            
                    </a>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ExperienceSection
