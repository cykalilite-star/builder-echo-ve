import CategoryCard from "@/components/site/CategoryCard";
import ProductCard from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featured = [
  {
    id: "tas-ombak",
    name: "Tas Batik Ombak",
    price: 185000,
    image: "/placeholder.svg",
    badge: "Best Seller",
  },
  {
    id: "kemeja-parang",
    name: "Kemeja Batik Parang",
    price: 249000,
    image: "/placeholder.svg",
  },
  {
    id: "scarf-mega-mendung",
    name: "Scarf Mega Mendung",
    price: 99000,
    image: "/placeholder.svg",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />

      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary">Belanja berdasarkan kategori</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard title="Baju Batik" description="Kemeja, dress dan outer batik modern." />
          <CategoryCard title="Tas Batik" description="Tote, sling dan pouch handmade." gradient="from-[#fb923c] via-[#f97316] to-[#f43f5e]" />
          <CategoryCard title="Handycraft" description="Souvenir & dekor batik pilihan." gradient="from-[#facc15] via-[#fb923c] to-[#f97316]" />
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary">Produk unggulan</h2>
          <Button asChild variant="secondary"><Link to="/shop">Lihat semua</Link></Button>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-primary">Wiru Batik & Craft</h3>
            <p className="mt-3 text-muted-foreground">
              Setiap produk dibuat dengan teliti oleh perajin lokal di Bantul. Kami memadukan motif klasik seperti Parang dan Mega Mendung dengan potongan masa kini.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild><Link to="/shop">Mulai belanja</Link></Button>
              <Button variant="secondary" asChild>
                <a href="https://wa.me/6281806793324" target="_blank" rel="noreferrer noopener">Konsultasi desain</a>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f59e0b] via-[#f97316] to-[#ef4444] p-1">
            <div className="rounded-2xl bg-white p-6">
              <div className="grid grid-cols-3 gap-4">
                {featured.map((p) => (
                  <img key={p.id} src={p.image} alt={p.name} className="rounded-lg shadow-sm" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fde68a]">
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(80rem_40rem_at_20%_10%,#fb923c_10%,transparent)]" />
      <div className="container py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold text-accent-foreground">Flower, Craft & Recycle</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
              wida <span className="text-accent">florist</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Toko batik dan kerajinan. Tas batik • Baju batik • Handycraft batik.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/shop">Belanja sekarang</Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href="mailto:widaflorist@yahoo.com">Email kami</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#fb923c] via-[#f97316] to-[#ef4444] p-1 shadow-xl">
              <div className="h-full w-full rounded-3xl bg-white/90 grid place-items-center">
                <img src="/placeholder.svg" alt="Batik showcase" className="w-3/4 rounded-xl shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#ef4444] p-1">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white/95 p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-primary">Pesan dalam jumlah besar?</h3>
              <p className="mt-1 text-muted-foreground">Kami menerima pesanan seragam, hampers, dan custom gift set.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <a href="https://wa.me/6281806793324" target="_blank" rel="noreferrer noopener">Chat WhatsApp</a>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/contact">Detail kontak</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
