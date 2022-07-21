import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
// import person from './plugins/person';
// import globalComponents from '@/plugins/global-components';
// import focus from '@/directives/focus';
import globalDirectives from '@/plugins/global-directives';

const app = createApp(App);
app.use(globalDirectives);
// app.directive('focus', focus);
// app.use(person, { name: '홍길동' });
// app.use(globalComponents);
app.use(router);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
