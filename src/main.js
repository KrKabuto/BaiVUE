import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import { connectDatabase } from './server/server.js'
  
connectDatabase()
const app = createApp(App)

registerPlugins(app)
app.mount('#app')
