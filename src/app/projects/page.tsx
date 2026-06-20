import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function ProjectsPage() {
	return (
		<>
			<Section>
				<div className="mx-auto max-w-5xl">
					<p className="mb-4 text-accent">My Work</p>

					<h1 className="mb-6 text-5xl font-bold text-gradient md:text-7xl">
						Featured Projects
					</h1>

					<p className="max-w-3xl text-xl leading-relaxed text-muted">
						I enjoy building software that solves real problems. From social
						platforms and nonprofit systems to business websites and custom web
						applications, each project represents an opportunity to combine
						thoughtful design, modern technologies, and practical solutions into
						a polished user experience.
					</p>
				</div>
			</Section>

			<Section>
				<div className="mx-auto max-w-6xl space-y-10">
					{projects.map((project) => (
						<section
							key={project.slug}
							id={project.slug}
							className="glass-gradient scroll-mt-28 rounded-3xl p-8 md:p-10"
						>
							<div className="grid gap-8 lg:grid-cols-[1fr_320px]">
								<div>
									<p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent">
										<span>{project.role}</span>
										<span className="text-muted">|</span>
										<span>{project.year}</span>
									</p>

									<h2 className="mb-2 text-secondary text-3xl font-bold md:text-4xl">
										{project.title}
									</h2>

									<p className="mb-6 text-lg leading-relaxed text-muted">
										{project.description}
									</p>

									<div className="mb-8 flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="flex flex-wrap gap-4">
										{project.liveUrl && (
											<Button href={project.liveUrl} target="_blank">
												Live Site
											</Button>
										)}

										{project.githubUrl && (
											<Button
												href={project.githubUrl}
												variant="secondary"
												target="_blank"
											>
												Public GitHub
											</Button>
										)}
									</div>
								</div>

								<div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6">
									<h3 className="mb-4 text-xl font-semibold">
										Project Highlights
									</h3>

									<ul className="space-y-3 text-muted">
										{project.highlights?.map((highlight) => (
											<li key={highlight} className="flex items-start gap-3">
												<span className="mt-2 h-2 w-2 rounded-full bg-primary" />
												<span>{highlight}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</section>
					))}
				</div>
			</Section>
		</>
	);
}
