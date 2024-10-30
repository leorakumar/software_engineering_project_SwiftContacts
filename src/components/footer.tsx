import Link from "next/link";

export function Footer() {
  return (
    <div className="mt-auto flex w-full items-center justify-between border-t px-8 py-4 text-center">
      <div className="mx-auto flex text-center">
        Made with ❤️ by{" "}
        <Link
          href="https://codechefvit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1"
        >
          CodeChef-VIT
        </Link>
      </div>
    </div>
  );
}
