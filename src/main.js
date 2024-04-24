import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
// import { connectDatabase } from './server.js'
  

const app = createApp(App)
// connectDatabase(app)
registerPlugins(app)
app.mount('#app')
