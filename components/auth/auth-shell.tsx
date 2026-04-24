import Link from "next/link"
import type { ReactNode } from "react"
import { Flame } from "lucide-react"

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-background">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex min-h-dvh flex-col">
        <header className="flex items-center justify-between px-6 py-6 md:px-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Flame className="h-4 w-4" />
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight">
              MetalCycle
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Back to home
          </Link>
        </header>
        <main className="flex flex-1 items-center justify-center px-6 pb-16">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <h1 className="font-serif text-3xl font-semibold tracking-tight text-balance">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-sm text-muted-foreground text-pretty">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm shadow-xl shadow-primary/5">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
