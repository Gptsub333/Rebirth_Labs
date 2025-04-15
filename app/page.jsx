"use client"

import Image from "next/image"
import Link from "next/link"
import {
  siteConfig,
  heroSection,
  featuresSection,
  solutionsSection,
  scienceSection,
  testimonialsSection,
  aboutSection,
  contactSection,
  footerSection,
} from "./data.js"
import {
  FlaskRoundIcon as Flask,
  Minimize,
  Leaf,
  Instagram,
  Twitter,
  Linkedin,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <ScienceSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium uppercase uppercase-tracking transition-colors hover:text-black"
              onClick={(e) => {
                // Only handle anchor links
                if (item.href.startsWith("#")) {
                  e.preventDefault()
                  const targetId = item.href.substring(1)
                  const targetElement = document.getElementById(targetId)
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90"
          >
            Contact Us
          </Link>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white border-b">
          <nav className="container flex flex-col gap-4 px-4 py-4">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium uppercase uppercase-tracking transition-colors hover:text-black"
                onClick={(e) => {
                  // Only handle anchor links
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    const targetId = item.href.substring(1)
                    const targetElement = document.getElementById(targetId)
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: "smooth" })
                      setIsMenuOpen(false)
                    }
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90"
              onClick={(e) => {
                e.preventDefault()
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }
              }}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48" id="home">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
                {heroSection.title}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {heroSection.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#solutions"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-black/90"
              >
                {heroSection.ctaPrimary}
              </Link>
              <Link
                href="#science"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium transition-colors hover:bg-gray-100"
              >
                {heroSection.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:aspect-square">
            <Image
              src="/serene-skincare.png"
              width={800}
              height={800}
              alt="Woman applying skincare"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "flask":
        return <Flask className="h-10 w-10" />
      case "minimize":
        return <Minimize className="h-10 w-10" />
      case "leaf":
        return <Leaf className="h-10 w-10" />
      default:
        return null
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-black after:mt-2 after:mx-auto">
              {featuresSection.title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {featuresSection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
          {featuresSection.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                {getIcon(feature.icon)}
              </div>
              <h3 className="feature-title text-xl uppercase uppercase-tracking">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="solutions">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-black after:mt-2 after:mx-auto">
              {solutionsSection.title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {solutionsSection.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {solutionsSection.solutions.map((solution, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg border p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold italic tracking-wide">{solution.name}</h3>
                <p className="text-sm text-gray-500">{solution.description}</p>
              </div>
              <div className="mt-6 aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/serene-skin-essentials.png?height=600&width=600&query=minimalist skincare ${solution.name.toLowerCase()}`}
                  width={600}
                  height={600}
                  alt={solution.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScienceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="science">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="section-title text-3xl sm:text-4xl md:text-5xl relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-black after:mt-2 after:mx-auto">
                {scienceSection.title}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {scienceSection.description}
              </p>
            </div>
            <ul className="grid gap-6">
              {scienceSection.points.map((point, index) => (
                <li key={index}>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-semibold text-black/80 border-l-4 border-black pl-3">{point.title}</h3>
                    <p className="text-gray-500">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:aspect-square">
            <Image
              src="/luminous-skincare-lab.png"
              width={800}
              height={800}
              alt="Rebirth Labs science laboratory"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-black after:mt-2 after:mx-auto">
              {testimonialsSection.title}
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsSection.testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between rounded-lg border p-6">
              <div className="space-y-4">
                <p className="testimonial-quote text-gray-500 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={`/confident-architect.png?height=100&width=100&query=professional portrait of ${testimonial.author}`}
                      width={100}
                      height={100}
                      alt={testimonial.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-black after:mt-2 after:mx-auto">
              {aboutSection.title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {aboutSection.description}
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 border-l-4 border-black pl-6 py-2 italic text-lg">{aboutSection.mission}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutSection.values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transition-all hover:shadow-md"
                  >
                    <CheckCircle className="h-6 w-6 text-black mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="value-title text-lg">{value}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {index === 0 && "We pursue excellence in all scientific endeavors."}
                        {index === 1 && "We believe in minimalist solutions that deliver maximum results."}
                        {index === 2 && "We are committed to sustainable practices and materials."}
                        {index === 3 && "We are transparent about our ingredients and processes."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {aboutSection.team.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 text-center">
              <div className="h-40 w-40 overflow-hidden rounded-full">
                <Image
                  src={`/confident-architect.png?height=400&width=400&query=professional portrait of ${member.name}`}
                  width={400}
                  height={400}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "instagram":
        return <Instagram className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl relative inline-block after:content-[''] after:block after:w-1/3 after:h-1 after:bg-black after:mt-2 after:mx-auto">
              {contactSection.title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {contactSection.description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Form Column */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-bold mb-4 text-center">Get in Touch</h3>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="contact-label text-sm uppercase text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="contact-label text-sm uppercase text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="contact-label text-sm uppercase text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90"
                >
                  Send Message
                </button>
              </form>
            </div>

            <h3 className="text-xl font-bold mb-4 text-center">Contact Details</h3>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <p className="text-gray-700 font-medium tracking-wide">{contactSection.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <p className="text-gray-700">{contactSection.phone}</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                  <p className="text-gray-700">{contactSection.address}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              {contactSection.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors hover:bg-gray-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(social.icon)}
                  <span className="sr-only">{social.platform}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="overflow-hidden rounded-xl aspect-square">
            <Image
              src="/sleek-science-space.png"
              width={600}
              height={600}
              alt="Contact us"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <p className="text-sm font-light italic text-gray-500">{footerSection.copyright}</p>
        <nav className="flex gap-4 sm:gap-6">
          {footerSection.links.map((link, index) => (
            <Link key={index} href={link.href} className="text-sm font-medium hover:underline">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
