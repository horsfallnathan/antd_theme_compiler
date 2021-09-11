const path = require("path");
const mix = require("laravel-mix");

const lessToJS = require("less-vars-to-js");
const fs = require("fs");

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./myTheme.less"), "utf8")
);
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.less("./node_modules/antd/dist/antd.less", "dist/", {
  lessOptions: {
    // modifyVars: { "primary-color": "#bf2c23", "processing-color": "#148dc7" },
    modifyVars: themeVariables,
    javascriptEnabled: true,
  },
});
// mix.setPublicPath("dist");
mix.options({
  processCssUrls: false, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
});
