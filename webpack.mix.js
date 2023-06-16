const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('resources/js/app.jsx', 'public/js')
    .react()
    // .postCss('resources/css/app.css', 'public/css', [
    //     tailwindcss('tailwind.config.js'),
    //     //
    // ]);
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
            },
        },
    })
    .sourceMaps();
// mix.react('resources/js/app.js', 'public/js')
//    .inertia();

// if (mix.inProduction()) {
//     mix.version();
// }
