import Link from "next/link"
import { Shield, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <div
      className="relative h-[500px] sm:h-[550px] lg:h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+550px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[550px] lg:h-[600px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-550px)] lg:top-[calc(100vh-600px)]">
          <div className="bg-foreground py-12 px-6 md:px-12 lg:px-20 h-full w-full flex flex-col justify-between">
            <div className="max-w-7xl mx-auto w-full">
              {/* Top Section */}
              <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
                {/* Brand */}
                <div className="max-w-sm">
                  <div className="flex items-center gap-2 text-white mb-4">
                    <Shield className="w-6 h-6" />
                    <span className="text-lg font-semibold">NC Charity Verification</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    A student-led initiative promoting transparency and trust in charitable giving across North Carolina. Founded by Hedayat Sarwar.                           
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Mail className="w-4 h-4" />
                      <span>{"hedayatsarwar@icloud.com"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>North Carolina, USA</span>
                    </div>
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-12 sm:gap-16 lg:gap-20">
                  <div className="flex flex-col gap-3">
                    <h3 className="mb-1 text-white font-semibold text-sm">Navigation</h3>
                    <Link href="/" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Home
                    </Link>
                    <Link href="/about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      About Us
                    </Link>
                    <Link href="/charities" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Verified Charities
                    </Link>
                    <Link href="/contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Contact
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="mb-1 text-white font-semibold text-sm">Focus Areas</h3>
                    <Link href="/charities" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Education
                    </Link>
                    <Link href="/charities" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Family Services
                    </Link>
                    <Link href="/charities" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Housing
                    </Link>
                    <Link href="/charities" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Environment
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="mb-1 text-white font-semibold text-sm">Resources</h3>
                    <Link href="/resources" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      How to Verify
                    </Link>
                    <a href="https://ncdoj.gov/protecting-consumers/charity-fraud/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Report Fraud
                    </a>
                    <Link href="/resources" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      FAQ
                    </Link>
                    <Link href="/resources" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                      Donate Safely
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] text-white font-bold tracking-tight">
                VERIFY
              </h1>
              <p className="text-white/50 text-sm">
                2025 NC Charity Verification Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
