"use client"

import React from "react"

import Link from "next/link"
import { Shield, ArrowLeft, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open email client with pre-filled information
    const mailtoLink = `mailto:hedayatsarwar@icloud.com?subject=${encodeURIComponent(formData.subject || "Contact from NC Charity Verification")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
  }

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
          <p className="text-primary text-sm font-medium mb-3 tracking-wide">Contact Us</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Have questions, suggestions, or want to submit a charity for verification? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <h2 className="text-xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:hedayatsarwar@icloud.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      hedayatsarwar@icloud.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">North Carolina, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-secondary">
                <h3 className="font-semibold text-foreground mb-3">Submit a Charity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Know a legitimate charity that should be on our verified list? Send us their name, website, and any information you have about their work.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              {submitted ? (
                <div className="bg-secondary p-12 text-center">
                  <div className="w-16 h-16 bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Email Client Opened</h2>
                  <p className="text-muted-foreground mb-6">
                    Your email client should have opened with the message pre-filled. If not, please email us directly at hedayatsarwar@icloud.com.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary hover:underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Charity Submission / Question / Feedback"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Note */}
      <section className="bg-secondary py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            The NC Charity Verification Project is a student-led initiative serving communities across North Carolina. 
            We typically respond to inquiries within 2-3 business days.
          </p>
        </div>
      </section>
    </main>
  )
}
