"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
	{ label: "About", href: "/about" },
	{ label: "Projects", href: "/projects" },
	{ label: "Resume", href: "/resume" },
	{ label: "Contact", href: "/contact" },
];

export function SiteHeader() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 glass backdrop-blur-xl">
			<div className="mx-auto flex h-16 max-w-main items-center justify-between px-6">
				<Link
					href="/"
					className="group font-semibold tracking-tight"
					onClick={() => setIsOpen(false)}
				>
					<span className="text-text">Karen</span>{" "}
					<span className="text-primary transition group-hover:text-accent">
						Byrd
					</span>
				</Link>

				<nav
					aria-label="Main navigation"
					className="hidden items-center gap-6 md:flex"
				>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm font-medium text-muted transition hover:text-accent"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<button
					type="button"
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					onClick={() => setIsOpen((current) => !current)}
					className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-border text-muted transition hover:border-primary/50 hover:text-accent md:hidden"
				>
					{isOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
			</div>

			{isOpen && (
				<nav
					aria-label="Mobile navigation"
					className="border-t border-white/10 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden"
				>
					<div className="mx-auto flex max-w-main flex-col gap-3">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setIsOpen(false)}
								className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-accent"
							>
								{item.label}
							</Link>
						))}
					</div>
				</nav>
			)}
		</header>
	);
}
