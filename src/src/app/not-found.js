import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col space-y-5 text-center px-4">
      <Image
        src="/images/not-found.png"
        alt="Page not found"
        width={180}
        height={200}
        className="object-contain"
      />
      <h2 className="text-5xl font-medium">Oops! Page Not Found</h2>
      <Link
        href="/"
        className="bg-[#3E03B3] text-white py-2 px-4 rounded-md hover:opacity-90 transition"
      >
        Back to Homepage
      </Link>
    </div>
  );
}