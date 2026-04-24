import Link from "next/link"
import { AuthShell } from "@/components/auth/auth-shell"
import { AlertTriangle } from "lucide-react"

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  return (
    <AuthShell
      title="Authentication error"
      subtitle="Something went wrong while signing you in."
    >
      <div className="flex flex-col items-center gap-4 rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <p className="text-sm text-muted-foreground">
          {params.error
            ? `Error: ${params.error}`
            : "Unknown error. Please try again."}
        </p>
        <Link
          href="/auth/login"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Back to sign in
        </Link>
      </div>
    </AuthShell>
  )
}
