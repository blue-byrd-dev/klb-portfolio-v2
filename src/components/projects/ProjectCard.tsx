import Link from "next/link";
import { Project } from "@/types/project";

type ProjectCardProps = {
	project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Link
			href={`/projects#${project.slug}`}
			className="
        card
        group
        flex
        flex-col
        gap-4
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
      "
		>
			<div>
				<h3 className="mb-2 text-2xl font-bold text-secondary transition group-hover:text-primary">
					{project.title}
				</h3>

				<p className="text-muted">{project.shortDescription}</p>
			</div>

			<div className="flex flex-wrap gap-2">
				{project.technologies.slice(0, 4).map((tech) => (
					<span
						key={tech}
						className="
              rounded-full
              border
              border-white/10
              px-3
              py-1
              text-xs
              text-muted
            "
					>
						{tech}
					</span>
				))}
			</div>
		</Link>
	);
}
