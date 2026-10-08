import vi from "./vi.json";
import en from "./en.json";

// Mỗi locale có structure giống hệt nhau (vi là nguồn, en match 1:1).
export type Locale = "vi" | "en";
export type UIStrings = typeof vi;

const DICTIONARIES: Record<Locale, UIStrings> = {
  vi,
  en: en as UIStrings,
};

export function getUI(locale: Locale): UIStrings {
  return DICTIONARIES[locale];
}

export const LOCALES: Locale[] = ["vi", "en"];
export const DEFAULT_LOCALE: Locale = "vi";

export function otherLocale(locale: Locale): Locale {
  return locale === "vi" ? "en" : "vi";
}

// Format tiền theo locale: vi → VNĐ (dấu chấm phẩy), en → USD ($).
export function formatPrice(
  amount: { vnd?: number; usd?: number },
  locale: Locale
): string {
  if (locale === "vi") {
    const value = amount.vnd;
    if (value == null) return "";
    return value.toLocaleString("vi-VN") + " ₫";
  }
  const value = amount.usd;
  if (value == null) return "";
  return "$" + value.toLocaleString("en-US");
}
