'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Philosophy() {
  return (
    <div className="bg-streetBlack min-h-screen pt-32 pb-24 text-silver font-sans leading-relaxed">
      <div className="container max-w-3xl mx-auto">
        <Link 
          href="/"
          className="inline-flex items-center text-silver hover:text-crispWhite transition-colors duration-300 font-mono text-sm mb-16 group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          RETURN
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispWhite mb-8 leading-tight">
            I design systems that turn complexity into execution.
          </h1>
          <div className="w-16 h-[1px] bg-border mb-12" />
          
          <p className="text-xl md:text-2xl text-crispWhite/90 mb-16 leading-relaxed">
            Operating at the intersection of infrastructure, education, and platform design, I build scalable frameworks grounded in real-world constraints.
          </p>

          {/* Integration of Identity */}
          <section className="mb-20">
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-silver/60 mb-6">The Architect Shift</h2>
            <div className="space-y-6">
              <p>
                My work sits at the convergence of technical systems, operational strategy, and global environments.
              </p>
              <p>
                I didn’t start as an engineer. My background spans public service, education, and international work across the United States and Brazil. That exposure created a different lens: I don’t approach systems as isolated technical problems—I approach them as structures that must function under human, institutional, and cultural pressure.
              </p>
              <p>
                This transition represents the loss of a simple narrative and the acquisition of a complex task: turning personal separation into wisdom and compassion. The realization emerged that leadership is not born from certainty but from the integrity maintained while walking through ambiguity. Identity is an integration of multiple histories rather than the rejection of one for another. I am no longer searching for identity; I am honoring the full arc of the seeker, the witness, and the builder.
              </p>
              <p className="text-crispWhite font-medium text-lg mt-8 p-6 border-l-4 border-silver bg-surface/30">
                The goal is simple: Build systems that work in the real world—and scale without breaking.
              </p>
            </div>
          </section>

          {/* What I Do Section */}
          <section className="mb-20">
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-silver/60 mb-8">What I Do</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-serif font-bold text-crispWhite mb-4">Infrastructure & System Design</h3>
                <p className="mb-4">I build lightweight, scalable systems using modern cloud architecture. My focus is on reducing operational friction while maintaining flexibility and control.</p>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base opacity-80">
                  <li>Serverless web infrastructure (GCP, Vercel)</li>
                  <li>Backend integrations (scheduling, content, automation)</li>
                  <li>Modular system design for long-term scalability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-crispWhite mb-4">Applied Education Systems</h3>
                <p className="mb-4">I design structured learning environments grounded in real-world use cases, particularly for professionals operating in high-stakes fields.</p>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base opacity-80">
                  <li>Domain-specific English systems (e.g., healthcare, technical fields)</li>
                  <li>Curriculum design focused on usability and repetition</li>
                  <li>Transitioning education from service → scalable system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-crispWhite mb-4">Global Systems Perspective</h3>
                <p className="mb-4">Working across U.S. and Brazilian contexts has shaped how I think about systems: they must adapt to their environment.</p>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base opacity-80">
                  <li>Cross-cultural operational awareness</li>
                  <li>Market and behavioral adaptation</li>
                  <li>Multilingual execution (English / Portuguese)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Deep Narrative Section */}
          <div className="w-full h-[1px] bg-border mb-20" />

          <section className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-crispWhite mb-8">Systems, Sovereignty, and Wholeness</h2>
            
            <div className="space-y-8">
              <p className="text-lg italic text-crispWhite/70">
                I didn’t arrive at systems thinking through theory—I arrived through pressure.
              </p>
              
              <p>
                Through fractured environments, shifting relationships, institutional constraints, and the constant need to adapt across cultures, I started to see a pattern: most breakdowns—personal or structural—come from misalignment. Between what is real and what is enforced. Between autonomy and control. Between the individual and the system they’re inside.
              </p>
              
              <h3 className="text-xl font-serif font-bold text-crispWhite mt-8">The Fragility of Access & Self-Built Foundations</h3>
              <p>
                A profound realization surfaced regarding the "access" I thought I possessed; for years, I had experienced social worlds through others rather than building my own entry points. Relying on another for social or environmental access creates a "learned helplessness" that becomes visible only when the link is severed. When external chaos struck, the lack of my own foundation became a liability. This was a direct test of discipline over intelligence. Fixating on wealth—not just as money, but as clarity and peace—became the primary defensive and offensive maneuver.
              </p>

              <h3 className="text-xl font-serif font-bold text-crispWhite mt-8">Structural Design over Reactive Friction</h3>
              <p>
                A definitive shift has occurred, moving away from the friction of chasing opportunities and toward the precision of design. The daily architecture is now an anchor: physical discipline is the baseline for psychological sovereignty. I have transitioned from merely living to building an asset. This is the reclamation of autonomy; I am no longer a guest in someone else’s life. Every intentional block of time is a step toward becoming a man who does not rely on being "chosen," but who rises because he has built a foundation that doesn't let go.
              </p>

              <div className="bg-streetBlack border-l-2 border-silver pl-6 my-10">
                <p className="font-mono text-sm uppercase tracking-widest text-silver/80 mb-4">That process forced a shift:</p>
                <ul className="space-y-2 text-crispWhite">
                  <li>From reacting → to observing</li>
                  <li>From forcing → to aligning</li>
                  <li>From fragmentation → to integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy in Practice */}
          <section className="mb-20">
            <h2 className="text-sm font-mono tracking-[0.2em] uppercase text-silver/60 mb-8">Philosophy in Practice</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-serif font-bold text-crispWhite mb-4">Integration of Ancient and Modern</h3>
                <p>There is a persistent synthesis of esoteric traditions (Taoism, Sufism) with cutting-edge technology (Agentic AI, MCP). The goal is to use modern tools to achieve ancient states of alignment and Wu Wei. There is no clean separation between internal state and external system. The way you build, the way you relate, and the way you move through the world all come from the same underlying structure.</p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-crispWhite mb-4">Libertarianism → Personal Sovereignty</h3>
                <p>At a practical level, I value control over my own time, energy, and direction. That shows up as building my own infrastructure instead of relying entirely on external platforms, designing income and work structures that prioritize independence, and maintaining boundaries that protect long-term stability over short-term approval.</p>
                <p className="mt-4 text-crispWhite italic">This isn’t ideological posturing—it’s operational. If you don’t control your inputs, you don’t control your outcomes.</p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-crispWhite mb-4">Against Technofeudalism → Structural Awareness</h3>
                <p>We’re moving into a world where power is increasingly abstract: Platforms control visibility. Algorithms control opportunity. Systems are designed for dependency, not ownership. I’m intentionally moving in the opposite direction—owning my distribution where possible, building systems that reduce reliance on centralized control, and understanding how infrastructure shapes behavior.</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section>
            <div className="bg-surface/10 border border-border p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold text-crispWhite mb-6">Toward Wholeness</h3>
              <div className="space-y-4 text-sm md:text-base">
                <p>Wholeness, for me, isn’t perfection. It’s alignment:</p>
                <ul className="list-disc list-inside opacity-80 mb-6">
                  <li>Between what I believe and how I act</li>
                  <li>Between the systems I build and the life I live</li>
                  <li>Between discipline and presence</li>
                </ul>
                <p>
                  I’m in a phase of consolidation and execution. Less noise. More structure. More ownership. Moving toward systems—internal and external—that are coherent, independent, and built to last.
                </p>
                <p className="mt-8 text-crispWhite font-medium">
                  If you’re working on something that requires structure, scalability, and real-world alignment, I’m open to connecting.
                </p>
                <div className="pt-8 mt-8 border-t border-border">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-sm font-mono tracking-widest text-crispWhite hover:text-silver transition-colors"
                  >
                    GET IN TOUCH <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  )
}

