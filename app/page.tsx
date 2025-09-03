'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/aurora-edge-logo.png"
            alt="Aurora Edge Group Logo"
            width={120}
            height={120}
            className="mb-6"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Build, Automate, and Scale Your Future
        </motion.h1>
        <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
          Aurora Edge Group helps entrepreneurs, families, and businesses unlock growth with cutting-edge automation, digital branding, and financial recovery systems.
        </p>
        <Button>Get Started Today</Button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-slate-300 text-lg text-center max-w-3xl mx-auto">
          At Aurora Edge Group, we believe in merging <strong>faith, family, and technology</strong> to create lasting impact. We design tools and systems that give people the freedom to focus on what truly matters—purpose, legacy, and loved ones.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "AI-Powered Business Automation", desc: "Streamline repetitive tasks, marketing, and outreach with intelligent automations that save time and increase revenue." },
            { title: "Lead Generation for Small Businesses", desc: "Done-for-you systems that attract, qualify, and deliver new clients weekly—helping you grow without the stress." },
            { title: "Surplus Funds Recovery", desc: "Assisting individuals in reclaiming lost funds from foreclosure and government cases, bringing financial relief and hope." },
            { title: "Digital Branding & Content", desc: "From websites and landing pages to automated social media systems—we help you stand out and scale fast." },
            { title: "Faith + Finance Personal Development", desc: "Journals, affirmations, and AI-powered coaching to help you grow in mindset, wealth, and spiritual alignment." },
          ].map((service, i) => (
            <Card key={i} className="hover:shadow-xl transition">
              <CardContent>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" /> {service.title}
                </h3>
                <p className="text-slate-300">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Future?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Take the first step toward growth, automation, and freedom with Aurora Edge Group.
        </p>
        <Button>Book a Free Call</Button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-400 text-sm">
        <p>© 2025 Aurora Edge Group – All Rights Reserved</p>
      </footer>
    </div>
  )
}
