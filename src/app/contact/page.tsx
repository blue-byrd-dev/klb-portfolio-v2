"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsBluesky } from "react-icons/bs";
import { Section } from "@/components/ui/Section";

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		value: "Send me an email",
		href: "mailto:k.byrd@bluebyrddevelopment.com",
	},
	{
		icon: Phone,
		title: "Phone",
		value: "+1 (830) 282-1648",
		href: "tel:+15127838823",
	},
	{
		icon: MapPin,
		title: "Location",
		value: "Pleasanton, TX",
		href: "https://maps.google.com",
	},
];

const socialLinks = [
	{
		icon: FaGithub,
		label: "GitHub",
		href: "https://github.com/klb-dev?tab=repositories",
	},
	{
		icon: FaLinkedin,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/karen-byrd-dev88/",
	},
	{
		icon: BsBluesky,
		label: "Bluesky",
		href: "https://bsky.app/profile/klb88.bsky.social",
	},
];

export default function ContactPage() {
	const [submitted, setSubmitted] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: formData.get("name"),
				email: formData.get("email"),
				subject: formData.get("subject"),
				message: formData.get("message"),
			}),
		});

		if (!response.ok) {
			alert("Something went wrong.");
			return;
		}

		setSubmitted(true);
		form.reset();
	}

	return (
		<>
			<Section>
				<div className="mx-auto max-w-5xl">
					<p className="mb-4 text-accent">Contact</p>

					<h1 className="mb-6 text-5xl font-bold text-gradient md:text-7xl">
						Let&apos;s build something useful.
					</h1>

					<p className="max-w-3xl text-xl leading-relaxed text-muted">
						Have a project, opportunity, or collaboration in mind? Send me a
						message and I&apos;ll get back to you as soon as possible.
					</p>
				</div>
			</Section>

			<Section>
				<div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
					<div className="glass-gradient rounded-3xl p-8">
						<h2 className="mb-4 text-3xl font-bold">Get in touch</h2>

						<p className="mb-8 leading-relaxed text-muted">
							I&apos;m open to full-stack software engineering opportunities,
							technical collaborations, and projects where clean, secure, and
							user-focused software can make a real impact.
						</p>

						<div className="space-y-4">
							{contactInfo.map((item) => {
								const Icon = item.icon;

								return (
									<a
										key={item.title}
										href={item.href}
										target={item.title === "Location" ? "_blank" : undefined}
										rel={
											item.title === "Location"
												? "noopener noreferrer"
												: undefined
										}
										className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-primary/50 hover:bg-white/10"
									>
										<span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
											<Icon size={20} />
										</span>

										<span>
											<span className="min-w-0">
												<span className="block text-sm text-muted">
													{item.title}
												</span>
												<span className="block break-all font-medium text-text">
													{item.value}
												</span>
											</span>
										</span>
									</a>
								);
							})}
						</div>

						<div className="mt-8 flex gap-3">
							{socialLinks.map((item) => {
								const Icon = item.icon;

								return (
									<a
										key={item.label}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={item.label}
										className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition hover:border-primary/50 hover:text-accent"
									>
										<Icon size={20} />
									</a>
								);
							})}
						</div>
					</div>

					<div className="glass-gradient rounded-3xl p-8">
						{submitted ? (
							<div className="flex min-h-105 flex-col items-center justify-center text-center">
								<CheckCircle2 className="mb-4 text-primary" size={48} />

								<h2 className="mb-3 text-3xl font-bold">Message received.</h2>

								<p className="max-w-md text-muted">
									Thanks for reaching out. I&apos;ll review your message and get
									back to you soon.
								</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-5">
								<div className="grid gap-5 md:grid-cols-2">
									<div>
										<label
											htmlFor="name"
											className="mb-2 block text-sm font-medium text-muted"
										>
											Name
										</label>
										<input
											id="name"
											name="name"
											type="text"
											required
											placeholder="Jane Doe"
											className="w-full max-w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition placeholder:text-muted/60 focus:border-primary"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="mb-2 block text-sm font-medium text-muted"
										>
											Email
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											placeholder="jane@example.com"
											className="w-full max-w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition placeholder:text-muted/60 focus:border-primary"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="mb-2 block text-sm font-medium text-muted"
									>
										Subject
									</label>
									<input
										id="subject"
										name="subject"
										type="text"
										required
										placeholder="Project inquiry"
										className="w-full max-w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition placeholder:text-muted/60 focus:border-primary"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="mb-2 block text-sm font-medium text-muted"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										required
										placeholder="Tell me a little about what you're working on..."
										className="w-full max-w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition placeholder:text-muted/60 focus:border-primary"
									/>
								</div>

								<button
									type="submit"
									className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90 md:w-auto"
								>
									Send Message
									<Send size={18} />
								</button>
							</form>
						)}
					</div>
				</div>
			</Section>
		</>
	);
}
