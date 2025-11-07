import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-primary text-background px-6 py-24 md:py-32"
    >
      {/* Subtle dark overlay instead of heavy gradient */}
      <div className="absolute inset-0 bg-primary/80"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center md:text-left"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl font-heading font-bold mb-6 text-secondary"
        >
          About Buildclub
        </motion.h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Buildclub is not just a tech community — it’s a playground for
          innovators. We bring together passionate students who love to explore
          new technologies, from AI and Machine Learning to IOT and
          robotics. Here, we <span className="text-secondary">learn</span>,
          <span className="text-secondary"> build</span>, and{" "}
          <span className="text-secondary">launch</span> together.
        </p>

        {/* Accent divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="h-1 w-32 bg-secondary mx-auto md:mx-0 mt-8 rounded-full origin-left"
        ></motion.div>

        {/* Animated Feature Cards */}
        <div className="mt-12 flex flex-col md:flex-row justify-center md:justify-start gap-6">
          {[
            {
              emoji: "💡",
              title: "Learn",
              desc: "Explore new tech, frameworks, and ideas every week.",
              color: "bg-accent",
            },
            {
              emoji: "🧠",
              title: "Build",
              desc: "Turn imagination into code — one project at a time.",
              color: "bg-secondary text-primary",
            },
            {
              emoji: "🚀",
              title: "Collaborate",
              desc: "Work in teams, share ideas, and grow together.",
              color: "bg-accent",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.2,
                type: "spring",
                stiffness: 50,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 20px rgba(255, 247, 5, 0.4)",
                transition: { type: "tween", duration: 0.1 },
              }}
              className={`relative flex flex-col items-center justify-center ${item.color} rounded-xl px-6 py-6 md:px-8 md:py-8 shadow-lg cursor-pointer select-none transition-all duration-300 md:text-left`}
            >
              <span className="text-4xl mb-3">{item.emoji}</span>
              <h3 className="text-2xl font-heading font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-center md:text-base max-w-[16rem]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating background icons (decorative) */}
      <motion.div
        className="absolute -bottom-20 right-10 text-secondary/30 text-[6rem] select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🔧
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 text-secondary/30 text-[5rem] select-none"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ⚙️
      </motion.div>
    </section>
  );
}
