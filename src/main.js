import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/style.scss'
import Lenis from 'lenis';
const lenis = new Lenis({
    duration: 4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
};
requestAnimationFrame(raf);
createApp(App).mount('#app');
