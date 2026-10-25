import { ArrowUpRight, GitBranch } from "lucide-react"

const projects = [
  {
    name: "PH Weather Pulse",
    repository: "PH_Weather_pipeline",
    description:
      "A real-time weather pipeline collecting observations from five major Philippine cities and surfacing insights through a dashboard.",
    technologies: ["Python", "Weather API", "Data Pipeline", "Snowflake"],
  },
  {
    name: "Soil Accommodation Intelligence System",
    repository: "Soil_Accommodation_Intelligence_System",
    description:
      "A machine learning pipeline for soil monitoring, combining soil-moisture forecasting and fertility classification with continuous inference and model retraining.",
    technologies: ["Python", "Machine Learning", "Sensors", "Data Pipeline"],
  },
  {
    name: "Soil Moisture Prediction System",
    repository: "soil_moisture-prediction",
    description:
      "A cloud-native data pipeline that uses environmental conditions and historical readings to forecast soil moisture, with data quality checks and predictive analytics.",
    technologies: ["Python", "Snowflake", "dbt", "scikit-learn", "Docker"],
  },
  {
    name: "King County Housing Price Prediction",
    repository: "king_county_housing_prediction",
    description:
      "An end-to-end machine learning pipeline for housing prices, using Snowflake for warehousing, dbt for transformation, and scikit-learn for model training.",
    technologies: ["Python", "Snowflake", "dbt", "scikit-learn"],
  },
  {
    name: "Travel Time Prediction System",
    repository: "travel_time_prediction",
    description:
      "A cloud-based data pipeline that collects real-world routing data and predicts travel times using serverless ingestion, transformation, and machine learning.",
    technologies: ["Python", "Azure Functions", "Snowflake", "dbt", "Docker"],
  },
  {
    name: "Heart Disease Prediction",
    repository: "heart_disease_prediction",
    description:
      "A predictive analytics project that combines partitioned Snowflake data for model training and evaluates factors associated with heart-disease status.",
    technologies: ["Python", "Snowflake", "Machine Learning"],
  },
]

function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-6xl scroll-mt-24"
      id="projects"
    >
      <div className="mb-8 space-y-2">
        <h2
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          id="projects-heading"
        >
          Projects
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Selected pinned projects, with a focus on data pipelines.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white/70 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-600 sm:p-6"
            key={project.repository}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-2">
                <GitBranch
                  aria-hidden="true"
                  className="size-4 shrink-0 text-zinc-500 dark:text-zinc-400"
                />
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h3>
              </div>
              <a
                aria-label={`View ${project.name} on GitHub`}
                className="shrink-0 rounded-md p-1 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                href={`https://github.com/yukirochi/${project.repository}`}
                rel="noopener noreferrer"
                target="_blank"
                title="View repository"
              >
                <ArrowUpRight aria-hidden="true" className="size-5" />
              </a>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
