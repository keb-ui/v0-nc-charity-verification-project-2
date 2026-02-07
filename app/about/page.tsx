import Link from "next/link"
import Image from "next/image"
import { Shield, ArrowLeft, Users, Target, Heart, CheckCircle } from "lucide-react"

export default function AboutPage() {
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
          <p className="text-primary text-sm font-medium mb-3 tracking-wide">About Us</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Student-Led. Community-Focused.
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            We are dedicated to helping individuals and organizations identify trustworthy and legitimate charities across North Carolina.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src="/images/open-hands-reaching.png"
                  alt="Open hands reaching out together in community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The NC Charity Verification Project researches and reviews nonprofit organizations to promote transparency, reduce the risk of donation fraud, and ensure that support reaches causes that truly make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to make responsible giving easier by providing clear, accessible information about verified charities working in areas such as education, housing, healthcare, food security, environmental protection, and community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe in open, honest information about charitable organizations and their impact.
              </p>
            </div>
            <div className="bg-background p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our verification process is thorough and unbiased, ensuring accurate assessments.
              </p>
            </div>
            <div className="bg-background p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We serve to strengthen local communities and build trust between donors and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About Us </h2>
          <div className="text-muted-foreground leading-relaxed mb-12 text-left max-w-2xl mx-auto flex flex-col gap-4">
            <p>
              I started the NC Charity Verification Project because of something that stuck with me. A close friend of mine donated to a charity that looked completely real. The website looked good, the story sounded legit, and the cause mattered to them. Later we found out it was fake.
            </p>
            <p>
              The money was gone. That part was frustrating, but what really bothered me was that the people who needed help got nothing. It felt pointless.
            </p>
            <p>
              At the time I was lost and honestly didn't know what I could do to make any real difference. I was in community college at the time. I just kept thinking about how easy it was to fake a charity online — anyone could fall for it. I started looking into how to check if charities were real and talking to friends about it when donations came up.
            </p>
            <p>
              One thing led to another and that's how the project started. It wasn't meant to be big or impressive — I just wanted to build something that could help people avoid the same mistake my friend fell for.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-secondary p-8 max-w-sm w-full">
              <div className="w-16 h-16 bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Hedayat Sarwar</h3>
              <p className="text-sm text-primary mb-2">Founder & Owner</p>
              <p className="text-sm text-muted-foreground">Leading the mission to promote transparency in charitable giving across North Carolina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Give with Confidence?</h2>
          <p className="text-white/80 mb-8">Explore our verified charities and make a difference in North Carolina.</p>
          <Link 
            href="/#charities" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/90"
          >
            View Verified Charities
          </Link>
        </div>
      </section>
    </main>
  )
}
