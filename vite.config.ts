import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/guanyunlab/",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            comps: path.resolve(__dirname, "src/components"),
            styles: path.resolve(__dirname, "src/styles"),
            plugins: path.resolve(__dirname, "src/plugins"),
            apis: path.resolve(__dirname, "src/apis"),
            utils: path.resolve(__dirname, "src/utils"),
            views: path.resolve(__dirname, "src/views"),
            stores: path.resolve(__dirname, "src/stores"),
            assets: path.resolve(__dirname, "src/assets"),
            layouts: path.resolve(__dirname, "src/layouts")
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/global.scss";`,
            },
        },
    },
});
