import { describe, it, expect } from "vitest";
import { buildWhatsAppUrl, buildOrderMessage, isValidMobile, isValidPin } from "@/lib/order";

const o = { name: "Ram", mobile: "9876543210", address: "12 A", area: "Navrangpura", city: "Ahmedabad", state: "Gujarat", pin: "380009", quantity: 3 };

describe("order", () => {
  it("sends to business number", () => {
    expect(buildWhatsAppUrl(o).startsWith("https://wa.me/919510942715?text=")).toBe(true);
  });
  it("calculates subtotal from quantity", () => {
    expect(buildOrderMessage(o)).toContain("Product Subtotal: ₹8,997");
  });
  it("validates mobile and pin", () => {
    expect(isValidMobile("9876543210")).toBe(true);
    expect(isValidMobile("1234567890")).toBe(false);
    expect(isValidPin("380009")).toBe(true);
    expect(isValidPin("38000")).toBe(false);
  });
});
