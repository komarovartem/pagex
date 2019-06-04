const mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.setPublicPath('./assets')
    .js('./src/js/frontend/main.js', './assets/js/frontend')
    .sass('./src/scss/frontend/frontend.scss', './assets/css')
    .sass('./src/scss/builder/builder.scss', './assets/css')
    .sass('./src/scss/backend/backend.scss', './assets/css')
    .sass('./src/scss/admin/admin.scss', './assets/css')
    .polyfill({
        enabled: true,
        useBuiltIns: 'usage',
        targets: {'ie': 11}
    })
    .options({
        processCssUrls: false,
        postCss: [
            require('autoprefixer'),
            require('css-mqpacker')
        ],
    });

// disable mix-manifest.json
Mix.manifest.refresh = _ => void 0;