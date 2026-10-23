
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  category:
    | "Software Development"
    | "AI & Machine Learning"
    | "Mobile Development";
  status: string;
  description: string;
  stack: string[];
  featured?: boolean;
  githubUrl?: string;
  achievements: string[];
};

const projects: Project[] = [
  {
    title: "AI-Based Employee Welfare Recommendation System",
    category: "AI & Machine Learning",
    status: "Final-year capstone · In progress",
    description:
      "An AI-based welfare management system being developed in collaboration with Kenya Airways to digitise employee welfare information, streamline HR workflows, and support personalised welfare recommendations.",
    stack: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Python",
      "scikit-learn",
      "K-means",
    ],
    featured: true,
    githubUrl:
      "https://github.com/WendyOmollo87/Employee-Welfare-Recommendation-System",
    achievements: [
      "Developing a welfare management system using Next.js, Node.js and PostgreSQL to digitise employee welfare information and streamline HR workflows.",
      "Implementing K-means clustering with Python and scikit-learn to group employees by welfare needs and support more targeted assistance.",
      "Applying the Elbow Method and Silhouette Score to evaluate clustering quality, supporting more reliable employee segmentation and data-driven welfare decisions.",
    ],
  },
  {
    title: "DonorSync — Blood Donation Platform",
    category: "Mobile Development",
    status: "Project",
    description:
      "A cross-platform blood donation application built with Flutter and Firebase that matches blood requests with suitable donors based on blood group compatibility, availability, and donation eligibility, while supporting donor management and coordination between donors and healthcare organisations.",
    stack: [
     "Next.js",
      "Tailwind CSS",
      "Firebase",
        "Rule-based matching"
    ],
    githubUrl:
      "https://github.com/WendyOmollo87/DonorSync-Blood-Donation-Platform",
    achievements: [
      "Developed a cross-platform blood donation application using Flutter and Firebase to facilitate donor management and coordination between blood donors and healthcare organisations.",
      "Implemented donation eligibility tracking and automated reminders to notify donors when they become eligible for subsequent donations, encouraging timely repeat donations.",
      "Developing a smart donor-matching system to identify and rank suitable donors based on blood group compatibility, geographic proximity, availability, and donation eligibility, streamlining donor identification for blood requests.",
    ],
  },
  {
    title: "MLP Regression Model",
    category: "AI & Machine Learning",
    status: "Machine learning project",
    description:
      "A Multi-Layer Perceptron regression model developed with Python and scikit-learn to explore neural network modelling and evaluate predictive performance using quantitative metrics.",
    stack: [
      "Python",
      "scikit-learn",
      "MLPRegressor",
      "Neural Networks",
      "Regression",
    ],
    githubUrl:
      "https://github.com/WendyOmollo87/MLP-Regression-Model",
    achievements: [
      "Developed and trained a Multi-Layer Perceptron regression model using Python and scikit-learn, implementing a neural network architecture with three hidden layers of 128, 64, and 32 neurons.",
      "Evaluated model performance using Mean Absolute Error (MAE) and the coefficient of determination (R²), achieving an MAE of 12.37 and an R² score of 0.9935 on the evaluation dataset.",
      "Applied neural network modelling and performance evaluation techniques to assess prediction errors and goodness of fit, demonstrating strong predictive accuracy on the evaluation dataset.",
    ],
  },
  {
    title: "Student Productivity App",
    category: "Mobile Development",
    status: "Personal project",
    description:
      "A cross-platform productivity application built with Flutter and Dart to help students structure study sessions, minimise distractions, and create a focused study environment.",
    stack: [
      "Flutter",
      "Dart",
      "Device Integration",
      
    ],
    githubUrl:
      "https://github.com/WendyOmollo87/Student-Productivity-App",
    achievements: [
      "Developed a cross-platform mobile application using Flutter and Dart, bringing three core productivity features together in one application.",
      "Built a customisable Pomodoro timer and session configuration interface, enabling users to set study durations and structure focused work intervals.",
      "Integrated device-level Do Not Disturb controls to manage interruptions and help users maintain concentration during study sessions.",
      "Implemented background music playback to create a focused study environment and support productive study sessions.",
    ],
  },
];

const filters = [
  "All",
  "Software Development",
  "AI & Machine Learning",
  "Mobile Development",
] as const;

type Filter = (typeof filters)[number];

function ArrowUpRight() {
  return (
    <span
      aria-hidden="true"
      className="ml-1 inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      ↗
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sage-800">
        {eyebrow}
      </p>

      <h2 className="font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter(
            (project) => project.category === activeFilter
          ),
    [activeFilter]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-ivory text-forest">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/90 backdrop-blur-xl">
        <nav
          className="site-container flex h-[76px] items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="font-display text-2xl font-semibold tracking-tight text-forest"
          >
            wendy<span className="text-sage-700">.dev</span>
          </a>

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-forest/15 px-3 py-2 text-sm md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <div className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#journey">
              My journey
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a
              href="#contact"
              className="rounded-full bg-forest px-5 py-3 text-ivory transition hover:bg-sage-800"
            >
              Let's connect <ArrowUpRight />
            </a>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-forest/10 bg-ivory px-6 py-4 md:hidden">
            <div className="site-container flex flex-col gap-4 text-sm font-medium">
              {[
                ["About", "#about"],
                ["Projects", "#projects"],
                ["My journey", "#journey"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="py-1"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="site-container grid gap-10 py-1 md:grid-cols-[1.02fr_0.98fr] md:py-6 lg:gap-14"
      >
        <div className="reveal-up order-2 md:order-1">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sage-700/20 bg-white/60 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-sage-800 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-600" />
            OPEN TO LEARNING & OPPORTUNITIES
          </div>

          <p className="mb-2 text-lg font-bold tracking-wide text-forest sm:text-xl">
            Hello World, I'm Wendy Leah Omollo
          </p>

          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-forest sm:text-5xl">
            Engineering today.{" "}
            <span className="text-sage-700">
              Learning for tomorrow.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Aspiring software engineer interested in backend systems,
            intelligent applications, and exploring how technology can
            solve real-world problems.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center rounded-full bg-sage-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-sage-800"
            >
              Explore my work <ArrowUpRight />
            </a>

            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-forest/20 bg-white/40 px-6 py-3 text-sm font-semibold text-forest transition duration-300 hover:-translate-y-0.5 hover:border-sage-700"
            >
              Get to know me
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted sm:text-sm">
            <span>⌘ Software development</span>
            <span>♡ Problem solving</span>
            <span>✳ AI & machine learning</span>
          </div>
        </div>

        <div className="reveal-up order-1 md:order-2">
          <div className="photo-frame relative mx-auto max-w-[590px]">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-sage-700/30 sm:-right-6 sm:-top-6 sm:h-32 sm:w-32" />

            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-[2rem] bg-sand/70 sm:-bottom-7 sm:-left-7 sm:h-36 sm:w-36" />

            <div className="relative overflow-hidden rounded-[2rem] border-[7px] border-white shadow-[0_24px_70px_rgba(38,56,47,0.16)]">
              <Image
                src="/images/wendy-banner.jpg"
                alt="Wendy smiling outdoors beside the water"
                width={2000}
                height={700}
                priority
                className="h-[300px] w-full object-cover object-[50%_77%] sm:h-[360px] md:h-[440px]"
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </div>

            <div className="absolute -bottom-5 right-3 max-w-[230px] rounded-2xl border border-forest/5 bg-white/95 p-4 shadow-xl backdrop-blur sm:right-6 sm:p-5">
              <p className="font-display text-base font-semibold text-forest sm:text-lg">
                Backend & AI/ML
              </p>

              <p className="mt-1 text-[11px] leading-5 text-muted sm:text-xs">
                Building APIs that connect systems and AI that turns
                data into intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-white/45" />

      {/* ABOUT */}
      <section
        id="about"
        className="site-container pt-8 pb-7 sm:pt-14 sm:pb-12"
      >
        <SectionHeading
          eyebrow="A little about me"
          title="The person behind the projects."
        />

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div className="rounded-[2rem] bg-sage-100 p-7 sm:p-9">
            <span className="text-3xl" aria-hidden="true">
              ✿
            </span>

            <p className="mt-5 font-display text-2xl font-medium leading-snug text-forest">
              “I hope to build not only a career I am proud of, but
              also a life that reflects who I am and what I believe in.”
            </p>

            <div className="mt-7 h-px w-16 bg-sage-700" />
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-muted">
            <p>
              <span className="font-semibold text-forest">
                Beyond any title I may hold, I am first a believer,
                a firstborn daughter, and a sister.
              </span>{" "}
              My faith shapes my perspective, my values guide my
              decisions, and my family keeps me grounded, giving me
              a sense of acceptance and belonging.
            </p>

            <p>
              I am passionate about technology, software development,
              and exploring how Artificial Intelligence and Machine
              Learning can solve real-world problems. I enjoy learning
              by doing, turning ideas into practical solutions, and
              challenging myself to grow through new experiences.
            </p>

            <p>
              I may still be figuring out some parts of my journey,
              but I am certain of the values I want to carry with me
              and my genuine desire to make a difference. I believe
              growth is about both what we achieve and who we become
              along the way.
            </p>

            <a
              href="#journey"
              className="group inline-flex font-semibold text-sage-800 hover:text-forest"
            >
              A little more of my journey <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#F0F1E9]">
        <div className="site-container pt-7 pb-7 sm:pt-14 sm:pb-7">
          <SectionHeading
            eyebrow="Selected work"
            title="Things I've been building."
            description="A mix of academic work, personal projects, and experiments that help me learn by solving practical problems. Explore each project to discover the technologies, features, and achievements behind it."
          />

          {/* PROJECT FILTERS */}
          <div
            className="mb-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition duration-200 sm:text-sm ${
                  activeFilter === filter
                    ? "border-forest bg-forest text-white"
                    : "border-forest/15 bg-white/60 text-muted hover:border-sage-700 hover:text-forest"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article
                key={project.title}
                className="project-card group flex h-full flex-col rounded-[1.5rem] border border-forest/10 bg-white/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-sage-700/40 hover:shadow-[0_18px_50px_rgba(38,56,47,0.09)] sm:p-7"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="rounded-full bg-sage-100 px-3 py-1.5 text-[11px] font-semibold text-sage-800">
                    {project.category}
                  </span>

                  <span
                    className="text-xl text-sage-700"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">
                  {project.status}
                </p>

                <h3 className="font-display text-xl font-semibold leading-snug text-forest">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {/* TECHNOLOGY TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-ivory px-2.5 py-1.5 text-[11px] font-medium text-forest/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* EXPANDABLE ACHIEVEMENTS */}
                <details className="group/details mt-5 border-t border-forest/10 pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-xl bg-sage-100/70 px-4 py-3 transition-colors hover:bg-sage-100 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-2 text-sm font-semibold text-forest">
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sage-800"
                      >
                        ✳
                      </span>

                      Project highlights

                      <span className="text-xs font-medium text-sage-800">
                        ({project.achievements.length})
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-sage-800 transition-transform duration-300 group-open/details:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="mt-4 rounded-xl bg-ivory/70 p-4 sm:p-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-sage-800">
                      What I built & achieved
                    </p>

                    <ol className="space-y-4">
                      {project.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3"
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sage-700/20 bg-white text-xs font-bold text-sage-800">
                              {String(achievementIndex + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <p className="pt-0.5 text-sm leading-7 text-muted">
                              {achievement}
                            </p>
                          </li>
                        )
                      )}
                    </ol>
                  </div>
                </details>

                {/* GITHUB LINK */}
                <div className="mt-6 border-t border-forest/10 pt-4">
                  <a
                    href={
                      project.githubUrl ||
                      `https://github.com/WendyOmollo87/${project.title
                        .replace(/[^a-zA-Z0-9]+/g, "-")
                        .replace(/^-|-$/g, "")}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="group/link inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sage-800"
                  >
                    View on GitHub
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section
        id="journey"
        className="site-container pt-10 pb-16 sm:pt-14 sm:pb-24"
      >
        <SectionHeading
          eyebrow="Experience & education"
          title="Learning through every chapter."
          description="The experiences that have shaped how I learn, collaborate, and approach building software."
        />

        <div className="relative ml-2 space-y-8 border-l border-sage-700/30 pl-7 sm:ml-4 sm:pl-10">
          <article className="timeline-item relative">
            <span className="timeline-dot" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-700">
              2026 – Present · Final-year project
            </p>

            <h3 className="mt-2 font-display text-xl font-semibold text-forest">
              Kenya Airways Student fellow
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
             Currently work as a student fellow at Kenya Airways through the Student Fellowship Program between Kenya Airways and Strathmore University. Developing an AI-based Welfare Program Recommendation
              System that exploring K-means clustering to support personalised employee welfare recommendations and
              data-driven HR decisions.
            </p>
          </article>

          <article className="timeline-item relative">
            <span className="timeline-dot" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-700">
              2023 – Present · Education
            </p>

            <h3 className="mt-2 font-display text-xl font-semibold text-forest">
              Strathmore University
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Completing a Computer Science degree, building foundations
              across software development, databases, and AI/ML, and
              working toward First Class Honours.
            </p>
          </article>

          <article className="timeline-item relative">
            <span className="timeline-dot" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-700">
              2024 – 2025 · Academic recognition
            </p>

            <h3 className="mt-2 font-display text-xl font-semibold text-forest">
              Dean's List · Strathmore University
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Recognised on the Dean's List in both 2024 and 2025
              for academic performance while pursuing my Computer
              Science degree.
            </p>
          </article>

          <article className="timeline-item relative">
            <span className="timeline-dot" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-700">
              Jan – April 2026 · Industrial attachment
            </p>

            <h3 className="mt-2 font-display text-xl font-semibold text-forest">
              Turnkey Africa · Zimasa Health Africa
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Gained industry experience contributing to software
              solutions in a health-tech environment. Work and learning
              covered backend development, APIs, databases, frontend
              collaboration, testing, and product-team workflows.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Databases",
                "APIs",
                "Team collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white px-3 py-1.5 text-xs text-muted ring-1 ring-forest/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="timeline-item relative">
            <span className="timeline-dot" />

            <p className="text-xs font-bold uppercase tracking-[0.16em] text-sage-700">
              Early 2025 · Community involvement
            </p>

            <h3 className="mt-2 font-display text-xl font-semibold text-forest">
              Volunteering & service
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Contributed as a library clerk at the Kenya National
              Library Service and supported school administration as
              a volunteer secretary at Langata West Primary School.
            </p>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-forest text-ivory">
        <div className="site-container section-pad">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#C6D2B9]">
              Tools in my toolkit
            </p>

            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Learning, building, improving.
            </h2>

            <p className="mt-4 leading-7 text-white/65">
              A snapshot of the technologies I've worked with and
              the areas I'm continuing to develop.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Languages",
                items: [
                  "Java",
                  "Python",
                  "JavaScript",
                  "Dart",
                  "HTML & CSS",
                ],
              },
              {
                title: "Frameworks & Backend",
                items: [
                  "Spring Boot",
                  "Next.js",
                  "React",
                  "Flutter",
                  "Node.js",
                  "REST APIs",
                ],
              },
              {
                title: "AI & Machine Learning",
                items: [
                  "scikit-learn",
                  "PyTorch",
                  "TensorFlow",
                  "K-means Clustering",
                  "Neural Networks",
                ],
              },
              {
                title: "Data, Cloud & Tools",
                items: [
                  "MySQL",
                  "PostgreSQL",
                  "Firebase",
                  "AWS",
                  "Git & GitHub",
                  "Cisco Networking",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 transition duration-300 hover:bg-white/[0.09]"
              >
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          
<div>
  <p className="font-semibold text-white">
    Credentials & continued learning
  </p>

  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-white/65">
    <li>AWS Cloud Foundations badge</li>
    <li>AWS Microservices & CI/CD Pipeline Builder Certificate</li>
    <li>Cisco CCNA: Enterprise Networking, Security, and Automation credential</li>
    <li>French studies through Level 4</li>
  </ul>
</div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="site-container section-pad">
        <div className="relative overflow-hidden rounded-[2rem] bg-sage-100 px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border border-sage-700/20" />

          <div className="absolute -right-3 -top-7 h-32 w-32 rounded-full border border-sage-700/20" />

          <div className="relative max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-sage-800">
              Have a project or opportunity in mind?
            </p>

            <h2 className="font-display text-3xl font-semibold tracking-tight text-forest sm:text-4xl">
              Let's connect.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-muted">
              I am eager to bring my technical foundation in software
              development and AI/ML to a forward-thinking team. Whether
              you have a project to collaborate on, a team looking for
              fresh perspectives, or an opportunity to learn and grow,
              I would love to hear from you.
            </p>

            <p className="mt-5 text-sm font-medium text-forest">
              Reach me directly at:{" "}
              <a
                href="mailto:wendyleahomollo@gmail.com"
                className="font-semibold text-sage-800 hover:underline"
              >
                wendyleahomollo@gmail.com
              </a>
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:wendyleahomollo@gmail.com"
                className="group inline-flex items-center rounded-full bg-sage-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sage-800"
              >
                Email me <ArrowUpRight />
              </a>

              <a
                href="https://github.com/WendyOmollo87"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sage-800"
              >
                Visit my GitHub <ArrowUpRight />
              </a>

              <a
                href="https://www.linkedin.com/in/wendy-leah-omollo-4b7a82393/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center rounded-full border border-forest/20 bg-white/60 px-6 py-3.5 text-sm font-semibold text-forest transition hover:-translate-y-0.5 hover:border-sage-700"
              >
                Find me on LinkedIn <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-forest/10 py-6">
      
      </footer>
    </main>
  );
}
