import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { ChevronLeft, ChevronRight, Layers, Package, IndianRupee, Truck, MessageCircle, ShieldCheck } from "lucide-react";
import kit from "@/assets/product-kit.jpeg.asset.json";
import gut from "@/assets/slider-gut-care.png.asset.json";
import heart from "@/assets/slider-heart-care.png.asset.json";
import urinary from "@/assets/slider-urinary-care.png.asset.json";
import liver from "@/assets/slider-liver-care.png.asset.json";
import sleep from "@/assets/slider-calm-sleep.png.asset.json";
import joint from "@/assets/slider-joint-care.png.asset.json";
import { PRODUCT_NAME, isValidMobile, isValidPin, buildWhatsAppUrl, type OrderDetails } from "@/lib/order";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayurvardhini Wellness — ૬-બોટલ વેલનેસ કિટ ₹2,999" },
      { name: "description", content: "Gut, Cardio, Urinary, Liver, Calm & Sleep અને Joint Care — ૬-બોટલ કિટ ₹2,999. WhatsApp પર ઓર્ડર કરો." },
      { property: "og:title", content: "Ayurvardhini Wellness — 6-Bottle Wellness Kit" },
      { property: "og:description", content: "૬ જુદી-જુદી ફોર્મ્યુલાની સંપૂર્ણ વેલનેસ કિટ ₹2,999. WhatsApp પર ઓર્ડર કરો." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Gut Care", img: gut.url, desc: "પાચન અને આંતરડાની સામાન્ય તંદુરસ્તીને ટેકો આપવા માટે." },
  { name: "Cardio Care", img: heart.url, desc: "હૃદય અને સામાન્ય રક્ત પરિભ્રમણની તંદુરસ્તી માટે." },
  { name: "Urinary Care", img: urinary.url, desc: "મૂત્ર માર્ગના સામાન્ય કાર્ય અને આરામને ટેકો આપવા માટે." },
  { name: "Liver Care", img: liver.url, desc: "લિવરના સામાન્ય કાર્ય અને સ્વસ્થ જીવનશૈલીને પૂરક સપોર્ટ." },
  { name: "Calm & Sleep", img: sleep.url, desc: "આરામ અને નિયમિત ઊંઘની દિનચર્યાને ટેકો આપવા માટે." },
  { name: "Joint Care", img: joint.url, desc: "સાંધા, હાડકાં અને સામાન્ય ગતિશીલતાને ટેકો આપવા માટે." },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pb-20 md:pb-0">
      <div className="bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground sm:text-sm">
        <span className="text-gold">✦</span> ૬ શક્તિશાળી ફોર્મ્યુલા • એક સંપૂર્ણ વેલનેસ કિટ
      </div>
      <Hero />
      <Slider />
      <Highlights />
      <BeforeOrder />
      <OrderCard />
      <OrderForm />
      <Footer />
      <StickyCta />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-6 px-5 py-8 md:grid-cols-2 md:gap-10 md:py-14">
      <div className="md:order-2">
        <div className="overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-soft">
          <img src={kit.url} alt="Ayurvardhini Wellness 6-Bottle Kit" width={1402} height={1122} className="h-auto w-full object-contain" />
        </div>
      </div>
      <div className="md:order-1">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold">AYURVARDHINI WELLNESS</p>
        <h1 className="mt-3 text-2xl font-bold leading-snug text-primary sm:text-3xl lg:text-4xl">તમારી વેલનેસ રૂટિન માટે ૬-બોટલ કિટ</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          પાચન, હૃદય, લિવર, મૂત્ર માર્ગ, ઊંઘ અને સાંધાની સામાન્ય તંદુરસ્તીને ધ્યાનમાં રાખીને તૈયાર કરેલી ૬ જુદી-જુદી ફોર્મ્યુલાની કિટ.
        </p>
        <div className="mt-5 flex items-end gap-3">
          <span className="text-3xl font-bold text-primary">₹2,999</span>
          <span className="pb-1 text-sm text-muted-foreground">સંપૂર્ણ ૬-બોટલ કિટ</span>
        </div>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-secondary"><Truck className="h-4 w-4" /> Cash on Delivery (ઉપલબ્ધતા મુજબ)</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => scrollTo("order")} className="btn-primary">હમણાં ઓર્ડર કરો</button>
          <button type="button" onClick={() => scrollTo("products")} className="btn-outline">૬ પ્રોડક્ટ જુઓ</button>
        </div>
      </div>
    </section>
  );
}

function Slider() {
  const ref = useRef<HTMLDivElement>(null);
  const move = (d: number) => ref.current?.scrollBy({ left: d * 260, behavior: "smooth" });
  return (
    <section id="products" className="scroll-mt-4 py-8">
      <div className="mx-auto flex max-w-6xl items-end justify-between px-5">
        <div>
          <h2 className="text-xl font-bold text-primary sm:text-2xl">તમારી ૬-બોટલ વેલનેસ કિટ</h2>
          <p className="mt-1 text-sm text-muted-foreground">દરેક બોટલને નજીકથી જુઓ</p>
        </div>
        <div className="hidden gap-2 md:flex">
          <button type="button" aria-label="પાછળ" onClick={() => move(-1)} className="icon-btn"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" aria-label="આગળ" onClick={() => move(1)} className="icon-btn"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>
      <div ref={ref} className="no-scrollbar mx-auto mt-5 flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2">
        {products.map((p) => (
          <article key={p.name} className="w-[68%] shrink-0 snap-start rounded-2xl border border-border bg-card p-3 shadow-soft sm:w-[240px]">
            <div className="flex aspect-square items-center justify-center rounded-xl bg-cream">
              <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-contain p-2" />
            </div>
            <span className="mt-3 inline-block rounded-full bg-gold/15 px-2 py-0.5 text-[11px] font-medium text-primary">કિટમાં સામેલ</span>
            <h3 className="mt-1.5 font-semibold text-primary">{p.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: Layers, label: "૬ જુદી-જુદી ફોર્મ્યુલા" },
    { icon: Package, label: "એક સંપૂર્ણ કિટ" },
    { icon: IndianRupee, label: "₹2,999" },
    { icon: Truck, label: "COD ઉપલબ્ધતા" },
  ];
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-4 md:grid-cols-4">
      {items.map(({ icon: I, label }) => (
        <div key={label} className="flex items-center gap-3 rounded-2xl border border-gold/30 bg-card p-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-gold"><I className="h-4 w-4" /></span>
          <span className="min-w-0 text-sm font-medium text-foreground">{label}</span>
        </div>
      ))}
    </section>
  );
}

function BeforeOrder() {
  const steps = [
    "પેકેજ પરના ઘટકો અને ઉપયોગની સૂચનાઓ વાંચો.",
    "લેબલ પર દર્શાવેલી માત્રાનું પાલન કરો.",
    "કોઈ દવા લેતા હો અથવા આરોગ્યની સ્થિતિ હોય તો ડૉક્ટરની સલાહ લો.",
    "અસ્વસ્થતા થાય તો ઉપયોગ બંધ કરીને આરોગ્ય નિષ્ણાતનો સંપર્ક કરો.",
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <h2 className="text-xl font-bold text-primary">ઓર્ડર કરતાં પહેલાં</h2>
      <ol className="mt-4 grid gap-2 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 rounded-xl bg-card p-3 text-sm text-foreground">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-xs font-bold text-primary">{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
    </section>
  );
}

function OrderCard() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-4">
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary p-5 text-primary-foreground sm:flex-row sm:p-6">
        <img src={kit.url} alt="" className="h-24 w-28 shrink-0 rounded-xl bg-card object-contain" />
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h2 className="text-lg font-bold">તમારી ૬-બોટલ કિટ મંગાવો</h2>
          <p className="text-sm opacity-85">{PRODUCT_NAME}</p>
          <p className="mt-1 text-2xl font-bold text-gold">₹2,999</p>
          <p className="text-xs opacity-80">Cash on Delivery, ઉપલબ્ધતા મુજબ</p>
        </div>
        <button type="button" onClick={() => scrollTo("order")} className="btn-gold w-full sm:w-auto">
          <MessageCircle className="h-5 w-5" /> WhatsApp પર ઓર્ડર કરો
        </button>
      </div>
    </section>
  );
}

type Form = Omit<OrderDetails, "quantity"> & { quantity: string };
const empty: Form = { name: "", mobile: "", address: "", area: "", city: "", state: "Gujarat", pin: "", quantity: "1" };

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (!f.name.trim()) e.name = "કૃપા કરીને તમારું પૂરું નામ લખો.";
  if (!f.mobile.trim()) e.mobile = "મોબાઇલ નંબર જરૂરી છે.";
  else if (!isValidMobile(f.mobile)) e.mobile = "કૃપા કરીને માન્ય ૧૦ અંકનો મોબાઇલ નંબર લખો.";
  if (!f.address.trim()) e.address = "સરનામું જરૂરી છે.";
  if (!f.area.trim()) e.area = "વિસ્તાર જરૂરી છે.";
  if (!f.city.trim()) e.city = "શહેર જરૂરી છે.";
  if (!f.state.trim()) e.state = "રાજ્ય જરૂરી છે.";
  if (!f.pin.trim()) e.pin = "PIN કોડ જરૂરી છે.";
  else if (!isValidPin(f.pin)) e.pin = "કૃપા કરીને માન્ય ૬ અંકનો PIN કોડ લખો.";
  const q = Number(f.quantity);
  if (!Number.isInteger(q) || q < 1) e.quantity = "જથ્થો ઓછામાં ઓછો ૧ હોવો જોઈએ.";
  return e;
}

function OrderForm() {
  const [f, setF] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [busy, setBusy] = useState(false);
  const [opened, setOpened] = useState(false);
  const qty = Math.max(1, Number.parseInt(f.quantity) || 1);

  const set = (k: keyof Form) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    setF((p) => ({ ...p, [k]: ev.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setBusy(true);
    window.open(buildWhatsAppUrl({ ...f, quantity: qty }), "_blank", "noopener");
    setOpened(true);
    setTimeout(() => setBusy(false), 1500);
  };

  const field = (k: keyof Form, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div className={props.className}>
      <label htmlFor={`f-${k}`} className="mb-1 block text-sm font-medium text-foreground">{label} <span className="text-destructive">*</span></label>
      <input id={`f-${k}`} value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} {...props} className="input" />
      {errors[k] && <p id={`e-${k}`} className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <section id="order" className="mx-auto max-w-2xl scroll-mt-4 px-5 py-8">
      <h2 className="text-xl font-bold text-primary sm:text-2xl">તમારી ઓર્ડરની વિગતો ભરો</h2>
      <p className="mt-1 text-sm text-muted-foreground">નીચેની વિગતો ભરો અને WhatsApp પર તમારો ઓર્ડર મોકલો.</p>
      <form noValidate onSubmit={submit} className="mt-5 grid gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft sm:grid-cols-2">
        {field("name", "પૂરું નામ", { autoComplete: "name", maxLength: 100, className: "sm:col-span-2" })}
        {field("mobile", "મોબાઇલ નંબર", { type: "tel", inputMode: "numeric", autoComplete: "tel", maxLength: 14, placeholder: "98XXXXXXXX", className: "sm:col-span-2" })}
        {field("address", "ઘર નંબર / બિલ્ડિંગ / શેરી", { autoComplete: "address-line1", maxLength: 200, className: "sm:col-span-2" })}
        {field("area", "વિસ્તાર / લોકાલિટી", { autoComplete: "address-line2", maxLength: 100 })}
        {field("city", "શહેર", { autoComplete: "address-level2", maxLength: 60 })}
        {field("state", "રાજ્ય", { autoComplete: "address-level1", maxLength: 60 })}
        {field("pin", "PIN કોડ", { inputMode: "numeric", autoComplete: "postal-code", maxLength: 6 })}
        <div>
          <label htmlFor="f-quantity" className="mb-1 block text-sm font-medium text-foreground">જથ્થો (કિટ) <span className="text-destructive">*</span></label>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="ઘટાડો" onClick={() => setF((p) => ({ ...p, quantity: String(Math.max(1, qty - 1)) }))} className="icon-btn">−</button>
            <input id="f-quantity" type="number" min={1} max={50} value={f.quantity} onChange={set("quantity")} className="input text-center" />
            <button type="button" aria-label="વધારો" onClick={() => setF((p) => ({ ...p, quantity: String(Math.min(50, qty + 1)) }))} className="icon-btn">+</button>
          </div>
          {errors.quantity && <p className="mt-1 text-xs text-destructive">{errors.quantity}</p>}
        </div>
        <div>
          <span className="mb-1 block text-sm font-medium text-foreground">ચુકવણી પદ્ધતિ</span>
          <div className="flex h-11 items-center gap-2 rounded-xl border border-gold/40 bg-cream px-3 text-sm">
            <span className="h-3 w-3 rounded-full border-4 border-primary" /> Cash on Delivery (ઉપલબ્ધતા મુજબ)
          </div>
        </div>


        <button type="submit" disabled={busy} className="btn-primary h-14 text-base sm:col-span-2">
          <MessageCircle className="h-5 w-5" /> {busy ? "WhatsApp ખોલી રહ્યા છીએ..." : "WhatsApp પર ઓર્ડર કન્ફર્મ કરો"}
        </button>
        <div className="space-y-1.5 text-xs text-muted-foreground sm:col-span-2">
          <p>📲 WhatsApp ખુલ્યા પછી ઓર્ડર મોકલવા માટે <strong>Send</strong> બટન દબાવો. ત્યાર બાદ અમે WhatsApp પર ઓર્ડર કન્ફર્મ કરીશું.</p>
          <p className="flex gap-1.5"><ShieldCheck className="h-4 w-4 shrink-0 text-secondary" /> તમારી વિગતો ફક્ત ઓર્ડર પ્રોસેસ કરવા અને ડિલિવરી માટે ઉપયોગમાં લેવાય છે.</p>
          {opened && <p role="status" className="rounded-lg bg-gold/15 p-2 text-foreground">WhatsApp ન ખુલ્યું? પોપ-અપ બ્લોકર તપાસો અથવા ફરી બટન દબાવો. Send દબાવ્યા વગર ઓર્ડર મોકલાતો નથી.</p>}
        </div>
      </form>
    </section>
  );
}


function Footer() {
  return (
    <footer className="mt-6 bg-primary px-5 py-8 text-primary-foreground">
      <div className="mx-auto max-w-6xl space-y-4 text-sm">
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <p className="font-semibold text-gold">Ayurvardhini Wellness</p>
          <a href="https://wa.me/919510942715" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp: 9510942715</a>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 opacity-85">
          <Link to="/policy/$slug" params={{ slug: "privacy" }} className="hover:underline">Privacy Policy</Link>
          <Link to="/policy/$slug" params={{ slug: "terms" }} className="hover:underline">Terms & Conditions</Link>
          <Link to="/policy/$slug" params={{ slug: "shipping" }} className="hover:underline">Shipping / Delivery Policy</Link>
        </nav>
        <p className="text-xs leading-relaxed opacity-75">
          આ પ્રોડક્ટ આહાર પૂરક છે. તે કોઈ રોગનું નિદાન, સારવાર, ઉપચાર અથવા નિવારણ કરવાનો વિકલ્પ નથી. પરિણામો વ્યક્તિગત રીતે અલગ હોઈ શકે છે. ઉપયોગ પહેલાં પેક પરની સૂચનાઓ વાંચો. કોઈ દવા લેતા હો, ગર્ભવતી હો અથવા આરોગ્યની સમસ્યા હોય તો ઉપયોગ પહેલાં યોગ્ય આરોગ્ય નિષ્ણાતની સલાહ લો.
        </p>
        <p className="text-xs opacity-60">© {new Date().getFullYear()} Ayurvardhini Wellness</p>
      </div>
    </footer>
  );
}

function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-card/95 px-4 pt-2.5 backdrop-blur md:hidden" style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}>
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-lg font-bold leading-none text-primary">₹2,999</p>
          <p className="text-[11px] text-muted-foreground">૬-બોટલ કિટ</p>
        </div>
        <button type="button" onClick={() => scrollTo("order")} className="btn-primary h-11 shrink-0 px-4 text-sm">
          <MessageCircle className="h-4 w-4" /> WhatsApp પર ઓર્ડર કરો
        </button>
      </div>
    </div>
  );
}
