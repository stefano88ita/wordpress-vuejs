const mix = require('laravel-mix');

mix.webpackConfig({

    module: {
        rules: [
            /*
            {
                test:  /\.vue$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            ignores: []
                        }
                    },
                ]
            }


             */
            {
                test:  /\.js$/,
                enforce: 'post',
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                        }
                    },
                ]
            }


        ]
    }

});
mix.setPublicPath('dist/')
    .setResourceRoot('/wordpress-vue/wp-content/themes/wordpress-vue/dist/')
    .js('assets/js/index.js', 'js')
    .sass('assets/scss/index.scss', 'css')
    .copy('assets/img', 'dist/img');