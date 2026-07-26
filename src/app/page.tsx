import Image from "next/image";



const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST API", "GraphQL", "Socket.io"],
  },
  {
    title: "Database",
    items: [
      "MongoDB",
      "Supabase",
      "Firebase",
      "PostgreSQL",
      "MySQL",
      "Prisma",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Recoil", "Hardhat", "RainbowKit", "NextAuth"],
  },
  {
    title: "Blockchain",
    items: [
      "Solana",
      "Web3",
      "Smart Contracts",
      "ethers.js",
      "Remix",
      "EVM",
      "Solidity",
      "Rust",
    ],
  },
];

const projects = [
  {
    title: "Relixa",
    description:
      "A decentralized emergency and disaster relief platform focused on transparent donations, verifiable fund flow, and beneficiary trust.",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express",
      "Firebase",
      "Stellar",
      "Soroban",
      "Rust",
    ],
    codeHref: "https://github.com/saxux2/Relixa",
    liveHref: "https://relixa.vercel.app/",
    image: "/relixa-landing.png",
    accent: "from-blue-600/30 via-blue-500/20 to-transparent",
  },
  {
    title: "Vault",
    description:
      "A zero-knowledge prediction market where forecasters stake on numeric ranges instead of binary outcomes, with positions encrypted until settlement.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Circom",
      "Groth16",
      "Stellar",
      "Soroban",
      "Rust",
    ],
    codeHref: "https://github.com/saxux2/Vault",
    liveHref: "https://vaultstellar.vercel.app",
    image: "/vault-landing.png",
    accent: "from-emerald-600/30 via-emerald-500/20 to-transparent",
  },
  {
    title: "Aether",
    description:
      "A zero-knowledge dark pool DEX for large-block trades, where sealed orders are matched in batch auctions at a uniform clearing price so there is nothing in the mempool to front-run.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Circom",
      "Groth16",
      "Stellar",
      "Soroban",
      "Rust",
    ],
    codeHref: "https://github.com/saxux2/Aether",
    liveHref: "https://aetherstellar.vercel.app",
    image: "/aether-landing.png",
    accent: "from-violet-600/30 via-violet-500/20 to-transparent",
  },
  {
    title: "OnMint",
    description:
      "A decentralized buy now, pay later protocol where on-time repayment builds an onchain credit score, unlocking undercollateralized USDC limits without a traditional lender.",
    tags: [
      "Solidity",
      "Hardhat",
      "OpenZeppelin",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "wagmi",
      "viem",
      "RainbowKit",
      "Polygon",
    ],
    codeHref: "https://github.com/saxux2/Onmint",
    liveHref: "#contact",
    image: "/onmint-landing.png",
    accent: "from-amber-600/30 via-amber-500/20 to-transparent",
  },
];

const experiences = [
  {
    role: "Independent Web3 Developer",
    period: "2024 - Present",
    org: "Personal projects and rapid prototyping",
    description:
      "Building decentralized applications, testing smart contract ideas, and shipping portfolio-ready product experiences across frontend, backend, and blockchain layers.",
  },
  {
    role: "Hackathon Participant",
    period: "Ongoing",
    org: "Product sprints and collaborative builds",
    description:
      "Using hackathons to sharpen execution speed, teamwork, and idea validation while focusing on secure, user-friendly Web3 applications.",
  },
];

const strengths = [
  {
    title: "End-to-end delivery",
    text: "Comfortable moving from interface work to APIs and smart contract integrations.",
  },
  {
    title: "Hackathon mindset",
    text: "Fast prototyping, practical problem-solving, and strong focus on shipping usable products.",
  },
  {
    title: "Web3 focus",
    text: "Interested in trust, transparency, and real-world utility through decentralized systems.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "skybiswas0722@gmail.com",
    href: "mailto:skybiswas0722@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/saxux2",
    href: "https://github.com/saxux2",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akash-biswas-a69571322",
    href: "https://www.linkedin.com/in/akash-biswas-a69571322/",
  },
  {
    label: "X",
    value: "x.com/gyamaxin",
    href: "https://x.com/gyamaxin",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-5 sm:px-8 lg:px-10">
        <header className="fixed inset-x-0 bottom-6 z-50 flex items-center justify-center p-4 pb-6">
          <nav className="flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-300 border border-white/10 bg-black/50 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <a className="relative px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors group" href="#home">
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                <span className="hidden sm:inline">Home</span>
              </span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a className="relative px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors group" href="#about">
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <span className="hidden sm:inline">About</span>
              </span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a className="relative px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors group" href="#projects">
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" /><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" /><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" /></svg>
                <span className="hidden sm:inline">Projects</span>
              </span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a className="relative px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors group" href="#experience">
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" /></svg>
                <span className="hidden sm:inline">Experience</span>
              </span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a className="relative px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors group" href="#contact">
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                <span className="hidden sm:inline">Contact</span>
              </span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <div className="w-px h-4 bg-white/10 mx-2" />
            <a target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors" href="https://github.com/saxux2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
          </nav>
        </header>

        <section
          id="home"
          className="grid items-center gap-10 border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_30%),linear-gradient(180deg,_rgba(24,24,27,0.95),_rgba(9,9,11,0.98))] p-6 sm:rounded-[2rem] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10"
        >
          <div className="space-y-7">
            <div className="opportunity-badge inline-flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-semibold uppercase backdrop-blur-md sm:px-5">
              <span aria-hidden="true" className="opportunity-badge__dot" />
              Looking for opportunities
            </div>

            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] text-zinc-400 uppercase">Full Stack Blockchain Developer</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I&apos;m Akash.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                I design and deliver full-stack web applications using modern technologies, with a strong emphasis on Web3 solutions, decentralized architectures, and polished user interfaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/saxux2"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                View GitHub
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/5"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-[340px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-sky-500/25 via-violet-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 p-3 shadow-2xl shadow-black/30">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-900">
                <Image
                  src="/profile.jpeg"
                  alt="Akash Biswas"
                  width={340}
                  height={420}
                  priority
                  className="h-auto max-h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-6 pt-10 pb-10">
          <div>
            <h2 className="-mt-1 text-3xl font-semibold text-white sm:text-4xl">About Me</h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-300">
            <p>
              I am a Full Stack Blockchain Developer with a strong interest in decentralized applications, practical problem-solving, and polished user interfaces. I enjoy turning ambitious ideas into usable, production-ready experiences.
            </p>
            <p>
              My work spans frontend, backend, and blockchain integrations, and I actively use hackathons and side projects to sharpen speed, adaptability, and technical depth. I am especially interested in products that bring transparency, trust, and real-world utility to users.
            </p>
          </div>
        </section>

        <section className="pt-2 pb-4">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Tech stack</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-10">
          <div className="mb-8">
            <p className="text-sm tracking-[0.26em] text-zinc-400 uppercase font-[family-name:var(--font-space-grotesk)] font-medium">Featured Projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              A selection of projects focused on Web3 product thinking, transparency-driven systems, and practical full stack execution.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-[1.5rem] bg-zinc-950/75">
                <div className="overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} landing page screenshot`}
                      className="block aspect-[1903/872] w-full object-cover object-top align-top transition duration-500 ease-out will-change-transform group-hover:scale-[1.035] group-hover:brightness-110"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`flex aspect-[1903/872] w-full items-center justify-center bg-gradient-to-br ${project.accent} transition duration-500 ease-out will-change-transform group-hover:scale-[1.035] group-hover:brightness-110`}
                    >
                      <span className="text-4xl font-semibold tracking-tight text-white/90 sm:text-5xl">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <p className="text-sm leading-6 text-zinc-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <a
                      href={project.codeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition hover:border-white/35 hover:bg-white/5"
                    >
                      View Code
                    </a>
                    <a
                      href={project.liveHref}
                      target={project.liveHref.startsWith("http") ? "_blank" : undefined}
                      rel={project.liveHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200"
                    >
                      {project.liveHref.startsWith("http") ? "Live Demo" : "Discuss Project"}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-6 pt-0 pb-10">
          <div>
            <h2 className="-mt-1 text-3xl font-semibold text-white sm:text-4xl">Experience</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Co-Founder */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <img src="/kryon-logo.jpg" alt="Kryon logo" className="h-full w-full rounded-xl object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">Co-Founder — Kryon</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">Perpetual Futures DEX</p>
                        <span className="text-gray-400 text-xs font-medium">2026 - Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">Co-founded Kryon and launched it on Stellar mainnet — a perpetuals exchange pairing off-chain CLOB matching for low-latency execution with fully onchain custody, margin, funding, and settlement.</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Rust", "Soroban", "Next.js", "TypeScript", "PostgreSQL", "Perps", "Mainnet"].map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Founder */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <img src="/aether-logo.png" alt="Aether logo" className="w-[18px] h-[18px] object-contain invert" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">Founder — Aether</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">ZK Dark Pool DEX</p>
                        <span className="text-gray-400 text-xs font-medium">2026 - Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">Founded and shipped Aether to Stellar mainnet, owning the protocol design, ZK circuits, Soroban contracts, batch-auction relayer, and trading interface end to end.</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Protocol Design", "Rust", "Soroban", "Circom", "Groth16", "Next.js", "Mainnet"].map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 1 */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] text-gray-300" aria-hidden="true">
                        <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                        <path d="M11 12 5.12 2.2" />
                        <path d="m13 12 5.88-9.8" />
                        <path d="M8 7h8" />
                        <circle cx="12" cy="17" r="5" />
                        <path d="M12 18v-2h-.5" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">Paradigm Shift Hackathon (JGEC) 🏆</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">1st Runner-Up</p>
                        <span className="text-gray-400 text-xs font-medium">Dec 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Next.js", "Node.js", "Express", "Web3.js", "Gemini AI", "Clerk", "TypeScript"].map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] text-yellow-400" aria-hidden="true">
                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">East India Blockchain Summit 2.0 (IIT KGP)</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">Finalist</p>
                        <span className="text-gray-400 text-xs font-medium">Jan 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Next.js", "Solidity", "Prisma", "EVM", "Weleptic", "Node.js", "Express", "Ethers.js", "TypeScript"].map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] text-yellow-400" aria-hidden="true">
                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">IEM Diversion 2K26 Hackathon 🏆</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">Winner</p>
                        <span className="text-gray-400 text-xs font-medium">2026</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">Winner of the IEM Diversion TechFest Hackathon, recognized for building an innovative full-stack blockchain solution.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 4 */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] text-yellow-400" aria-hidden="true">
                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">AEC Hacktropica 2026 Hackathon 🏆</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">Winner</p>
                        <span className="text-gray-400 text-xs font-medium">2026</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">Winner of the AEC Hacktropica 2026 Hackathon, recognized for building an innovative full-stack blockchain solution.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 5 */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px] text-yellow-400" aria-hidden="true">
                        <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                        <path d="M4 22h16" />
                        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">KGEG Binary v2 Hackathon 🏆</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">Winner</p>
                        <span className="text-gray-400 text-xs font-medium">2026</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">Winner of the KGEG Binary v2 TechFest Hackathon, recognized for building an innovative full-stack blockchain solution.</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 6 */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <img src="/ethereum-logo.jpg" alt="Ethereum logo" className="h-full w-full rounded-xl bg-white object-contain p-1" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">EVM &amp; Ethereum Development</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">Smart Contracts</p>
                        <span className="text-gray-400 text-xs font-medium">2025 - Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">Writing and deploying Solidity contracts across EVM chains, from ERC standards and token flows to lending logic, wired to production frontends.</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Solidity", "Hardhat", "OpenZeppelin", "ethers.js", "wagmi", "viem", "Polygon", "Celo"].map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card 7 */}
            <div className="group relative">
              <div className="relative h-full flex flex-col justify-between bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="shrink-0 w-10 h-10 bg-gradient-to-br from-white/15 to-white/5 rounded-xl flex items-center justify-center border border-white/10">
                      <img src="/stellar-logo.jpg" alt="Stellar logo" className="h-full w-full rounded-xl object-cover invert" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-white leading-tight">Stellar &amp; Soroban Development</h3>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-300 font-medium text-xs">Ongoing</p>
                        <span className="text-gray-400 text-xs font-medium">2026 - Present</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-2">Building continuously on Stellar — Rust Soroban contracts shipped to testnet and mainnet, paired with zero-knowledge proving and wallet integration.</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {["Rust", "Soroban", "Stellar SDK", "Freighter", "Circom", "Groth16", "Poseidon"].map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Let&apos;s Work Together</h2>
            <p className="mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">Interested in collaborating or have a project in mind? Drop a message, or just say hi.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:skybiswas0722@gmail.com"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">Email</div>
                <div className="text-xs text-zinc-400 truncate">skybiswas0722@gmail.com</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/saxux2"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">GitHub</div>
                <div className="text-xs text-zinc-400 truncate">github.com/saxux2</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akash-biswas-a69571322/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">LinkedIn</div>
                <div className="text-xs text-zinc-400 truncate">linkedin.com/in/akash-biswas-a69571322</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/gyamaxin"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white">X</div>
                <div className="text-xs text-zinc-400 truncate">x.com/gyamaxin</div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-zinc-500">
          <p>© 2026 Akash Biswas. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
