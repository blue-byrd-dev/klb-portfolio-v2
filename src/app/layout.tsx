import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Karen Byrd | Full-Stack Software Engineer",
		template: "%s | Karen Byrd",
	},
	description:
		"Full-Stack Software Engineer building modern, secure, user-focused web applications with strong design, leadership, and business operations experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased">
				{children}
			</body>
		</html>
	);
}
