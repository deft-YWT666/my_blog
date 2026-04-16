import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { createApp } from 'vue';

// 页面组件
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Undergraduate from './views/Undergraduate.vue';
import Research from './views/Posts.vue';
import Projects from './views/Projects.vue';
import Awards from './views/Awards.vue';
import BlogList from './views/BlogList.vue';
import BlogPost from './views/BlogPost.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/undergraduate', component: Undergraduate },
    { path: '/research', component: Research },
    { path: '/projects', component: Projects },
    { path: '/awards', component: Awards },
    { path: '/blogs', component: BlogList },
    { path: '/blogs/:title', component: BlogPost },
    { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
