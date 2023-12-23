// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,
    modules: ["@nuxt/ui", "@nuxt/image"],
    build: {
        transpile: ["tslib"],
    },
    runtimeConfig: {
        public: {

        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
    ui: {
        icons: ["mdi"],
    },
    image: {

    }
});
