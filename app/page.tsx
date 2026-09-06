'use client'

import { useState } from 'react'

const services = [
  ['01', 'Preventive care', 'Keep your smile healthy with thoughtful exams, cleanings, and personalized guidance.'],
  ['02', 'Cosmetic dentistry', 'Subtle, natural-looking enhancements designed around your features and goals.'],
  ['03', 'Restorative dentistry', 'Comfortable, lasting solutions that restore strength, function, and confidence.'],
  ['04', 'Clear aligners', 'A discreet path to a straighter smile with a plan made for your lifestyle.'],
  ['05', 'Dental implants', 'Modern tooth replacement that looks, feels, and functions like the real thing.'],
  ['06', 'Emergency care', 'Same-day support when an unexpected dental concern cannot wait.'],
]

const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM']

export default function Page() {
  const [selectedService, setSelectedService] = useState('Preventive care')
  const [selectedTime, setSelectedTime] = useState('10:30 AM')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden text-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex items-center justify-between py-6" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-lg text-white">+</span>
            <span>Northstar <span className="text-teal-600">Dental</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#care" className="transition hover:text-slate-950">Our care</a>
            <a href="#doctor" className="transition hover:text-slate-950">Your doctor</a>
            <a href="#booking" className="transition hover:text-slate-950">Appointments</a>
          </div>
          <a href="#booking" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-teal-700">Book a visit</a>
        </nav>

        <section id="top" className="relative grid items-center gap-12 pb-24 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:pb-32 lg:pt-20">
          <div className="absolute -left-32 top-8 -z-10 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 shadow-sm backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-teal-500" /> Care that feels different</div>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.06em] text-slate-950 sm:text-7xl">A healthier smile starts with feeling <span className="text-teal-600">seen.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Modern dentistry, personal attention, and a calm space for every stage of your smile journey.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#booking" className="rounded-full bg-teal-600 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-teal-600/20 transition hover:-translate-y-1 hover:bg-teal-700">Find your appointment <span className="ml-2">→</span></a>
              <a href="#care" className="rounded-full border border-slate-300/70 bg-white/40 px-6 py-4 text-sm font-semibold text-slate-700 backdrop-blur transition hover:bg-white/70">Explore our care</a>
            </div>
            <div className="mt-14 flex flex-wrap gap-8 border-t border-slate-300/60 pt-7">
              <div><p className="text-2xl font-semibold text-slate-950">4.9/5</p><p className="mt-1 text-xs text-slate-500">Patient rating</p></div>
              <div><p className="text-2xl font-semibold text-slate-950">12k+</p><p className="mt-1 text-xs text-slate-500">Smiles cared for</p></div>
              <div><p className="text-2xl font-semibold text-slate-950">15 yrs</p><p className="mt-1 text-xs text-slate-500">Of experience</p></div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-violet-300/30 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-slate-900/10">
              <img src="/doctor-portrait.png" alt="Dr. Maya Chen in the Northstar Dental clinic" className="h-[520px] w-full rounded-[1.5rem] object-cover object-top" />
              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/75 p-5 backdrop-blur-xl"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">Meet your dentist</p><p className="mt-1 text-xl font-semibold tracking-tight">Dr. Maya Chen</p><p className="mt-1 text-sm text-slate-600">Cosmetic & restorative dentistry</p></div>
            </div>
          </div>
        </section>

        <section id="care" className="py-24">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">Thoughtful care</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Everything your smile needs.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-600">From your first visit to your next chapter, we make exceptional dental care feel simple.</p></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map(([number, title, description]) => <article key={title} className="glass group rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/80"><div className="flex items-center justify-between"><span className="text-xs font-semibold text-teal-600">{number}</span><span className="text-2xl text-slate-400 transition group-hover:text-teal-600">↗</span></div><h3 className="mt-12 text-xl font-semibold tracking-tight text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></article>)}</div>
        </section>

        <section id="doctor" className="grid gap-10 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/10 sm:p-12 lg:grid-cols-[.8fr_1.2fr] lg:p-16">
          <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Your care team</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Expertise with a human touch.</h2></div>
          <div><p className="max-w-xl text-lg leading-8 text-slate-300">“The best dentistry is not just about a beautiful result. It is about creating a relationship where you feel heard, informed, and genuinely cared for.”</p><div className="mt-9 flex flex-wrap gap-3"><span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">DDS, Columbia University</span><span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">AACD Member</span><span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm">Invisalign Certified</span></div><p className="mt-8 text-sm text-slate-400">Dr. Maya Chen · Founder, Northstar Dental</p></div>
        </section>

        <section id="booking" className="py-24"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">Start here</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Make time for your smile.</h2><p className="mt-5 max-w-sm leading-7 text-slate-600">Tell us what you need and we will find a comfortable time for you.</p><div className="mt-10 text-sm text-slate-500"><p className="font-semibold text-slate-900">Northstar Dental</p><p className="mt-2">148 Hudson Street, Brooklyn, NY</p><p className="mt-1">Mon–Fri · 8:00 AM–6:00 PM</p></div></div>
          <div className="glass rounded-[2rem] p-6 shadow-xl shadow-slate-900/5 sm:p-8">{submitted ? <div className="py-16 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-2xl text-teal-700">✓</div><h3 className="mt-5 text-2xl font-semibold">You are on our calendar.</h3><p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">We will send a confirmation with your visit details shortly.</p><button onClick={() => setSubmitted(false)} className="mt-7 text-sm font-semibold text-teal-700 underline underline-offset-4">Book another appointment</button></div> : <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}><div className="flex items-center justify-between border-b border-slate-200/80 pb-5"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">Appointment request</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">Find your best time</h3></div><span className="text-sm text-slate-400">Step 1 of 1</span></div><label className="mt-7 block text-sm font-semibold">What can we help with?<select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3.5 text-sm outline-none ring-teal-500 focus:ring-2">{services.map(([, title]) => <option key={title}>{title}</option>)}</select></label><div className="mt-6"><p className="text-sm font-semibold">Choose a preferred time</p><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">{times.map((time) => <button type="button" key={time} onClick={() => setSelectedTime(time)} className={`rounded-xl border px-3 py-3 text-sm transition ${selectedTime === time ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-200 bg-white/50 text-slate-600 hover:border-teal-400'}`}>{time}</button>)}</div></div><div className="mt-6 grid gap-3 sm:grid-cols-2"><input required aria-label="Your name" placeholder="Your name" className="rounded-xl border border-slate-200 bg-white/60 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" /><input required type="email" aria-label="Email address" placeholder="Email address" className="rounded-xl border border-slate-200 bg-white/60 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-teal-500" /></div><button type="submit" className="mt-6 w-full rounded-xl bg-slate-950 py-4 text-sm font-semibold text-white transition hover:bg-teal-700">Request appointment <span className="ml-2">→</span></button><p className="mt-4 text-center text-xs text-slate-500">Selected: {selectedService} · {selectedTime}</p></form>}</div>
        </div></section>
        <footer className="flex flex-col justify-between gap-4 border-t border-slate-300/60 py-8 text-sm text-slate-500 sm:flex-row"><span>© 2025 Northstar Dental</span><span>Care that feels different.</span></footer>
      </div>
    </main>
  )
}
