import React from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Setting up VSCode", desc: "Getting your development environment ready: extensions, settings, and useful shortcuts.", tags: ["Setup", "Editor"] },
  { id: 2, title: "Initial Set Up", desc: "Intro to basic electronics, tools, and first steps for newcomers.", tags: ["Beginner", "Electronics"] },
  { id: 3, title: "Dancing LED", desc: "Create LED patterns and learn PWM, timing and simple microcontroller programming.", tags: ["Hardware", "Microcontroller"] },
  { id: 4, title: "Energy Meter", desc: "Build a meter to monitor and log power consumption for small appliances.", tags: ["IoT", "Power"] },
  { id: 5, title: "Fun with Image Processing", desc: "Simple computer vision projects using OpenCV / Python to detect shapes and colors.", tags: ["CV", "Python"] },
  { id: 6, title: "IOT Water Meter", desc: "A smart water monitoring solution to measure flow and usage over time.", tags: ["IoT", "Sensors"] },
  { id: 7, title: "Gesture Controlled Devices", desc: "Control devices using IMU/accelerometer gestures and simple ML classifiers.", tags: ["Sensors", "Interaction"] },
  { id: 8, title: "RFID Fast Tag Reader", desc: "Fast identification using RFID modules for access control and tracking demos.", tags: ["RFID", "Embedded"] },
  { id: 9, title: "Rolling LED Display", desc: "Design a scrolling LED sign with custom messages and simple animations.", tags: ["Displays", "PCB"] },
  { id: 10, title: "E-Market Web Application - Backend", desc: "REST API, authentication, and database design for a sample e-commerce backend.", tags: ["Web", "Backend"] },
  { id: 11, title: "E-Market Web Application - Frontend", desc: "React frontend with product listings, cart flow and responsive UI.", tags: ["Web", "Frontend"] }
];

export default function HomePage() {
  return (
     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-slate-900">
      <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
  <img 
    src="https://build-club-website.vercel.app/assets/logo2--L13uA1R.png" 
    alt="Buildclub CET Logo" 
    className="w-full h-full object-cover"
  />
</div>

            
            <div>
              <h1 className="text-lg font-semibold">Buildclub CET</h1>
              <p className="text-xs text-slate-600">Build • Learn • Launch</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#team-leads" className="hover:text-slate-900">Team Leads</a>
            <a href="#contact" className="px-3 py-1.5 rounded-md border bg-white hover:shadow">Contact</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="menu" className="p-2 rounded-md border">☰</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Build. Learn. Launch.
              <span className="text-indigo-600"> Join Buildclub CET.</span>
            </motion.h2>

            <p className="mt-4 text-slate-600 max-w-xl">
              We're a student-run engineering club that develops innovative projects, ranging from artificial intelligence and
              machine learning to robotics and the Internet of Things (IoT). Whether you want hands-on hardware
              experience or to learn software that controls real systems — you're welcome.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                id="join"
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-md shadow hover:opacity-95"
              >
                Join Us
              </a>

              <a
  href="#projects"
  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-md shadow hover:opacity-95 transition"
>
  See Projects
</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-slate-100 w-10 h-10 flex items-center justify-center">🚀</div>
                <div>
                  <div className="font-semibold">Projects Launched</div>
                  <div className="text-xs">5+ prototypes tested</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-slate-100 w-10 h-10 flex items-center justify-center">🤖</div>
                <div>
                  <div className="font-semibold">Active Projects</div>
                  <div className="text-xs">3 ongoing teams</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border">
              <img
                alt="club showcase"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 bg-white rounded-2xl p-8 border">
          <h3 className="text-2xl font-semibold">About Buildclub CET</h3>
          <p className="mt-3 text-slate-600 max-w-3xl">
            The CET Build Club is a dynamic and tech-focused community where students collaborate on innovative projects, ranging from artificial intelligence and machine learning to robotics and the Internet of Things (IoT).
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border">
              <div className="font-semibold">Hands-on Learning</div>
              <div className="text-sm text-slate-600 mt-1">Real hardware. Real failures. Real lessons.</div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border">
              <div className="font-semibold">Interdisciplinary Teams</div>
              <div className="text-sm text-slate-600 mt-1">Mechanical, ECE, CS — we build together.</div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border">
              <div className="font-semibold">Mentorship</div>
              <div className="text-sm text-slate-600 mt-1">Seniors and alumni guide new members through projects.</div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Featured Projects</h3>
            <a href="#projects" className="text-sm text-indigo-600">View All</a>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="bg-white rounded-xl p-5 border shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{p.title}</div>
                  <div className="text-sm text-slate-500">Team</div>
                </div>

                <p className="mt-3 text-sm text-slate-600">{p.desc ?? "Short project description coming soon."}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tags || []).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 border">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <a className="text-sm text-indigo-600">Learn more</a>
                  <button className="text-sm px-3 py-1 border rounded-md">Contribute</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Callout / Get Involved */}
        <section className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
          <div className="max-w-4xl">
            <h4 className="text-2xl font-semibold">Want to build with us?</h4>
            <p className="mt-2 opacity-90">Join Buildclub CET and make your dreams come true!</p>

            <div className="mt-4 flex gap-3">
             <a 
  href="#contact" 
  className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold shadow hover:bg-gray-100 transition-colors"
>
  Contact team
</a>
            </div>
          </div>
        </section>

        {/* Team Leads */}
        <section id="team-leads" className="mt-8 bg-white rounded-2xl p-8 border">
          <h3 className="text-2xl font-semibold">Team Leads</h3>
          <p className="mt-2 text-slate-600 max-w-3xl">Our team leads guide project teams and mentor new members.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example lead card — replace or expand as needed */}
            <div className="bg-slate-50 rounded-xl p-4 border flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                <span className="text-slate-400">Photo</span>
              </div>
              <div className="mt-4 font-semibold">Lead Name</div>
              <div className="mt-1 text-sm text-slate-600">Project / Team</div>
              <div className="mt-3 text-sm text-slate-600">Short description about the team lead</div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                <span className="text-slate-400">Photo</span>
              </div>
              <div className="mt-4 font-semibold">Lead Name</div>
              <div className="mt-1 text-sm text-slate-600">Project / Team</div>
              <div className="mt-3 text-sm text-slate-600">Short description about the team lead</div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center">
                <span className="text-slate-400">Photo</span>
              </div>
              <div className="mt-4 font-semibold">Lead Name</div>
              <div className="mt-1 text-sm text-slate-600">Project / Team</div>
              <div className="mt-3 text-sm text-slate-600">Short description about the team lead</div>
            </div>

          </div>
        </section>

        {/* Contact / Footer area */}
        <section id="contact" className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white rounded-xl p-6 border">
            <h5 className="font-semibold">Get in touch</h5>
            <p className="mt-2 text-sm text-slate-600">Email: <a className="text-indigo-600">buildclubcet@gmail.com</a></p>
            <p className="mt-1 text-sm text-slate-600">Instagram: <span className="text-indigo-600">@buildclub_cet</span></p>

            <div className="mt-4 flex items-center gap-4">
              <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.28-1.71-1.28-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.11-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 2.88-.39c.98 0 1.98.13 2.88.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
                <span className="text-sm">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.06 3.75-2.06C20.6 8.64 22 10 22 13.47V21h-4v-6.96c0-1.66-.03-3.8-2.32-3.8-2.33 0-2.68 1.82-2.68 3.68V21H9z"/></svg>
                <span className="text-sm">LinkedIn</span>
              </a>

              <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                <span className="text-sm">Instagram</span>
              </a>
            </div>

          </div>

          <div className="text-sm text-slate-600">
            <div className="mt-6 bg-slate-50 rounded-lg p-4 border">
              <div className="font-semibold">Upcoming event</div>
              <div className="mt-2 text-sm text-slate-600">To be announced soon</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Buildclub CET — All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}
