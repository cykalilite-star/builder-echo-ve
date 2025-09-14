import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold leading-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">Rp {product.price.toLocaleString("id-ID")}</p>
        <div className="mt-3 flex items-center gap-2">
          <Button className="flex-1">Add to cart</Button>
          <Button variant="secondary" asChild>
            <a
              href={`https://wa.me/6281806793324?text=${encodeURIComponent(
                `Halo, saya tertarik dengan ${product.name} (Rp ${product.price.toLocaleString("id-ID")}).`,
              )}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Chat
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
