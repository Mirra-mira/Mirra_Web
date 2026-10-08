import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// i18n: tiếng Việt là ngôn ngữ mặc định, root `/` redirect sang `/vi/`.
// `prefixDefaultLocale: true` để URL luôn chứa `/vi/` hoặc `/en/` cho rõ ràng.
export default defineConfig({
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
    routing: {
      prefixDefaultLocale: true,
      // Tắt auto redirect vì src/pages/index.astro tự xử lý
      // (đọc localStorage.lang để nhớ lựa chọn ngôn ngữ của khách).
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
