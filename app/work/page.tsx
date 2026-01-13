"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrowserWindow from "@/components/BrowserWindow";
import { CheckCircle } from "lucide-react";

const projectCategories = [
  {
    name: "Fintech & SaaS Platforms",
    description: "Demonstrating complex logic, financial security, and data handling.",
    projects: [
      {
        title: "Afrosoundtrack (Music Rights Engine)",
        url: "app.afrosoundtrack.com",
        challenge: "African artists lose billions in unclaimed royalties due to poor metadata.",
        solution: "Built a 'Digital Rights Management (DRM)' platform that tracks 1,600+ titles across 71+ global income sources.",
        tech: ["Automated Metadata Injection", "Royalty Split Algorithms", "Real-time Dashboarding"],
        imageColor: "bg-orange-500/10",
        tags: ["DRM", "Fintech", "Next.js"],
        imageSrc: "/images/afro.png"
      },
      {
        title: "AuditMe",
        url: "auditme.com.ng",
        challenge: "Nigerian SMEs struggle to get tax clearance because finding licensed auditors is slow and offline.",
        solution: "A digital platform connecting businesses directly with ICAN-certified auditors for fast, legally binding financial reports.",
        tech: ["Secure Document Vaults", "Auditor Matching Algorithm", "Automated Report Generation"],
        imageColor: "bg-blue-500/10",
        tags: ["Fintech", "Compliance", "React"],
        imageSrc: "/images/auditme.png"
      },
      {
        title: "Owa by Pepcode",
        url: "owabypepcode.com.ng",
        challenge: "Informal traders (market women) need simple bookkeeping.",
        solution: "An 'Offline-First' PWA that simplifies daily sales recording without complex accounting jargon.",
        tech: ["Offline-First (PWA)", "Simplified UX", "Local Storage"],
        imageColor: "bg-yellow-500/10",
        tags: ["Retail Tech", "PWA", "Offline-First"],
        imageSrc: "/images/owa.png"
      }
    ]
  },
  {
    name: "E-Commerce & Marketplaces",
    description: "Demonstrating high-volume transactions and logistics logic.",
    projects: [
      {
        title: "Yunimall (Campus Marketplace)",
        url: "yuni-mall.com",
        challenge: "Logistics within Nigerian universities is fragmented and expensive.",
        solution: "A hyper-local marketplace allowing student entrepreneurs to register businesses and coordinate campus-specific deliveries.",
        tech: ["Multi-Vendor Architecture", "Geo-fenced Logistics", "Student ID Verification"],
        imageColor: "bg-purple-500/10",
        tags: ["Marketplace", "Logistics", "React"],
        imageSrc: "/images/yunimall.png"
      }
    ]
  },
  {
    name: "Corporate & Digital Experience",
    description: "Demonstrating high-end design and brand authority.",
    projects: [
      {
        title: "Arc9 Consult",
        url: "arc9consult.com",
        challenge: "Architecture portfolio requiring heavy visual content without compromising speed.",
        solution: "High-fidelity image galleries, project filtration systems, and fast-loading assets.",
        tech: ["Next.js Image Optimization", "Lazy Loading", "CMS Integration"],
        imageColor: "bg-emerald-500/10",
        tags: ["Portfolio", "Architecture", "Design"],
        imageSrc: "/images/arc9.png"
      },
      {
        title: "Alpha Analytica",
        url: "aals.com.ng",
        challenge: "Establishing trust for a data and analytics consultancy.",
        solution: "Professional digital presence with clean corporate UI and lead generation funnels.",
        tech: ["Lead Gen Funnels", "Service Maps", "Corporate UI"],
        imageColor: "bg-cyan-500/10",
        tags: ["Corporate", "Analytics", "Marketing"],
        imageSrc: "/images/aals.png"
      }
    ]
  }
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Industrial Strength Engineering
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Shipped Code.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just design pretty screens. We build complex, data-heavy applications that handle real money and real users.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projectCategories.map((category, catIndex) => (
            <div key={category.name}>
              <div className="mb-12 border-b border-border pb-6">
                <h2 className="text-3xl font-bold font-heading mb-2">{category.name}</h2>
                <p className="text-muted-foreground italic">{category.description}</p>
              </div>

              <div className="space-y-24">
                {category.projects.map((project, index) => (
                  <section key={project.title} className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>

                      <div className="flex gap-2 mb-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-3xl font-bold font-heading">{project.title}</h3>

                      <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p><strong className="text-foreground">The Challenge:</strong> {project.challenge}</p>
                        <p><strong className="text-foreground">The Solution:</strong> {project.solution}</p>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-bold text-sm uppercase tracking-widest mb-4 text-primary">Key Technologies</h4>
                        <ul className="space-y-2">
                          {project.tech.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-muted-foreground">
                              <CheckCircle className="w-5 h-5 text-electric-teal shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <BrowserWindow url={project.url} imageColor={project.imageColor} imageSrc={project.imageSrc} />
                    </div>
                  </section>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
