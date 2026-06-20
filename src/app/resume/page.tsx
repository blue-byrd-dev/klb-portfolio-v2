import type { Metadata } from "next";
import {
	Briefcase,
	Code2,
	GraduationCap,
	Layers,
	Rocket,
	ShieldCheck,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
	title: "Resume | Karen Byrd",
	description:
		"Resume for Karen Byrd, Full-Stack Software Engineer building modern, secure, user-focused web applications.",
};

const skillGroups = [
	{
		title: "Frontend",
		skills: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS v4",
			"Responsive UI",
		],
	},
	{
		title: "Backend",
		skills: ["Node.js", "Express", "API Routes", "REST APIs", "Server Actions"],
	},
	{
		title: "Databases & Auth",
		skills: ["Firebase", "Supabase", "PostgreSQL", "Firestore", "Auth"],
	},
	{
		title: "Tools & Deployment",
		skills: ["Vercel", "Resend", "GitHub", "Git", "Modern Web Tooling"],
	},
	{
		title: "Security",
		skills: [
			"Cybersecurity Fundamentals",
			"Secure Forms",
			"Access Control",
			"Data Handling",
		],
	},
];

const projects = [
	{
		name: "Rainbow Galaxy",
		description:
			"Full-stack web application focused on user experience, modern design, and scalable application architecture.",
	},
	{
		name: "Forever Home",
		description:
			"Application project centered around practical real-world workflows, clean UI, and meaningful user interaction.",
	},
	{
		name: "Born To Ride",
		description:
			"Community-focused nonprofit website with event registration, donations, admin workflows, Firebase, and deployment on Vercel.",
	},
	{
		name: "Blue Byrd Development",
		description:
			"Business website and brand platform for a web development studio focused on modern, secure client websites.",
	},
	{
		name: "Cheerful Calculations",
		description:
			"Professional bookkeeping business website with service pages, SEO structure, contact flow, and strong brand positioning.",
	},
];

export default function ResumePage() {
	return (
		<main>
			<Section className="py-20">
				<div className="mx-auto max-w-5xl">
					<div className="mb-12">
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
							Resume
						</p>

						<h1 className="mb-6 text-4xl font-bold text-gradient md:text-6xl">
							Karen Byrd
						</h1>

						<p className="max-w-3xl text-lg leading-8 text-muted md:text-xl">
							Full-Stack Software Engineer with a background in software
							development, cybersecurity, and business leadership. Experienced
							in designing and building modern web applications using Next.js,
							React, TypeScript, and cloud technologies with a focus on
							performance, security, and user experience. Founder of Blue Byrd
							Development with over 20 years of operational leadership and a
							proven ability to turn complex ideas into production-ready
							solutions.
						</p>

						<div className="mt-8 flex flex-wrap gap-4">
							<Button href="/contact">Contact Me</Button>

							<Button href="/projects" variant="secondary">
								View Projects
							</Button>

							<Button
								href="/resume/Karen-Byrd-Resume.pdf"
								download
								variant="secondary"
							>
								Download Resume
							</Button>
						</div>
					</div>

					<div className="grid gap-6 md:grid-cols-3">
						<ResumeCard
							icon={<Code2 />}
							title="Full-Stack Development"
							text="Next.js, React, TypeScript, Tailwind, APIs, databases, auth, and deployment."
						/>
						<ResumeCard
							icon={<ShieldCheck />}
							title="Security-Minded"
							text="Cybersecurity graduate studies with a focus on secure, reliable application design."
						/>
						<ResumeCard
							icon={<Briefcase />}
							title="Business-Focused"
							text="Founder experience plus 20+ years leading real-world operations and teams."
						/>
					</div>
				</div>
			</Section>

			<Section className="py-16">
				<div className="mx-auto max-w-5xl space-y-12">
					<ResumeSection icon={<Layers />} title="Technical Skills">
						<div className="grid gap-5 md:grid-cols-2">
							{skillGroups.map((group) => (
								<div
									key={group.title}
									className="rounded-2xl border border-white/10 bg-white/3 p-5"
								>
									<h3 className="mb-3 font-semibold text-white">
										{group.title}
									</h3>
									<div className="flex flex-wrap gap-2">
										{group.skills.map((skill) => (
											<span
												key={skill}
												className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-muted"
											>
												{skill}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</ResumeSection>

					<ResumeSection icon={<Rocket />} title="Selected Project Experience">
						<div className="space-y-5">
							{projects.map((project) => (
								<div
									key={project.name}
									className="rounded-2xl border border-white/10 bg-white/3 p-6"
								>
									<h3 className="mb-2 text-xl font-semibold text-white">
										{project.name}
									</h3>
									<p className="leading-7 text-muted">{project.description}</p>
								</div>
							))}
						</div>
					</ResumeSection>

					<ResumeSection
						icon={<Briefcase />}
						title="Business & Founder Experience"
					>
						<div className="space-y-5">
							<div className="rounded-2xl border border-white/10 bg-white/3 p-6">
								<h3 className="mb-2 text-xl font-semibold text-white">
									Founder — Blue Byrd Development
								</h3>
								<p className="leading-7 text-muted">
									Founded and lead a software development company specializing
									in modern web applications, responsive websites, and secure,
									user-focused digital solutions. Manage projects from concept
									through deployment using technologies including Next.js,
									React, TypeScript, Tailwind CSS, Firebase, Supabase, and
									Vercel.
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/3 p-6">
								<h3 className="mb-2 text-xl font-semibold text-white">
									Restaurant Operations Leadership
								</h3>
								<p className="leading-7 text-muted">
									20+ years of leadership experience overseeing teams,
									operations, customer service, and process improvement in
									fast-paced environments. Developed strong skills in
									communication, project management, and solving complex
									business challenges.
								</p>
							</div>
						</div>
					</ResumeSection>

					<ResumeSection icon={<GraduationCap />} title="Education">
						<div className="space-y-5">
							<div className="rounded-2xl border border-white/10 bg-white/3 p-6">
								<h3 className="mb-2 text-xl font-semibold text-white">
									Master of Science in Cybersecurity
								</h3>
								<p className="text-muted">July 2026</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/3 p-6">
								<h3 className="mb-2 text-xl font-semibold text-white">
									Bachelor of Science in Game Programming
								</h3>
								<p className="text-muted">
									Foundation in programming, software development, interactive
									systems, and problem-solving.
								</p>
							</div>
						</div>
					</ResumeSection>

					<div className="rounded-3xl border border-primary/30 bg-linear-to-br from-primary/15 to-purple-500/10 p-8 md:p-10">
						<h2 className="mb-4 text-3xl font-bold text-white">
							Let&apos;s build something useful.
						</h2>
						<p className="mb-8 max-w-2xl leading-7 text-muted">
							I bring technical skill, business experience, and a
							security-minded approach to building applications that are
							practical, polished, and easy to use.
						</p>

						<div className="flex flex-wrap gap-4">
							<Button href="/contact">Get In Touch</Button>

							<Button href="/projects" variant="secondary">
								See My Work
							</Button>
						</div>
					</div>
				</div>
			</Section>
		</main>
	);
}

function ResumeSection({
	icon,
	title,
	children,
}: {
	icon: React.ReactNode;
	title: string;
	children: React.ReactNode;
}) {
	return (
		<section>
			<div className="mb-6 flex items-center gap-3">
				<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
					<div className="h-5 w-5">{icon}</div>
				</div>
				<h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
			</div>

			{children}
		</section>
	);
}

function ResumeCard({
	icon,
	title,
	text,
}: {
	icon: React.ReactNode;
	title: string;
	text: string;
}) {
	return (
		<div className="rounded-2xl border border-white/10 bg-white/3 p-6">
			<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
				<div className="h-5 w-5">{icon}</div>
			</div>
			<h2 className="mb-2 text-lg font-semibold text-white">{title}</h2>
			<p className="leading-7 text-muted">{text}</p>
		</div>
	);
}
