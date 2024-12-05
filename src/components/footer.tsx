import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="my-4 text-center text-xl hover:text-gray-400 hover:text-2xl transition-all duration-300 animate-bounce">
        <Link href="https://github.com/cod3prod">Created by cod3prod</Link>
      </p>
    </footer>
  );
}
