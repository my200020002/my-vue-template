import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

//#region Router
import { VueRouterAutoImports } from "unplugin-vue-router";
import VueRouter from "unplugin-vue-router/vite";
import Layouts from "vite-plugin-vue-layouts-next";
//#endregion

//#region AutoImport
import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
//#endregion

import { viteMockServe } from "vite-plugin-mock";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    Layouts(),
    vue(),
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        {
          pinia: ["defineStore", "storeToRefs"],
        },
      ],
      resolvers: [],
      dirs: [
        "src/components/**",
        "src/stores/**",
        "src/composables",
        "src/utils",
        "src/hooks",
      ],
      dts: false,
    }),
    viteMockServe({
      mockPath: "mock",
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
