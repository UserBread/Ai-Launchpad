import { ArrowDownRight, ArrowRight, Command, Layers3, Search, Sparkles, Workflow } from "lucide-react";

const collections = [
  { number: "01", title: "Find your next tool.", description: "Explore the models and products shaping what AI can do.", tag: "DISCOVER", icon: Search, tone: "blue" },
  { number: "02", title: "Make models work together.", description: "See how models, agents, and tools can become one workflow.", tag: "CONNECT", icon: Workflow, tone: "violet" },
  { number: "03", title: "Start with a better idea.", description: "Explore practical workflow concepts, from research to creation.", tag: "EXPLORE", icon: Layers3, tone: "orange" },
];

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-tight"><Command size={19} strokeWidth={2.2} /> launchpad</a>
          <div className="hidden items-center gap-7 text-xs text-neutral-600 md:flex">
            <a href="#discover" className="transition hover:text-black">Discover</a>
            <a href="#workflows" className="transition hover:text-black">Workflows</a>
            <a href="#about" className="transition hover:text-black">About</a>
          </div>
          <a href="#discover" className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white transition hover:bg-neutral-700">Explore AI <ArrowRight className="ml-1 inline" size={13} /></a>
        </div>
      </nav>

      <section className="overflow-hidden px-5 pb-20 pt-20 text-center md:pb-28 md:pt-28">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-neutral-600"><Sparkles size={13} /> A clearer way into AI</p>
        <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-7xl md:text-8xl">A world of AI.<br /><span className="text-neutral-400">One starting point.</span></h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-neutral-500 md:text-lg">Discover the tools, models, and workflows changing how we think, create, and build.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#discover" className="rounded-full bg-[#0878f9] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600">Explore the launchpad <ArrowRight className="ml-2 inline" size={15} /></a>
          <a href="#workflows" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-800 ring-1 ring-black/10 transition hover:bg-neutral-100">What is a workflow?</a>
        </div>
        <div className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] bg-[#111827] px-6 py-10 text-left text-white shadow-2xl shadow-blue-950/10 md:mt-24 md:px-14 md:py-14">
          <div className="absolute -right-12 -top-24 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div><p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-300">The AI landscape, made navigable</p><h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">Less searching.<br />More making.</h2><p className="mt-5 max-w-md text-sm leading-6 text-white/60">From a single model to a complete AI workflow, find the right pieces for what you want to do.</p></div>
            <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs text-white/50"><span>WORKFLOW PREVIEW</span><span className="h-2 w-2 rounded-full bg-emerald-400" /></div>
              {["Your idea", "Research agent", "AI analysis", "Your result"].map((item, i) => <div key={item}><div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-3"><span className="grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-xs">{String(i + 1).padStart(2, "0")}</span><span className="text-sm">{item}</span><ArrowDownRight className="ml-auto text-white/40" size={15} /></div>{i < 3 && <div className="ml-6 h-4 w-px bg-white/20" />}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="discover" className="bg-white px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Your AI starting point</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.055em] md:text-6xl">Find what fits.</h2></div><p className="max-w-md text-sm leading-6 text-neutral-500 md:text-base">The AI ecosystem moves fast. Start with a clearer view of the tools available and what they can help you achieve.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {collections.map(({ number, title, description, tag, icon: Icon, tone }) => <article key={number} className="group flex min-h-72 flex-col rounded-3xl bg-[#f5f5f7] p-6 transition duration-300 hover:-translate-y-1 md:p-8"><div className="flex items-center justify-between"><span className="text-xs tracking-widest text-neutral-400">{number} / {tag}</span><Icon className={tone === "blue" ? "text-blue-600" : tone === "violet" ? "text-violet-600" : "text-orange-600"} size={23} strokeWidth={1.7} /></div><h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500">{description}</p><a href="#workflows" className="mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-blue-600">Learn more <ArrowRight size={14} className="transition group-hover:translate-x-1" /></a></article>)}
          </div>
        </div>
      </section>

      <section id="workflows" className="px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600">Beyond individual tools</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.055em] md:text-6xl">One idea.<br />Many possibilities.</h2><p className="mt-6 max-w-lg text-base leading-7 text-neutral-500">An AI workflow connects steps into a repeatable process. A model can analyse, a search tool can gather context, and another model can review the result.</p><p className="mt-4 max-w-lg text-base leading-7 text-neutral-500">The goal isn&apos;t to use more AI. It&apos;s to bring the right capabilities together to get something useful done.</p><a href="#about" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-600">Explore the idea <ArrowRight size={15} /></a></div>
          <div className="rounded-[2rem] bg-gradient-to-br from-[#e7eaff] via-[#f0eafa] to-[#e5f4ff] p-5 md:p-8">
            <div className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur md:p-7">
              <div className="mb-6 flex items-center justify-between"><span className="text-sm font-semibold">Research workflow</span><span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">Concept</span></div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-black/5 bg-white p-4"><Search className="mb-5 text-blue-600" size={19} /><p className="text-sm font-medium">Gather context</p><p className="mt-1 text-xs text-neutral-500">Search and sources</p></div>
                <div className="rounded-xl border border-black/5 bg-white p-4"><Sparkles className="mb-5 text-violet-600" size={19} /><p className="text-sm font-medium">Analyse</p><p className="mt-1 text-xs text-neutral-500">Model reasoning</p></div>
                <div className="col-span-2 flex items-center justify-center gap-3 rounded-xl border border-black/5 bg-white p-4"><Layers3 className="text-orange-600" size={19} /><div><p className="text-sm font-medium">Review and combine</p><p className="mt-1 text-xs text-neutral-500">Produce a useful final report</p></div></div>
              </div>
              <p className="mt-4 text-center text-xs text-neutral-400">A preview of what workflows could become.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#171717] px-6 py-14 text-center text-white md:px-12 md:py-20">
          <Sparkles className="mx-auto text-blue-300" size={26} />
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">AI is a landscape.<br /><span className="text-white/45">Let&apos;s make it easier to explore.</span></h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-white/55">A home for discovering what&apos;s possible today—and imagining what becomes possible when everything connects.</p>
          <a href="#discover" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">Start exploring <ArrowRight size={15} /></a>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white px-5 py-7">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between"><a href="#" className="font-semibold text-neutral-800">⌘ launchpad</a><p>An independent guide to the evolving AI ecosystem.</p><p>Built for what comes next.</p></div>
      </footer>
    </main>
  );
}
