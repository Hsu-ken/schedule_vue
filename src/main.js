import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

import App from './App.vue'
import router from './router'


// import vuetify from './plugins/vuetify'

const vuetify = createVuetify()
const app = createApp(App)


app.use(vuetify)
app.use(router)
app.mount('#app')