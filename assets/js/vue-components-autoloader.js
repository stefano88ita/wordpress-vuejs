import Vue from 'vue';
window.Vue = Vue;
const files = require.context('./components/', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
const app = new Vue({
    el: '#app',
    data: function(){
        let data = window.data||{}
        return {
            data,
        };
    }
});