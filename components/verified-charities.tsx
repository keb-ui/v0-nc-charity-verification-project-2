"use client"

import { useState } from "react"
import { 
  Apple, 
  Home, 
  Leaf, 
  GraduationCap, 
  Heart, 
  Users,
  Dog,
  Baby,
  Briefcase,
  Shirt,
  Globe,
  Coffee,
  CheckCircle,
  ExternalLink
} from "lucide-react"

type Category = "all" | "hunger" | "housing" | "education" | "environment" | "family" | "community"

interface Charity {
  name: string
  category: Category
  icon: typeof Apple
  description: string
  focus: string
  url: string
}

const charities: Charity[] = [
  {
    name: "Food Bank of Central & Eastern NC",
    category: "hunger",
    icon: Apple,
    focus: "Hunger Relief & Poverty Reduction",
    description: "Works with 700+ partner programs to provide food and advance long-term solutions to end hunger while empowering communities through advocacy.",
    url: "https://foodbankcenc.org/"
  },
  {
    name: "Inter-Faith Food Shuttle",
    category: "hunger",
    icon: Apple,
    focus: "Hunger Relief & Self-Sufficiency",
    description: "Recovers and distributes food, operates mobile markets, and teaches self-sufficiency through community farming and nutrition education.",
    url: "https://www.foodshuttle.org/"
  },
  {
    name: "A Place at the Table",
    category: "hunger",
    icon: Coffee,
    focus: "Pay-What-You-Can Community Cafe",
    description: "Provides healthy meals in a dignified, non-stigmatizing environment where guests choose what they pay.",
    url: "https://tableraleigh.org/"
  },
  {
    name: "Families Together",
    category: "housing",
    icon: Home,
    focus: "Homelessness & Housing Assistance",
    description: "Helps families with children transition from homelessness to permanent housing with continued support.",
    url: "https://www.familiestogethernc.org/"
  },
  {
    name: "The Green Chair Project",
    category: "housing",
    icon: Home,
    focus: "Household Furnishings & Financial Relief",
    description: "Provides furniture and household essentials to families transitioning into stable housing in Wake County.",
    url: "https://www.thegreenchair.org/"
  },
  {
    name: "Dorcas Ministries",
    category: "community",
    icon: Heart,
    focus: "Emergency Assistance",
    description: "Provides short-term help including shelter, clothing, food, fuel, transportation, and medical care for people facing emergencies.",
    url: "https://dorcascary.org/"
  },
  {
    name: "Triangle Land Conservancy",
    category: "environment",
    icon: Leaf,
    focus: "Environmental Conservation",
    description: "Protects lands and waters in the Triangle region, safeguarding clean water, preserving natural habitats, and connecting people with nature.",
    url: "https://triangleland.org/"
  },
  {
    name: "SAFEchild",
    category: "family",
    icon: Baby,
    focus: "Child Abuse Prevention",
    description: "Offers free prevention and intervention services that empower parents to create healthy, nurturing families in Wake County.",
    url: "https://www.safechildnc.org/"
  },
  {
    name: "StepUp Ministry",
    category: "community",
    icon: Briefcase,
    focus: "Job & Life-Skills Training",
    description: "Partners with adults and children to achieve stable lives through job readiness, life-skills training, and guidance.",
    url: "https://www.stepupministry.org/"
  },
  {
    name: "Note in the Pocket",
    category: "family",
    icon: Shirt,
    focus: "Clothing Assistance",
    description: "Supplies quality clothing to homeless and impoverished children and families with dignity and love.",
    url: "https://noteinthepocket.org/"
  },
  {
    name: "Friends of Wake County Animal Center",
    category: "community",
    icon: Dog,
    focus: "Animal Welfare & Rescue",
    description: "Provides medical care, boarding, and placement for shelter animals while promoting adoption and responsible pet ownership.",
    url: "https://www.friendsofwakeanimals.org/"
  },
  {
    name: "Communities In Schools of Wake County",
    category: "education",
    icon: GraduationCap,
    focus: "Education Support & Dropout Prevention",
    description: "Surrounds students with community support to help them stay in school and succeed in life.",
    url: "https://www.ciswake.org/"
  },
  {
    name: "Lutheran Services Carolinas",
    category: "community",
    icon: Globe,
    focus: "Refugee Resettlement & Integration",
    description: "Assists refugees with housing, employment, language support, mental health resources, and integration services.",
    url: "https://lscarolinas.net/new-americans-program"
  },
  {
    name: "Helping Horse",
    category: "family",
    icon: Heart,
    focus: "Therapeutic Riding",
    description: "Offers equine-assisted riding lessons fostering physical and emotional growth for individuals with special needs.",
    url: "https://helpinghorse.org/"
  },
  {
    name: "Haven House Services",
    category: "family",
    icon: Users,
    focus: "Youth Crisis & Development",
    description: "Helps youth ages 6-24 who are homeless, in crisis, or having difficulties, serving 2,000+ young people annually.",
    url: "https://www.havenhousenc.org/"
  }
]

const categories = [
  { id: "all" as Category, label: "All Charities" },
  { id: "hunger" as Category, label: "Hunger Relief" },
  { id: "housing" as Category, label: "Housing" },
  { id: "education" as Category, label: "Education" },
  { id: "environment" as Category, label: "Environment" },
  { id: "family" as Category, label: "Family Services" },
  { id: "community" as Category, label: "Community" },
]

export default function VerifiedCharities() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  
  const filteredCharities = activeCategory === "all" 
    ? charities 
    : charities.filter(c => c.category === activeCategory)

  return (
    <section id="charities" className="bg-secondary py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-medium mb-3 tracking-wide">Verified Organizations</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted Charities in North Carolina
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each organization has been researched and verified by our student team to ensure your donations make a real impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Charities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharities.map((charity) => (
            <a 
              key={charity.name}
              href={charity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group block"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <charity.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">{charity.name}</h3>
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-xs text-primary font-medium">{charity.focus}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{charity.description}</p>
              <div className="flex items-center gap-1 text-primary text-sm font-medium">
                <span>Visit Website</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Know a charity that should be verified? <a href="mailto:hedayatsarwar@icloud.com" className="text-primary hover:underline">Submit for review</a>
          </p>
        </div>
      </div>
    </section>
  )
}
