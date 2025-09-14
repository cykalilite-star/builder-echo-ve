import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-primary">
        Contact
      </h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">WhatsApp</h2>
          <div className="mt-4 flex gap-3">
            <Button asChild>
              <a
                href="https://wa.me/6281806793324"
                target="_blank"
                rel="noreferrer noopener"
              >
                0818 0679 3324
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a
                href="https://wa.me/6287865989778"
                target="_blank"
                rel="noreferrer noopener"
              >
                0878 6598 9778
              </a>
            </Button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Email:{" "}
            <a className="underline" href="mailto:widaflorist@yahoo.com">
              widaflorist@yahoo.com
            </a>
          </p>
        </div>
        <div className="rounded-xl border p-6">
          <h2 className="font-semibold">Addresses</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Thamrin City Lt. D1, Blok H1 No.1, Waduk Melati, Jakarta Pusat
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Workshop: Blunyahan, Pendowoharjo, Sewon, Bantul, Yogyakarta
          </p>
        </div>
      </div>
    </div>
  );
}
