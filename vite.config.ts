import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { stories } from "./src/data/portfolio";
import { pageRoutes } from "./src/app/routes";
export default defineConfig({
  plugins: [
    react(),
    {
      name: "github-pages-route-entries",
      apply: "build",
      generateBundle: {
        order: "post",
        handler(_, bundle) {
          const entry = bundle["index.html"];
          if (!entry || entry.type !== "asset")
            this.error("Built index.html is missing.");
          const paths = [
            ...pageRoutes
              .filter((page) => page.path !== "/")
              .map((page) => page.path.slice(1)),
            ...stories.map((story) => `work/${story.slug}`),
          ];
          for (const path of paths)
            this.emitFile({
              type: "asset",
              fileName: `${path}/index.html`,
              source: entry.source,
            });
          this.emitFile({
            type: "asset",
            fileName: "404.html",
            source: entry.source,
          });
        },
      },
    },
  ],
});
