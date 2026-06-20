import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	children: ReactNode;
	href: string;
	variant?: "primary" | "secondary";
};

export function Button({
	children,
	href,
	variant = "primary",
	className = "",
	...props
}: ButtonProps) {
	const baseClasses =
		"inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";

	const variantClasses = {
		primary: "bg-primary text-white hover:opacity-90",
		secondary:
			"border border-white/10 bg-white/5 text-text hover:border-primary/50",
	};

	return (
		<Link
			href={href}
			className={`${baseClasses} ${variantClasses[variant]} ${className}`}
			{...props}
		>
			{children}
		</Link>
	);
}
