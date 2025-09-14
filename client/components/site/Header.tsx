import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <FlowerIcon className="h-7 w-7 text-accent" />
          <span className="text-xl font-extrabold tracking-tight text-primary">wida <span className="text-accent-foreground bg-accent/80 px-1 rounded">florist</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {location.pathname !== "/shop" && (
            <Button asChild>
              <Link to="/shop">Shop now</Link>
            </Button>
          )}
          <Button variant="secondary" asChild>
            <a
              href="https://wa.me/6281806793324"
              target="_blank"
              rel="noreferrer noopener"
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
      <div className="md:hidden border-t">
        <div className="container flex items-center justify-between py-2">
          <nav className="flex items-center gap-4 overflow-x-auto">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium whitespace-nowrap px-1 pb-1",
                    isActive ? "text-primary border-b-2 border-primary" : "text-muted-foreground",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function FlowerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 13c1.657 0 3 1.343 3 3 0 2.761-3 5-3 5s-3-2.239-3-5c0-1.657 1.343-3 3-3zm6.928-4.071a3 3 0 10-4.243-4.243 3 3 0 104.243 4.243zM5.072 8.929a3 3 0 114.243-4.243 3 3 0 01-4.243 4.243zM20 12a3 3 0 11-3-3 3 3 0 013 3zM7 12a3 3 0 10-3 3 3 3 0 003-3z" />
    </svg>
  );
}
