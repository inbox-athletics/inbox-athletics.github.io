const steps = [
  {
    number: 1,
    title: "Connect your email",
    description:
      "Securely link your email account and we'll auto-organize every coach conversation in one place.",
    media: { src: "/screenshots/how-it-works-1-desktop.png", type: "image" as const },
    imageAlt: "Inbox Athletics email connection screen on desktop",
    frame: "desktop" as const,
  },
  {
    number: 2,
    title: "Get organized",
    description:
      "See every coach, every conversation, and every next step in a single recruiting dashboard.",
    media: { src: "/screenshots/how-it-works-2-mobile.png", type: "image" as const },
    imageAlt: "Inbox Athletics coach list on a mobile phone",
    frame: "device" as const,
  },
  {
    number: 3,
    title: "Stay ahead",
    description:
      "Smart reminders tell you when to follow up. AI-drafted replies help you sound professional and confident.",
    media: { src: "/screenshots/how-it-works-3-mobile.mp4", type: "video" as const },
    imageAlt: "Inbox Athletics follow-up reminder and AI-drafted reply on mobile",
    frame: "mobile" as const,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-surface">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            How It Works
          </h2>
        </div>
        <div className="mx-auto max-w-5xl space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col gap-8 items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white font-semibold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-semibold text-text-primary">{step.title}</h3>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed pl-14">
                  {step.description}
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div
                  className={`${
                    step.frame === "device"
                      ? "w-[340px] md:w-[420px]"
                      : step.frame === "mobile"
                        ? "overflow-hidden w-[280px] rounded-[2rem] border-[6px] border-gray-800 shadow-lg"
                        : "overflow-hidden w-full max-w-[440px] rounded-xl border border-[#E2E8F0] shadow-lg"
                  }`}
                >
                  {step.media.type === "video" ? (
                    <video
                      src={step.media.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-hidden="true"
                      className="w-full h-auto"
                    />
                  ) : (
                    <img
                      src={step.media.src}
                      alt={step.imageAlt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
