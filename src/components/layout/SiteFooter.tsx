export function SiteFooter() {
	return (
		<footer className="glass">
			<div className="mx-auto flex max-w-main flex-col gap-3 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
				<p>© {new Date().getFullYear()} Karen Byrd. All rights reserved.</p>

				<p>
					Built with Next.js, TypeScript, Tailwind CSS, and deployed on Vercel.
				</p>
			</div>
		</footer>
	);
}
