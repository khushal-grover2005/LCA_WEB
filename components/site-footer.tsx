import Link from "next/link"
import { Flame } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Flame className="h-4 w-4" />
          </span>
          <span className="font-serif text-base font-semibold">MetalCycle</span>
          <span className="ml-2 text-xs text-muted-foreground">
            Life-cycle intelligence for the metals industry.
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/predictor" className="hover:text-foreground">
            Predictor
          </Link>
          <Link href="/dashboard" className="hover:text-foreground">
            Dashboard
          </Link>
          <Link href="/auth/login" className="hover:text-foreground">
            Sign in
          </Link>
          <a
            href="https://huggingface.co/spaces/khushal-grover2005/LCA_predictor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Research
          </a>
        </nav>
      </div>
    </footer>
  )
}
