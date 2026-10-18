import { createFileRoute, Link, notFound } from "@tanstack/react-router";

const pages: Record<string, { title: string; body: string }> = {
  privacy: { title: "Privacy Policy", body: "તમે આપેલી વિગતો ફક્ત તમારો ઓર્ડર પ્રોસેસ કરવા અને ડિલિવરી માટે ઉપયોગમાં લેવાય છે. સંપૂર્ણ નીતિ ટૂંક સમયમાં ઉપલબ્ધ થશે." },
  terms: { title: "Terms & Conditions", body: "સંપૂર્ણ નિયમો અને શરતો ટૂંક સમયમાં ઉપલબ્ધ થશે. પ્રશ્નો માટે WhatsApp: 9510942715." },
  shipping: { title: "Shipping / Delivery Policy", body: "ડિલિવરી ચાર્જ, સમય અને COD ઉપલબ્ધતા WhatsApp પર કન્ફર્મ કરવામાં આવશે. સંપૂર્ણ નીતિ ટૂંક સમયમાં ઉપલબ્ધ થશે." },
};

export const Route = createFileRoute("/policy/$slug")({
  loader: ({ params }) => {
    const p = pages[params.slug];
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Policy"} — Ayurvardhini Wellness` },
      { name: "description", content: `${loaderData?.title ?? "Policy"} for Ayurvardhini Wellness.` },
      { property: "og:title", content: `${loaderData?.title ?? "Policy"} — Ayurvardhini Wellness` },
      { property: "og:description", content: `${loaderData?.title ?? "Policy"} for Ayurvardhini Wellness.` },
    ],
  }),
  component: Policy,
});

function Policy() {
  const p = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-2xl px-5 py-12">
      <Link to="/" className="text-sm text-secondary">← પાછા જાઓ</Link>
      <h1 className="mt-4 text-2xl font-bold text-primary">{p.title}</h1>
      <p className="mt-4 leading-relaxed text-muted-foreground">{p.body}</p>
    </main>
  );
}
