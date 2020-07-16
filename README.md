# Wordpress Vue.js Boilerplate #
This template is used to easly use Vue.js components inside a regular Wordpress custom theme.

## Setup
First, checkout this repository in ``wp-content/themes/YOUR_CUSTOM_THEME_DIRECTORY``, change your template name in file ``style.css``, then run the command `npm install`.

Then open `webpack.mix.js` and put your template dist directory in replace of `/wordpress-vue/wp-content/themes/wordpress-vue/dist/`.

## Compile scripts ##
To perform scripts compiling you can use:
- `npm run development`
- `npm run production`
- `npm run watch`

By default this boilerplate compile only `assets/js/index.js`, `assets/scss/index.scss` and perform a copy of the directory `assets/img`. Scripts and resources are placed into `dist` directory.

## Vue.js Components
By default all Vue.js components are placed under `assets/js/components`. You don't need to import in the main Javascript file, because the script under `assets/js/vue-components-autoloader.js` require all components by itself.

## Use Vue.js
To render a Vue.js component you can place every component you need in a html element with **id** `app`.

For this id the components are loaded automatically.

By the way, you can always perform your own init if you don't want to use `#app` or you can change id under `assets/js/vue-components-autoloader.js`.

## Passing data to Vue.js components
If you need to pass variables to a Vue.js component you can simply add your `<script>` tag before the `wp_footer()` line. In the `<script>` area you can define your variables as proprieties of an object named `data`. The file `index.php` contains an example:
```
<script>
    var data = {
        msg: 'This is a dummy variable'
    }
</script>
``` 
And you can simply pass this variable to the component in this way:
```
<hello-world :msg='data.msg'></hello-world>
```
If you don't want to use data object you must define a new Vue instance or change the file `assets/js/vue-components-autoloader.js`, that contains the data initialization instruction.

## Remove placeholders
In your production environment you can remove:
- `index.php`
- `assets/img/favicon.ico`
- `assets/js/components/HelloWorld.vue`

## Components included
This is a list of components included in the setup:
- Bootstrap
- FontAwesome
- jQuery
- Vue.js
- Axios

## FontAwesome Pro
In order to use FontAwesome Pro you need to add your ``.npmrc`` file in the template directory root.
If you don't want to use the pro version, you can simply change to the free repository in the package.json before the first setup and change the style requirements in the ``assets/scss/index.scss`` for this directives:
```
@import '~@fortawesome/fontawesome-pro/scss/fontawesome.scss';
@import '~@fortawesome/fontawesome-pro/scss/regular.scss';
@import '~@fortawesome/fontawesome-pro/scss/light.scss';
@import '~@fortawesome/fontawesome-pro/scss/solid.scss';
```