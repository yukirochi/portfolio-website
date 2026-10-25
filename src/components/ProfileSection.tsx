import { useRef, useState } from "react"
import { GraduationCap } from "lucide-react"
import { siGithub, siGmail, siIndeed, type SimpleIcon } from "simple-icons"
import linkedinLogo from "@iconify-icons/logos/linkedin"
import profilePicture from "@/assets/PFP.jpg"
import resume from "@/assets/Justine_abanilla _resume.pdf"

const socialLinks: {
  name: string
  href: string
  logo?: SimpleIcon
  brandLogo?: typeof linkedinLogo
}[] = [
  {
    name: "Gmail",
    href: "mailto:Justineabanilla80@gmail.com",
    logo: siGmail,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/justine-abanilla-a008b93a4/",
    brandLogo: linkedinLogo,
  },
  {
    name: "GitHub",
    href: "https://github.com/yukirochi",
    logo: siGithub,
  },
  {
    name: "Indeed",
    href: "https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage--homepage-frontend",
    logo: siIndeed,
  },
]

function ProfileSection() {
  const resumeDialog = useRef<HTMLDialogElement>(null)
  const emailDialog = useRef<HTMLDialogElement>(null)
  const [emailCopied, setEmailCopied] = useState(false)
  const [emailCopyError, setEmailCopyError] = useState("")
  const emailAddress = "Justineabanilla80@gmail.com"

  async function copyEmailAddress() {
    try {
      await navigator.clipboard.writeText(emailAddress)
      setEmailCopied(true)
      setEmailCopyError("")
    } catch {
      setEmailCopied(false)
      setEmailCopyError("Could not copy the email. Please select and copy it manually.")
    }
  }

  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-[minmax(0,1fr)_16rem]">
      <div className="order-1 mx-auto flex w-56 shrink-0 flex-col items-center pb-8 sm:w-64 md:order-2 md:mx-0 md:pb-0">
        <div className="relative size-56 before:absolute before:-right-3 before:-top-3 before:size-full before:rounded-2xl before:border before:border-gray-300 before:content-[''] dark:before:border-zinc-700 sm:size-64">
          <img
            alt="Justine Abanilla"
            className="relative z-10 size-full rounded-2xl object-cover shadow-sm"
            src={profilePicture}
          />
        </div>
        <nav aria-label="Social profiles" className="mx-auto mt-5 flex justify-center gap-4">
          {socialLinks.map(({ name, href, logo, brandLogo }) => {
            const icon = brandLogo ? (
              <svg
                aria-hidden="true"
                className="size-5 brightness-0 invert transition-[filter] group-hover:brightness-0 group-hover:invert-0"
                viewBox={`${brandLogo.left ?? 0} ${brandLogo.top ?? 0} ${brandLogo.width} ${brandLogo.height}`}
                dangerouslySetInnerHTML={{ __html: brandLogo.body }}
              />
            ) : logo ? (
              <svg
                aria-hidden="true"
                className="size-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={logo.path} />
              </svg>
            ) : null

            if (name === "Gmail") {
              return (
                <button
                  aria-label="Show email address"
                  className="group flex size-10 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-800 text-white transition-all duration-[450ms] hover:rotate-[360deg] hover:bg-white hover:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                  key={name}
                  onClick={() => {
                    setEmailCopied(false)
                    setEmailCopyError("")
                    emailDialog.current?.showModal()
                  }}
                  title={name}
                  type="button"
                >
                  {icon}
                </button>
              )
            }

            return (
              <a
                aria-label={name}
                className="group flex size-10 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-800 text-white transition-all duration-[450ms] hover:rotate-[360deg] hover:bg-white hover:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
                href={href}
                key={name}
                rel="noopener noreferrer"
                target="_blank"
                title={name}
              >
                {icon}
              </a>
            )
          })}
        </nav>
        <dialog
          aria-labelledby="email-dialog-title"
          className="fixed inset-0 m-auto w-[min(90vw,24rem)] rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xl backdrop:bg-black/50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              emailDialog.current?.close()
            }
          }}
          ref={emailDialog}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-semibold" id="email-dialog-title">
                Email me
              </h2>
              <button
                aria-label="Close email dialog"
                className="rounded-md px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                onClick={() => emailDialog.current?.close()}
                type="button"
              >
                Close
              </button>
            </div>
            <p className="break-all text-sm text-zinc-600 dark:text-zinc-300">
              {emailAddress}
            </p>
            <button
              className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
              onClick={copyEmailAddress}
              type="button"
            >
              {emailCopied ? "Copied!" : "Copy email"}
            </button>
            {emailCopyError && (
              <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                {emailCopyError}
              </p>
            )}
          </div>
        </dialog>
      </div>
      <div className="order-2 md:order-1 md:pr-16">
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="relative pb-3 text-4xl font-bold tracking-tighter text-zinc-900 after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-80 after:-translate-x-1/2 after:animate-underline-pulse after:bg-black after:content-[''] dark:text-zinc-50 dark:after:bg-white md:after:left-0 md:after:translate-x-0 motion-reduce:after:animate-none sm:text-5xl">
              Hello World! I'm Justine Abanilla.
            </h1>
            <p className="flex flex-wrap items-center justify-center gap-x-1.5 text-sm font-semibold tracking-widest text-zinc-500  md:justify-start">
              <span className='uppercase'>Data Engineer</span>
              <span aria-hidden="true" className="opacity-50">&middot;</span>
              <span>BS Computer Engineering</span>
              <span aria-hidden="true" className="opacity-50">&middot;</span>
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Manila, Philippines
              </span>
              <span aria-hidden="true" className="opacity-50">&middot;</span>
              <span className="inline-flex items-center gap-1.5 normal-case tracking-normal">
                <GraduationCap aria-hidden="true" className="size-4 shrink-0" />
                Colegio de Montalban · 2027
              </span>
            </p>
            
          </div>
          <p className="max-w-xl text-md font-medium leading-relaxed text-zinc-700 dark:text-zinc-400">
              I build end-to-end data pipelines tailored for business operations. My work covers the entire data lifecycle: extracting raw information, structuring it for reliability, and optimizing it for downstream analytics. When a project requires predictive capabilities, I also integrate machine learning models directly into the production architecture to automate insights.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <button
                className="inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                onClick={() => resumeDialog.current?.showModal()}
                type="button"
              >
                View Resume
              </button>
              <a
                className="inline-flex items-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
                download="Justine_Abanilla_Resume.pdf"
              href={resume}
            >
              Download Resume
            </a>
          </div>
          <dialog
            aria-labelledby="resume-dialog-title"
            className="fixed inset-0 m-auto max-h-[90vh] w-[min(90vw,56rem)] max-w-none rounded-xl bg-white p-0 text-zinc-900 shadow-xl backdrop:bg-black/60 dark:bg-zinc-900 dark:text-zinc-100"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                resumeDialog.current?.close()
              }
            }}
            ref={resumeDialog}
          >
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
              <h2 className="font-semibold" id="resume-dialog-title">
                Justine Abanilla - Resume
              </h2>
              <button
                aria-label="Close resume"
                className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
                onClick={() => resumeDialog.current?.close()}
                type="button"
              >
                Close
              </button>
            </div>
            <iframe
              className="h-[75vh] w-full"
              src={`${resume}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit`}
              title="Justine Abanilla resume"
            />
          </dialog>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection