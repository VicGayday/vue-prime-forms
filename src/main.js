import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import FocusTrap from "primevue/focustrap";
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue, {
  locale: {
    today: 'Сегодня',
    clear: 'Очистить',
  }
});
app.directive("focustrap", FocusTrap);

app.mount('#app')
