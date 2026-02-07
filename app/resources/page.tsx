import Link from "next/link"
import { Shield, ArrowLeft, FileCheck, AlertTriangle, HelpCircle, BookOpen, ExternalLink } from "lucide-react"

const resources = [
  {
    icon: FileCheck,
    title: "How to Verify a Charity",
    description: "Learn the key steps to research and verify any charitable organization before donating.",
    items: [
      "Check if the charity is registered with the NC Secretary of State",
      "Look up the organization on IRS Tax Exempt Organization Search",
      "Review their Form 990 for financial transparency",
      "Research their programs and impact reports",
      "Check ratings on Charity Navigator or GuideStar"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Red Flags to Watch For",
    description: "Warning signs that may indicate a fraudulent or poorly managed charity.",
    items: [
      "High-pressure tactics demanding immediate donations",
      "Vague descriptions of how funds will be used",
      "Refusal to provide written information",
      "Names similar to well-known charities",
      "Cash-only donation requests",
      "Lack of contact information or physical address"
    ]
  },
  {
    icon: BookOpen,
    title: "Donate Safely",
    description: "Best practices for making secure and effective charitable contributions.",
    items: [
      "Use secure payment methods (credit card, check to organization)",
      "Keep records of all donations for tax purposes",
      "Set a giving budget and stick to it",
      "Consider recurring donations for sustained impact",
      "Research before giving to crowdfunding campaigns"
    ]
  }
]

const externalResources = [
  {
    name: "IRS Tax Exempt Organization Search",
    url: "https://www.irs.gov/charities-non-profits/tax-exempt-organization-search",
    description: "Verify 501(c)(3) tax-exempt status"
  },
  {
    name: "Charity Navigator",
    url: "https://www.charitynavigator.org/",
    description: "Independent charity ratings and evaluations"
  },
  {
    name: "GuideStar by Candid",
    url: "https://www.guidestar.org/",
    description: "Nonprofit profiles and financial data"
  },
  {
    name: "NC Secretary of State - Charities",
    url: "https://www.sosnc.gov/divisions/charitable_solicitation",
    description: "NC charity registration verification"
  },
  {
    name: "BBB Wise Giving Alliance",
    url: "https://give.org/",
    description: "Charity accountability standards"
  }
]

export default function ResourcesPage() {
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
          <p className="text-primary text-sm font-medium mb-3 tracking-wide">Resources</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Give Wisely, Give Safely
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Tools and information to help you make informed decisions about charitable giving.
          </p>
        </div>
      </section>

      {/* Main Resources */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.title} className="bg-secondary p-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">{resource.title}</h2>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{resource.description}</p>
                <ul className="space-y-3">
                  {resource.items.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm">
                      <span className="text-primary font-bold">{"•"}</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="bg-secondary py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Helpful Links</h2>
            <p className="text-muted-foreground">Trusted external resources for charity research and verification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {externalResources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background p-6 border border-border hover:border-primary/30 transition-colors group flex items-start gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-foreground mb-2">How do you verify charities?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our student team researches each organization by reviewing their registration status, financial records, program outcomes, and community reputation. We look for transparency, accountability, and demonstrated impact.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-foreground mb-2">Can I suggest a charity for verification?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes! We welcome suggestions from the community. Please contact us at hedayatsarwar@icloud.com with the charity name and any information you have about the organization.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-foreground mb-2">What if I suspect charity fraud?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Report suspected charity fraud to the NC Attorney General's Consumer Protection Division at 1-877-5-NO-SCAM or the FTC at reportfraud.ftc.gov.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="font-semibold text-foreground mb-2">Are donations to verified charities tax-deductible?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All charities on our verified list are registered 501(c)(3) organizations, making donations generally tax-deductible. However, always keep records and consult a tax professional for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-white/80 mb-8">Browse our list of verified charities and support causes that matter.</p>
          <Link 
            href="/charities" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/90"
          >
            View Verified Charities
          </Link>
        </div>
      </section>
    </main>
  )
}
