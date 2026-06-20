import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";

export function FeaturedProjects() {
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<Section>
			<div>
				<h2 className="section-title mb-6 text-4xl font-bold">
					Featured Projects
				</h2>

				<p className="max-w-2xl text-lg text-muted">
					A selection of projects that demonstrate my experience building
					full-stack applications, business systems, and community platforms.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				{featuredProjects.map((project) => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</Section>
	);
}
