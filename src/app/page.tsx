import Image from "next/image";
export default function Home() {
  const chipClass = 'bg-white/10 rounded-full px-5 py-1.5 text-xs font-normal uppercase tracking-widest'
  return (
    <main className="flex items-center justify-center min-h-screen flex-col p-3 md:p-12 lg:p-24 content-center">
      <h1 className="mb-6 text-lg md:text-2xl font-medium">Hello There!</h1>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold">I'm Miguel Lopez</h1>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-7">
        <span className={chipClass}>Senior Web Developer</span>
        <span className={chipClass}>FullStack</span>
        <span className={chipClass}>Front End</span>
      </div>
    </main>
  );
}
