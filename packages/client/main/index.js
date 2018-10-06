import Vue from 'vue';
import App from './components/app.vue';

const appDiv = document.createElement('div');
appDiv.id = 'app';
document.body.appendChild(appDiv);

new Vue({
    el: appDiv,
    render: (h) => h(App),
    components: {App}
});
