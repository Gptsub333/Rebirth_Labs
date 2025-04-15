export const siteConfig = {
  name: "Rebirth Labs",
  description:
    "Science-driven skincare solutions that blend advanced dermatological science with elegant user experience.",
  tagline: "The future of skincare is here.",
  navigation: [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "Science", href: "#science" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
}

export const heroSection = {
  title: "Minimalist Skincare. Maximum Results.",
  description:
    "At Rebirth Labs, we've reimagined skincare through the lens of cutting-edge science. Our all-in-one solutions eliminate complexity while delivering powerful, visible results.",
  ctaPrimary: "Shop Now",
  ctaSecondary: "Learn More",
  image: "/images/hero-product.jpg",
}

export const featuresSection = {
  title: "Science-Driven Innovation",
  description:
    "Our formulations are developed by dermatologists and biochemists who understand that effective skincare doesn't need to be complicated.",
  features: [
    {
      title: "Clinically Proven",
      description: "Every formulation undergoes rigorous clinical testing to ensure efficacy and safety.",
      icon: "flask",
    },
    {
      title: "Minimalist Formulas",
      description: "We use only essential, high-performance ingredients with proven benefits.",
      icon: "minimize",
    },
    {
      title: "Sustainable Approach",
      description: "Environmentally conscious packaging and ethically sourced ingredients.",
      icon: "leaf",
    },
  ],
}

export const productsSection = {
  title: "Our Products",
  description: "Discover our range of minimalist skincare solutions, designed for maximum results.",
  products: [
    {
      name: "Rebirth Serum",
      description: "A powerful all-in-one serum that rejuvenates and revitalizes your skin.",
      price: "$49.99",
      image: "/images/product-serum.jpg",
    },
    {
      name: "Rebirth Cream",
      description: "A deeply hydrating cream that nourishes and protects your skin.",
      price: "$39.99",
      image: "/images/product-cream.jpg",
    },
    {
      name: "Rebirth Complex",
      description: "A revolutionary complex that balances the microbiome and strengthens the skin barrier.",
      price: "$59.99",
      image: "/images/product-complex.jpg",
    },
  ],
}

export const scienceSection = {
  title: "The Science Behind Rebirth",
  description: "Our laboratory combines traditional botanical knowledge with cutting-edge dermatological research.",
  points: [
    {
      title: "Bioactive Compounds",
      description: "We isolate and stabilize the most effective natural compounds to ensure maximum potency.",
    },
    {
      title: "Delivery Systems",
      description: "Our proprietary delivery mechanisms ensure active ingredients penetrate to the optimal skin depth.",
    },
    {
      title: "Synergistic Formulations",
      description: "Each ingredient is carefully selected to work in harmony, amplifying overall effectiveness.",
    },
  ],
  image: "/images/lab-science.jpg",
}

export const testimonialsSection = {
  title: "What Our Customers Say",
  testimonials: [
    {
      quote:
        "I've been using Rebirth Labs products for a month now, and I've already seen a noticeable difference in my skin. It's brighter, smoother, and more hydrated.",
      author: "Jane Doe",
      role: "Skincare Enthusiast",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "I love that Rebirth Labs products are so simple and easy to use. I don't have to spend hours on my skincare routine anymore.",
      author: "John Smith",
      role: "Busy Professional",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "I'm so impressed with the science behind Rebirth Labs products. I know that I'm using products that are actually effective.",
      author: "Sarah Lee",
      role: "Dermatologist",
      image: "/images/testimonial-3.jpg",
    },
  ],
}

export const aboutSection = {
  title: "About Us",
  description:
    "Founded by a team of dermatologists and biochemists, Rebirth Labs was born from a simple observation: skincare had become needlessly complicated. We set out to create solutions that harness the most advanced scientific innovations while eliminating unnecessary steps and ingredients.",
  mission:
    "To revolutionize skincare through science-driven simplicity, creating formulations that deliver exceptional results with minimal environmental impact.",
  values: ["Scientific Excellence", "Elegant Simplicity", "Environmental Responsibility", "Transparent Formulation"],
  team: [
    {
      name: "Dr. Sarah Chen",
      role: "Founder & Chief Scientific Officer",
      bio: "Harvard-trained dermatologist with 15 years of research experience in skin barrier function.",
      image: "/images/team-sarah.jpg",
    },
    {
      name: "Dr. Marcus Williams",
      role: "Head of Product Development",
      bio: "Biochemist specializing in natural compound extraction and stabilization techniques.",
      image: "/images/team-marcus.jpg",
    },
    {
      name: "Olivia Park",
      role: "Chief Design Officer",
      bio: "Former Apple designer bringing minimalist elegance to the Rebirth Labs experience.",
      image: "/images/team-olivia.jpg",
    },
  ],
}

export const contactSection = {
  title: "Contact Us",
  description:
    "Interested in partnering with Rebirth Labs or learning more about our approach? We'd love to hear from you.",
  email: "hello@rebirthlabs.com",
  phone: "+1 (800) 555-SKIN",
  socialMedia: [
    { platform: "Instagram", url: "https://instagram.com/rebirthlabs", icon: "instagram" },
    { platform: "Twitter", url: "https://twitter.com/rebirthlabs", icon: "twitter" },
    { platform: "Facebook", url: "https://facebook.com/rebirthlabs", icon: "facebook" },
  ],
}

export const footerSection = {
  copyright: `© ${new Date().getFullYear()} Rebirth Labs. All rights reserved.`,
  links: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Contact", href: "#contact" },
  ],
}
