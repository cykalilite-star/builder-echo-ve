import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-primary font-extrabold text-xl">
            <span className="inline-block h-3 w-3 rounded-full bg-accent" />
            wida florist
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Wiru Batik & Craft. Handcrafted batik fashion, bags and gifts from Bantul, Yogyakarta.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a className="hover:underline" href="mailto:widaflorist@yahoo.com">widaflorist@yahoo.com</a>
            </li>
            <li>
              <a className="hover:underline" href="https://wa.me/6281806793324" target="_blank" rel="noreferrer noopener">WhatsApp: 0818 0679 3324</a>
            </li>
            <li>
              <a className="hover:underline" href="https://wa.me/6287865989778" target="_blank" rel="noreferrer noopener">WhatsApp: 0878 6598 9778</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Addresses</h4>
          <p className="text-sm text-muted-foreground">
            Thamrin City Lt. D1, Blok H1 No.1, Waduk Melati, Jakarta Pusat
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Workshop: Blunyahan, Pendowoharjo, Sewon, Bantul, Yogyakarta
          </p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Wida Florist • Wiru Batik & Craft</p>
          <nav className="flex items-center gap-4 mt-2 md:mt-0">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
