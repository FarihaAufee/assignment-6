import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0B0D0F] px-6">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
          Error 404
        </p>

        <h1 className="mt-4 text-6xl font-black uppercase tracking-tight text-white sm:text-8xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-500 md:text-base">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3.5 text-sm font-bold text-black transition hover:bg-[#b8e600]"
        >
          <ArrowLeft size={18} />
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;