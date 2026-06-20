import { Section } from "@/components/ui/Section";

const skills = [
	"Full-Stack Web Applications",
	"Next.js App Router",
	"TypeScript",
	"Tailwind CSS v4",
	"React",
	"Authentication & Authorization",
	"Firebase",
	"Supabase",
	"PostgreSQL",
	"Admin Dashboards",
	"Responsive UI",
	"Secure Application Design",
];

export default function AboutPage() {
	return (
		<>
			<Section>
				<div className="mx-auto max-w-5xl">
					<p className="mb-4 text-accent">About Me</p>

					<h1 className="mb-6 text-5xl font-bold text-gradient md:text-7xl">
						Building software with business sense.
					</h1>

					<p className="max-w-3xl text-xl leading-relaxed text-muted">
						I&apos;m a Full-Stack Software Engineer who combines modern web
						development, cybersecurity knowledge, and more than 20 years of
						operations leadership to build secure, user-focused applications
						that solve real-world business problems.
					</p>
				</div>
			</Section>

			<Section>
				<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
					<div>
						<p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
							My Journey
						</p>
						<h2 className="text-3xl font-bold md:text-4xl">
							A technical path shaped by real-world operations.
						</h2>
					</div>

					<div className="space-y-6 text-lg leading-relaxed text-muted">
						<p>
							My path into software engineering has not been traditional, and
							that is one of my greatest strengths. Before building production
							applications, I spent more than 20 years leading restaurant
							operations, managing teams, improving systems, and solving complex
							business challenges in fast-paced environments.
						</p>

						<p>
							That background changed the way I approach software. I do not just
							think about screens, components, or databases in isolation. I
							think about the people using the product, the workflow it
							supports, the business problem behind it, and the trust the
							application needs to earn.
						</p>

						<p>
							I earned a Bachelor&apos;s degree in Game Programming and a
							Master&apos;s degree in Cybersecurity. That combination gives me a
							strong foundation in programming, problem-solving, secure systems,
							and user-centered product development.
						</p>
					</div>
				</div>
			</Section>

			<Section>
				<div className="mx-auto max-w-5xl">
					<p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
						What I Build
					</p>

					<h2 className="mb-6 text-3xl font-bold md:text-4xl">
						Modern applications with purpose, structure, and polish.
					</h2>

					<p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted">
						I specialize in building full-stack web applications using Next.js,
						TypeScript, Tailwind CSS, and modern backend services. My projects
						include social platforms, nonprofit systems, business websites,
						admin dashboards, registration workflows, donation systems, and
						client-focused tools.
					</p>

					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{skills.map((skill) => (
							<div
								key={skill}
								className="rounded-2xl gradient-border p-4 text-sm text-muted shadow-sm"
							>
								{skill}
							</div>
						))}
					</div>
				</div>
			</Section>

			<Section>
				<div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
					<div className="rounded-3xl card p-8">
						<p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
							Founder
						</p>
						<h3 className="mb-4 text-2xl font-bold">Blue Byrd Development</h3>
						<p className="leading-relaxed text-muted">
							Through Blue Byrd Development, I build custom websites and web
							applications for businesses and organizations that need a
							stronger, more modern digital presence.
						</p>
					</div>
				</div>
			</Section>

			<Section>
				<div className="mx-auto max-w-5xl rounded-3xl card p-8 md:p-12">
					<p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
						My Difference
					</p>

					<h2 className="mb-6 text-3xl font-bold md:text-4xl">
						I build software from both the developer side and the business side.
					</h2>

					<div className="space-y-4 text-lg leading-relaxed text-muted">
						<p>
							What sets me apart is the combination of engineering skill,
							cybersecurity awareness, and real operational experience. I
							understand what it feels like when systems are inefficient,
							processes are unclear, and people need tools that actually make
							their work easier.
						</p>

						<p>
							That perspective helps me build applications that are not only
							clean and maintainable, but also practical, secure, and aligned
							with real user needs.
						</p>
					</div>
				</div>
			</Section>
		</>
	);
}
