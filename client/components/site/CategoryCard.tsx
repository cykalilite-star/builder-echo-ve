import { Link } from "react-router-dom";

export default function CategoryCard({
  title,
  description,
  to = "/shop",
  gradient = "from-[#f59e0b] via-[#f97316] to-[#ef4444]",
}: {
  title: string;
  description: string;
  to?: string;
  gradient?: string;
}) {
  return (
    <Link
      to={to}
      className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-lg transition-transform hover:-translate-y-0.5 bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm/6 opacity-90 max-w-[28ch]">{description}</p>
      <span className="mt-4 inline-block text-xs font-semibold opacity-90">Shop now →</span>
    </Link>
  );
}
