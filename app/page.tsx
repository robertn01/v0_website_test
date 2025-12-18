import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DeviceVisualization } from "@/components/device-visualization"
import { AlertTriangle, Check, Rocket, Atom, Beaker, Shield, Zap, Activity } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Atom className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">ELISA</span>
            <span className="text-sm text-muted-foreground">for Deep Space</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#specifications" className="hover:text-primary transition-colors">
              Specifications
            </a>
            <a href="#validation" className="hover:text-primary transition-colors">
              Validation
            </a>
            <a href="#considerations" className="hover:text-primary transition-colors">
              Considerations
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Info
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary">NASA-Validated Technology</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Astronaut Health Monitoring for Mars Missions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hybrid 3D-printed lateral flow immunoassay system enabling real-time immune function and biomarker
              detection in deep space environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
                <Rocket className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Research
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary">3 years</div>
                <div className="text-muted-foreground">Mission Duration</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15 sec</div>
                <div className="text-muted-foreground">Binding Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">0-1.8g</div>
                <div className="text-muted-foreground">Gravity Range</div>
              </div>
            </div>
          </div>
          <div>
            <DeviceVisualization />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Validated for Deep Space</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built on proven ISS technology with enhancements for long-duration Mars missions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <Beaker className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hybrid Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                3D-printed microfluidic cartridges with pre-manufactured antibody-coated membranes
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Radiation Hardened</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Lyophilized reagents and shielded photodetectors for 3-year Mars missions
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gravity-Independent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sealed microfluidic design validated at 0g, 0.38g, and 1.8g environments
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
              <Activity className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Multi-Biomarker</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monitors free light chains, C-reactive protein, and cortisol for comprehensive health assessment
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifications" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Engineered for the extreme conditions of interplanetary travel
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Physical Characteristics
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Dimensions</span>
                  <span className="text-foreground">250 × 200 × 150 mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Mass</span>
                  <span className="text-foreground">3.2 kg (device only)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Power</span>
                  <span className="text-foreground">12W @ 28VDC</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Operating Temp</span>
                  <span className="text-foreground">15-25°C</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Storage Temp</span>
                  <span className="text-foreground">2-8°C (reagents)</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Performance Metrics
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Binding Time</span>
                  <span className="text-foreground">15 seconds</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Total Assay Time</span>
                  <span className="text-foreground">{"<"}20 minutes</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Sample Volume</span>
                  <span className="text-foreground">50-100 µL</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Detection Method</span>
                  <span className="text-foreground">Chemiluminescent</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Sensitivity</span>
                  <span className="text-foreground">pg/mL range</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                3D Printing Integration
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Print Material</span>
                  <span className="text-foreground">Biocompatible Resin</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Layer Resolution</span>
                  <span className="text-foreground">50 µm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Print Time</span>
                  <span className="text-foreground">4-6 hours/cartridge</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Consumable Mass</span>
                  <span className="text-foreground">60% reduction vs traditional</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">ISS Validated</span>
                  <span className="text-foreground">VITA mission 2022</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Mission Parameters
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Mission Duration</span>
                  <span className="text-foreground">3 years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Test Capacity</span>
                  <span className="text-foreground">500-1000 assays</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Radiation Exposure</span>
                  <span className="text-foreground">0.67 mSv/day</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/40">
                  <span className="text-muted-foreground">Gravity Range</span>
                  <span className="text-foreground">0g - 1.8g</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Target: Mars 2030</span>
                  <span className="text-foreground">Development ongoing</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Validation Status */}
      <section id="validation" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Validation Status</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built on rigorous testing and proven spaceflight heritage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">ISS Deployment</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seralite-FLC ELISA validated on International Space Station for B-cell monitoring
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Parabolic Flight</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Antibody-antigen binding confirmed at 0g, 0.38g, and 1.8g across multiple test flights
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Biomarker Evidence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    53-61% viral reactivation rates documented in astronauts validates monitoring need
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Critical Considerations */}
      <section id="considerations" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Critical Considerations</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key challenges and mitigation strategies for Mars deployment
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">Reagent Stability Gap</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Current validation covers 6-12 months. Mars mission requires 3-year stability under continuous
                    radiation exposure (0.67 mSv/day).
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Mitigation: Accelerated aging studies and redundant reagent batches required before 2030 launch.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">Sample Processing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Traditional ELISA requires centrifugation (1,500g × 10 min). Microgravity phases demand alternative
                    debris filtration.
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Mitigation: 3D-printed membrane filters with passive pneumatic microvalves eliminate centrifuge
                    dependency.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">Quality Control</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    No secondary lab available for confirmation. False negatives could miss critical immune dysfunction.
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Mitigation: Dual-method confirmation protocols and mission-stable control samples mandatory.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">Development Timeline</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    Original report estimates 2-4 years. Critical validation gaps require extended timeline.
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Recommendation: 4-6 year development cycle. Not ready for Mars 2030 without accelerated validation
                    starting now.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Development Roadmap</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Phased approach to achieve flight readiness
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                phase: "Phase 1",
                title: "Hybrid Prototype Development",
                duration: "12-18 months",
                status: "In Progress",
              },
              {
                phase: "Phase 2",
                title: "Radiation Stability Validation",
                duration: "18-24 months",
                status: "Planned",
              },
              { phase: "Phase 3", title: "Microgravity Sample Prep", duration: "12-16 months", status: "Planned" },
              { phase: "Phase 4", title: "Flight Hardware Integration", duration: "18-24 months", status: "Planned" },
              { phase: "Phase 5", title: "Mission Readiness Review", duration: "6-12 months", status: "Future" },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold">
                        {item.phase}: {item.title}
                      </div>
                      <div className="text-sm text-muted-foreground">{item.duration}</div>
                    </div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "In Progress"
                        ? "bg-primary/20 text-primary"
                        : item.status === "Planned"
                          ? "bg-muted text-muted-foreground"
                          : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-primary/5 backdrop-blur-sm border-primary/20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Learn More?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Access full technical documentation, research papers, and collaboration opportunities for the ELISA deep
              space program.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Download Technical Brief
              </Button>
              <Button size="lg" variant="outline">
                Contact Research Team
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Atom className="w-6 h-6 text-primary" />
                <span className="font-bold">ELISA</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Advancing astronaut health monitoring for deep space exploration missions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Technical Specs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Program</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Collaborations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>Concept design for research and development purposes. Not approved for operational use.</p>
            <p className="mt-2">
              Confidence Assessment: 73/100 - Significant validation gaps remain before Mars 2030 readiness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
