import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    theme: {
        extend: {
            // fontFamily: {
            //     logo: ["'Josefin Sans'", "sans-serif"]
            // }
        },
    },
    plugins: [
        // iconsPlugin({
        //     collections: getIconCollections(["mdi", "svg-spinners"]),
        // }),
    ],
};
