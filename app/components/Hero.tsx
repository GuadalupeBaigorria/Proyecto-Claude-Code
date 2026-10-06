export default function Hero() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.15),_transparent_60%)]"
      />
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Master{" "}
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Claude Code
          </span>
        </h1>
      </div>
    </section>
  );
}
