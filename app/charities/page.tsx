import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import VerifiedCharities from "@/components/verified-charities"

export default function CharitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-foreground py-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Shield className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wide">NC Charity Verification</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-foreground py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-sm font-medium mb-3 tracking-wide">Verified Organizations</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Trusted Charities in North Carolina
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Each organization has been researched and verified by our student team. Click on any charity to visit their website and learn more.
          </p>
        </div>
      </section>

      {/* Charities Component */}
      <VerifiedCharities />
    </main>
  )
}
