import {
  siApacheairflow,
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siMetabase,
  siNumpy,
  siPandas,
  siPostgresql,
  siPostman,
  siPython,
  siScrapy,
  siScikitlearn,
  siSnowflake,
  type SimpleIcon,
} from "simple-icons"
import awsS3Logo from "@iconify-icons/logos/aws-s3"
import azureLogo from "@iconify-icons/logos/azure-icon"
import dbtLogo from "@iconify-icons/logos/dbt"
import vscodeLogo from "@iconify-icons/logos/visual-studio-code"

type Tool = {
  name: string
  logo?: SimpleIcon
  brandLogo?: typeof dbtLogo
  mark?: string
  markClassName?: string
}

const tools: Tool[] = [
  { name: "Python", logo: siPython },
  { name: "PostgreSQL", logo: siPostgresql },
  { name: "NumPy", logo: siNumpy },
  { name: "Scikit-learn", logo: siScikitlearn },
  { name: "Apache Airflow", logo: siApacheairflow },
  { name: "Snowflake", logo: siSnowflake },
  { name: "dbt", brandLogo: dbtLogo },
  { name: "Pandas", logo: siPandas },
  { name: "Docker", logo: siDocker },
  { name: "Metabase", logo: siMetabase },
  { name: "FastAPI", logo: siFastapi },
  { name: "BeautifulSoup", mark: "BS4", markClassName: "text-2xl font-bold tracking-tight text-emerald-700 dark:text-emerald-400" },
  { name: "Scrapy", logo: siScrapy },
  { name: "AWS S3", brandLogo: awsS3Logo },
  { name: "Azure Blob Storage", brandLogo: azureLogo },
  { name: "Git", logo: siGit },
  { name: "GitHub", logo: siGithub },
  { name: "VS Code", brandLogo: vscodeLogo },
  { name: "Postman", logo: siPostman },
]

function ToolsSection() {
  return (
    <section aria-labelledby="tools-heading" className="mx-auto w-full max-w-6xl scroll-mt-24" id="tools">
      <div className="mb-8 space-y-2 text-center md:text-left">
        <h2
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          id="tools-heading"
        >
          Tools &amp; Technologies
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Technologies I use to build and support data solutions.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2.5 sm:grid-cols-6 sm:gap-3 md:grid-cols-8">
        {tools.map(({ name, logo, brandLogo, mark, markClassName }) => (
          <div
            aria-label={name}
            className="flex aspect-square items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
            key={name}
            role="img"
            title={name}
          >
            {brandLogo ? (
              <svg
                aria-hidden="true"
                className="h-9 max-w-11 sm:h-10 sm:max-w-12"
                viewBox={`${brandLogo.left ?? 0} ${brandLogo.top ?? 0} ${brandLogo.width} ${brandLogo.height}`}
                dangerouslySetInnerHTML={{ __html: brandLogo.body }}
              />
            ) : logo ? (
              <svg
                aria-hidden="true"
                className="size-9 sm:size-10"
                fill={`#${logo.hex}`}
                role="presentation"
                viewBox="0 0 24 24"
              >
                <path d={logo.path} />
              </svg>
            ) : (
              <span aria-hidden="true" className={markClassName}>
                {mark}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ToolsSection
