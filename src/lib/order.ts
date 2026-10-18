export const UNIT_PRICE = 2999;
export const WHATSAPP_NUMBER = "919510942715";
export const PRODUCT_NAME = "Ayurvardhini Wellness 6-Bottle Kit";

export type OrderDetails = {
  name: string;
  mobile: string;
  address: string;
  area: string;
  city: string;
  state: string;
  pin: string;
  quantity: number;
};

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const isValidMobile = (m: string) => /^(?:\+?91|0)?[6-9]\d{9}$/.test(m.replace(/[\s-]/g, ""));
export const isValidPin = (p: string) => /^[1-9]\d{5}$/.test(p.trim());

export function buildOrderMessage(o: OrderDetails): string {
  const subtotal = UNIT_PRICE * o.quantity;
  return [
    "નમસ્તે Ayurvardhini Wellness,",
    "મારે ૬-બોટલ વેલનેસ કિટનો ઓર્ડર આપવો છે.",
    "",
    "ઓર્ડર વિગતો:",
    `Product: ${PRODUCT_NAME}`,
    `Quantity: ${o.quantity}`,
    `Unit Price: ${formatINR(UNIT_PRICE)}`,
    `Product Subtotal: ${formatINR(subtotal)}`,
    "Delivery Charge: To Be Confirmed",
    `Total: ${formatINR(subtotal)} + Delivery (To Be Confirmed)`,
    "",
    "ગ્રાહકની વિગતો:",
    `નામ: ${o.name.trim()}`,
    `મોબાઇલ નંબર: ${o.mobile.trim()}`,
    `સરનામું: ${o.address.trim()}`,
    `વિસ્તાર: ${o.area.trim()}`,
    `શહેર: ${o.city.trim()}`,
    `રાજ્ય: ${o.state.trim()}`,
    `PIN Code: ${o.pin.trim()}`,
    "ચુકવણી: Cash on Delivery, subject to availability",
    "",
    "કૃપા કરીને મારો ઓર્ડર અને ડિલિવરીની વિગતો કન્ફર્મ કરો.",
    "આભાર.",
  ].join("\n");
}

export function buildWhatsAppUrl(o: OrderDetails): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildOrderMessage(o))}`;
}
