import Image from "next/image"
import { CheckCircle, Search, FileCheck, Users } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Research & Review",
    description: "We thoroughly research nonprofit organizations to ensure legitimacy and transparency."
  },
  {
    icon: FileCheck,
    title: "Verification Process",
    description: "Our rigorous verification process helps reduce the risk of donation fraud."
  },
  {
    icon: CheckCircle,
    title: "Clear Information",
    description: "We provide accessible information about verified charities working in NC."
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Supporting causes in education, housing, healthcare, food security, and more."
  }
]

export default function Featured() {
  return (
    <div id="mission" className="bg-background py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="flex-1 w-full">
            <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
              <Image
                src="/images/open-hands-reaching.png"
                alt="Open hands reaching out together in community"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 w-full">
            <p className="text-sm text-primary font-medium mb-3 tracking-wide">Our Mission</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight text-balance">
              Promoting Transparency in Charitable Giving
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              We are a student-led initiative dedicated to helping donors make informed decisions. 
              By researching and verifying nonprofits, we ensure your support reaches causes that 
              truly make a difference in North Carolina communities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
