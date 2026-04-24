import Link from "next/link"
import { AuthShell } from "@/components/auth/auth-shell"
import { MailCheck } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <AuthShell
      title="Check your email"
      subtitle="We sent you a confirmation link to finish setting up your account."
    >
      <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card/50 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <MailCheck className="h-6 w-6" />
        </div>
        <p className="text-sm text-muted-foreground">
          Click the link in your inbox to confirm your email. After confirming, head back to sign in.
        </p>
        <Link
          href="/auth/login"
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Return to sign in
        </Link>
      </div>
    </AuthShell>
  )
}
