import profilePicture from "@/assets/PFP.jpg"

function ProfileSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-1 md:grid-cols-[minmax(0,1fr)_16rem]">
      <div className="order-1 flex justify-center pb-8 md:order-2 md:block md:w-64 md:pb-0">
        <img
          alt="Justine Abanilla"
          className="size-56 shrink-0 rounded-2xl object-cover shadow-sm ring-1 ring-gray-300 ring-offset-8 sm:size-64"
          src={profilePicture}
        />
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
            </p>
            
          </div>
          <p className="max-w-xl text-md font-medium leading-relaxed text-zinc-700 dark:text-zinc-400">
              I build end-to-end data pipelines tailored for business operations. My work covers the entire data lifecycle: extracting raw information, structuring it for reliability, and optimizing it for downstream analytics. When a project requires predictive capabilities, I also integrate machine learning models directly into the production architecture to automate insights.
            </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection