import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-emerald-600">
          Calc
        </span>

        <span className="text-slate-900">
          Mint
        </span>
      </span>
    </Link>
  );
}