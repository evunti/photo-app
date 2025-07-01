import Gallery from "./Gallery";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_40px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Gallery />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-gray-500 text-sm">
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-emerald-700 transition-colors"
        >
          Follow on Instagram
        </a>
        <span>&copy; {new Date().getFullYear()} Photo Gallery</span>
      </footer>
    </div>
  );
}
