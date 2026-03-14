import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-tight">
          Khadija Javaid
        </h1>

        <nav className="flex gap-6 text-sm text-neutral-400">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/education">Education</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}