function GitHubContributionsSection() {
  return (
    <section
      aria-labelledby="github-contributions-heading"
      className="mx-auto -mt-6 w-full max-w-6xl md:-mt-12"
      id="github-contributions"
    >
      <div className="overflow-x-auto rounded-2xl border-none bg-white/70 p-4 dark:border-zinc-800 dark:bg-transparent">
        <img
          alt="GitHub contribution graph for yukirochi"
          className="mx-auto h-auto w-full min-w-0 max-w-none dark:opacity-70 md:w-[88%]"
          height="104"
          loading="lazy"
          src="https://ghchart.rshah.org/18181b/yukirochi"
          width="663"
        />
      </div>
    </section>
  )
}

export default GitHubContributionsSection
