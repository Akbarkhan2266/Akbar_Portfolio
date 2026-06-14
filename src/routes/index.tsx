import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  Code2,
  Sparkles,
  GraduationCap,
  Briefcase,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akbar Khan — Software Dvelopment Engineer" },
      { name: "description", content: "Full-stack software engineer building delightful, performant products with React, Next.js, and TypeScript." },
    ],
  }),
  component: Portfolio,
});

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "TanStack",
  "Tailwind CSS", "PostgreSQL", "Prisma", "GraphQL", "Docker",
  "AWS", "Python", "tRPC", "Framer Motion",
];

const projects = [
  {
    title: "Sampark - AI Costumer Support Chatbot",
    description: "Real-time Saas Chatbot which hellp user for improve and implement it in their project for improve their websites and applications.",
    image: project1,
    tags: ["Next.js", "PostgreSQL", "Typescript", "MongoDB", "Scalekit auth."],
    link: "http://github.com/Akbarkhan2266",
  },
  {
    title: "ApnaGhar - Real Estate application for sell/Purchase",
    description: "Platform for sell and purchase the real Esate properties.",
    image: project2,
    tags: ["React Native", "Expo", "Supabase",],
    link: "http://github.com/Akbarkhan2266",
  },
  {
    title: "Lumen AI",
    description: "Conversational AI workspace with custom agents, tools, and streaming responses.",
    image: project3,
    tags: ["Next.js", "OpenAI", "Vercel AI"],
    link: "#",
  },
  {
    title: "Atelier Commerce",
    description: "Headless e-commerce storefront with edge-rendered product pages and Stripe checkout.",
    image: project4,
    tags: ["Next.js", "Shopify", "Stripe"],
    link: "#",
  },
];

const education = [
  {
    school: "Raja Balwant Singh Management Technical Campus, Agra",
    degree: "B.Tech in Computer Science",
    period: "2019 — 2023",
    detail: "Graduated with distinction. Focus on distributed systems & HCI.",
    icon: GraduationCap,
  },
  {
    school: "Google — Software Engineer",
    degree: "Frontend Platform Team",
    period: "2023 — Present",
    detail: "Building tooling and design systems used by 200+ engineers.",
    icon: Briefcase,
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Mail, label: "Email", href: "mailto:akbarkh7417@gmail.com" },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-lg tracking-tight">
            Akbar<span className="text-gradient">.SDE</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#education" className="hover:text-foreground transition-colors">Education</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Let's talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              Available for select projects
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Crafting digital
              <br />
              experiences with
              <br />
              <span className="text-gradient">precision & soul.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I'm <span className="text-foreground font-medium">Akbar Khan</span> — a full-stack
              software engineer designing and shipping fast, accessible web and mobile products with
              modern tools like Next.js, TypeScript, and the edge.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[image:var(--gradient-brand)] text-primary-foreground glow-ring hover:scale-[1.02] transition-transform"
              >
                View my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1O9gaVjIz6NmYPv8wx09jQ5igNzXJMO0q/view?usp=drivesdk"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/10 transition-colors"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid place-items-center h-10 w-10 rounded-full glass hover:text-accent hover:-translate-y-0.5 transition-all"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 bg-[image:var(--gradient-brand)] opacity-30 blur-3xl rounded-full" aria-hidden />
            <div className="relative glass rounded-3xl p-3 shadow-[var(--shadow-elegant)] animate-float">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={profileImg}
                  alt="Portrait of Akbar Khan"
                  width={768}
                  height={768}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="font-display font-semibold text-lg">Akbar Khan</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Uttar Pradesh, India
                    </p>
                  </div>
                  <div className="glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                    SDE
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 p-3 pt-4">
                <Stat label="Years" value="4+" />
                <Stat label="Projects" value="40+" />
                <Stat label="Experience" value="8 mon+" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills marquee */}
      <section id="about" className="px-6 py-16 border-y border-white/5">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" /> Tech stack
          </p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <span
                key={s}
                className="glass rounded-full px-4 py-2 text-sm font-medium hover:bg-white/10 hover:text-accent transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5" /> Selected work
              </p>
              <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
                Projects I'm <span className="text-gradient">proud of</span>
              </h2>
            </div>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              See archive <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Education / Experience */}
      <section id="education" className="px-6 py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Journey
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight mb-12">
            Education & <span className="text-gradient">experience</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((e) => (
              <div
                key={e.school}
                className="group glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                    <e.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs text-accent">{e.period}</p>
                    <h3 className="font-display font-semibold text-lg mt-1">{e.school}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{e.degree}</p>
                    <p className="text-sm text-foreground/80 mt-3 leading-relaxed">{e.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="relative glass rounded-3xl p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute -top-32 -left-32 h-72 w-72 bg-primary/30 blur-3xl rounded-full" aria-hidden />
            <div className="absolute -bottom-32 -right-32 h-72 w-72 bg-accent/30 blur-3xl rounded-full" aria-hidden />

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Get in touch
              </p>
              <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight">
                Have an idea worth <br className="hidden sm:block" />
                <span className="text-gradient">building together?</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
                I'm currently taking on a small number of freelance and full-time opportunities.
                Let's make something memorable.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:akbarkh7417@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-[image:var(--gradient-brand)] text-primary-foreground glow-ring hover:scale-[1.02] transition-transform"
                >
                  <Mail className="h-4 w-4" /> akbarkh7417@gmail.com
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold glass hover:bg-white/10 transition-colors"
                >
                  Schedule a call <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid place-items-center h-10 w-10 rounded-full glass hover:text-accent hover:-translate-y-0.5 transition-all"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <center><p>© {new Date().getFullYear()} Akbar Khan Crafted with care.</p></center>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/[0.04] p-3 text-center">
      <p className="font-display font-bold text-lg">{value}</p>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">{label}</p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}) {
  return (
    <a
      href={link}
      className="group relative block glass rounded-3xl overflow-hidden hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80" />
        <div className="absolute top-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-background/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl tracking-tight group-hover:text-gradient transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
