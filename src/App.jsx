import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Github, ExternalLink, GraduationCap, FolderGit2, Award, ChevronRight, Download, Keyboard } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const NAME = 'Girish Raut'
const BIO = 'Computer Engineering Student. As a recent graduate, I am eager to apply my technical skills and enthusiasm for learning in a challenging role, contributing to the success of a dynamic team while further developing my expertise.'

const EDUCATION = [
  {
    degree: 'B.E. in Computer Engineering (2025)',
    school: 'Savitribai Phule Pune University',
  },
  {
    degree: 'HSC, Maharashtra Board (2021)',
    school: 'Sindhudurg Sainik School and Junior College',
  },
  {
    degree: 'SSC, Maharashtra (2019)',
    school: 'Sindhudurg Sainik School',
  },
]

const SKILLS = [
  'Java', 'GitHub', 'HTML', 'Teamwork', 'REST-API', 'Development', 'Management', 'SQL', 'SDLC', 'Code', 'Team', 'Git'
]

const PROJECTS = [
  {
    title: 'Student Attrition System',
    stack: ['Python', 'Streamlit', 'Cloud'],
    description:
      'Predicts student dropout risks and generates intervention reports to aid decision-making.',
    link: '#projects',
  },
  {
    title: 'Portfolio Website',
    stack: ['HTML', 'CSS', 'Lordicon'],
    description:
      'Interactive portfolio with animated project cards, timeline layout, and flip-card effects.',
    link: '#projects',
  },
  {
    title: 'Budget Management System',
    stack: ['React', 'AppWrite', 'Vercel'],
    description:
      'Tracks factory expenses and generates monthly Excel reports with modular dashboards.',
    link: '#projects',
  },
]

const CERTS = [
  'Infosys Java and XML',
  'TNS Training Program Salesforce',
  'Vishvacon International Conference',
  'Race International Conference',
]

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-800/80 text-slate-100 px-3 py-1 text-xs font-medium ring-1 ring-slate-700/80">
      {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div className={`mx-auto max-w-3xl ${align === 'left' ? 'text-left' : 'text-center'}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold tracking-wider text-sky-400 uppercase"
        >
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-2 text-3xl sm:text-4xl font-bold text-slate-100"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className="mt-3 text-slate-300">{subtitle}</p>
      )}
    </div>
  )
}

function Typewriter({ text, speed = 40 }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    setIdx(0)
    const interval = setInterval(() => {
      setIdx((i) => (i < text.length ? i + 1 : i))
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  const shown = text.slice(0, idx)
  const done = idx >= text.length

  return (
    <div className="font-mono text-sm sm:text-base text-slate-200">
      <span>{shown}</span>
      <span className={`inline-block w-[8px] h-4 sm:h-5 bg-slate-200 ml-1 align-[-2px] ${done ? 'opacity-0' : 'animate-pulse'}`}></span>
    </div>
  )
}

function KeyboardWave() {
  const keys = ['J', 'A', 'V', 'A', ' ', 'C', 'O', 'D', 'E']
  return (
    <div className="flex items-center gap-1.5">
      {keys.map((k, i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.07 }}
          className="grid place-items-center w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-slate-800/80 ring-1 ring-slate-700 text-slate-200 text-xs sm:text-sm"
        >
          {k}
        </motion.div>
      ))}
    </div>
  )
}

export default function App() {
  const codeLine = 'const developer = { role: "Programmer", loves: ["Java", "APIs", "Teamwork"] }'

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-xl text-slate-100">{NAME}</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-sky-300 transition-colors">About</a>
            <a href="#education" className="hover:text-sky-300 transition-colors">Education</a>
            <a href="#skills" className="hover:text-sky-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-sky-300 transition-colors">Projects</a>
            <a href="#certs" className="hover:text-sky-300 transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-sky-300 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-slate-950 text-sm font-semibold shadow-sm hover:bg-sky-400 transition-colors">
            <Mail size={16} /> Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-18 sm:py-24">
          <div className="relative z-10">
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-sm font-semibold tracking-widest text-sky-400 uppercase">
              Portfolio
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {NAME}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl">
              {BIO}
            </motion.p>

            {/* Typewriter + keyboard wave */}
            <div className="mt-6 space-y-3">
              <Typewriter text={codeLine} />
              <div className="flex items-center gap-3 text-slate-300">
                <Keyboard size={18} className="text-slate-400" />
                <KeyboardWave />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-950 px-5 py-3 text-sm font-semibold hover:bg-white transition-colors">
                View Projects <ChevronRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 ring-1 ring-slate-700 px-5 py-3 text-sm font-medium hover:bg-slate-800 transition-colors">
                Contact Me <Mail size={16} />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/30 px-5 py-3 text-sm font-medium hover:bg-sky-500/15 transition-colors">
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          {/* 3D Hero (scene) */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-slate-800 bg-slate-900/60">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>

            {/* 3D Profile Avatar bubble (can be swapped with a coding-boy Spline URL) */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 w-40 h-40 rounded-2xl overflow-hidden ring-1 ring-slate-800 bg-slate-900/70">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="About" title="A quick intro" subtitle="Driven by problem-solving, clean code, and building useful things." />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-slate-900/50 rounded-xl ring-1 ring-slate-800 p-6">
              <p className="text-slate-300 leading-relaxed">
                I enjoy turning ideas into real, usable products. My interests include backend services, intuitive frontend experiences, and deploying projects so people can actually use them. I collaborate well with teams and love learning new tools and patterns that improve developer experience.
              </p>
            </div>
            <div className="rounded-xl ring-1 ring-slate-800 p-0 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
              <div className="h-44">
                {/* 3D animated profile icon of a programmer (replace URL with your coding-boy Spline) */}
                <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3 font-semibold text-slate-100"><MapPin size={18} /> Pune, Maharashtra, India</div>
                <div className="mt-2 flex items-center gap-3 text-slate-300"><Mail size={18} /> Email</div>
                <div className="mt-4 flex gap-3">
                  <a href="https://www.linkedin.com" target="_blank" className="inline-flex items-center gap-2 text-sky-300 hover:underline"><Linkedin size={18}/>LinkedIn</a>
                  <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 text-slate-200 hover:underline"><Github size={18}/>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Education" title="Academic journey" />
          <ol className="relative mt-10 border-s border-slate-800 ml-4">
            {EDUCATION.map((e, i) => (
              <li key={i} className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-slate-950 ring-4 ring-slate-950">
                  <GraduationCap size={14} />
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-slate-100">{e.degree}</h3>
                <p className="text-slate-300">{e.school}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Skills" title="Tech and teamwork" />
          <div className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900/60 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Projects" title="Things I’ve built" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <motion.a
                key={p.title}
                href={p.link}
                whileHover={{ y: -4 }}
                className="group rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-100 font-semibold"><FolderGit2 size={18} />{p.title}</div>
                  <ExternalLink size={16} className="text-slate-500 group-hover:text-slate-300" />
                </div>
                <p className="mt-3 text-sm text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-200 ring-1 ring-slate-700">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certs" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Certificates" title="Achievements and events" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTS.map((c) => (
              <div key={c} className="rounded-xl bg-slate-900/60 ring-1 ring-slate-800 p-5 flex items-start gap-3">
                <Award className="text-amber-400" size={20} />
                <span className="text-slate-200 font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Contact" title="Let’s connect" subtitle="I’m open to roles, collaborations, and interesting problems to solve." />
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="mailto:someone@example.com" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 text-slate-950 px-4 py-3 text-sm font-semibold hover:bg-sky-400"><Mail size={18}/>Email</a>
            <a href="https://www.linkedin.com" target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 ring-1 ring-slate-700 px-4 py-3 text-sm text-slate-100 font-medium hover:bg-slate-800"><Linkedin size={18}/>LinkedIn</a>
            <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 ring-1 ring-slate-700 px-4 py-3 text-sm text-slate-100 font-medium hover:bg-slate-800"><Github size={18}/>GitHub</a>
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-900 ring-1 ring-slate-800 px-4 py-3 text-sm text-slate-200"><MapPin size={18}/> Pune, Maharashtra, India</div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-slate-400">© {new Date().getFullYear()} {NAME}. All rights reserved.</footer>
    </div>
  )
}
