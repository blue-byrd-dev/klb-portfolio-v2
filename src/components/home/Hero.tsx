// src/components/home/Hero.tsx

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const heroStats = [
	{ value: "5+", label: "Production Projects" },
	{ value: "20+ Years", label: "Leadership Experience" },
	{ value: "2", label: "Businesses Founded" },
	{ value: "M.S.", label: "Cybersecurity" },
	{ value: "Next.js", label: "Primary Framework" },
];

export function Hero() {
	return (
		<Section className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
				<div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
				<div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
			</div>

			<div className="max-w-5xl">
				<p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
					Software | Cybersecurity Engineer • Founder • Problem Solver
				</p>

				<h1 className="mb-6 text-5xl font-bold leading-tight text-gradient md:text-7xl">
					Karen Byrd
				</h1>

				<p className="mb-6 max-w-3xl text-xl leading-8 text-muted md:text-2xl">
					I build modern, secure, user-focused web applications that solve
					real-world business problems.
				</p>

				<p className="mb-8 max-w-3xl text-base leading-7 text-muted md:text-lg">
					With experience spanning software engineering, business ownership,
					cybersecurity, and operational leadership, I bring both technical
					execution and practical business insight to every project I build.
				</p>

				<div className="mb-12 flex flex-col gap-4 sm:flex-row">
					<Button href="/projects">View Projects</Button>
					<Button href="/contact">Contact Me</Button>
				</div>

				<div className="grid gap-4 sm:grid-cols-3">
					{heroStats.map((stat) => (
						<div
							key={stat.label}
							className="rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur"
						>
							<p className="text-lg font-semibold text-white">{stat.value}</p>
							<p className="mt-1 text-sm text-muted">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
