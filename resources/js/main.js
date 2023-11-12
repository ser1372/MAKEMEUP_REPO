/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
// eslint-disable-next-line import/no-unresolved
import '@core-scss/template/index.scss'
import '@layouts/styles/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

loadFonts()
console.log(router)

// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(router)
app.use(createPinia())

// Mount vue app
app.mount('#app')
