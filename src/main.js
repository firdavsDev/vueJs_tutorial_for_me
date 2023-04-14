import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import uiComponents  from './ui-components'
import './index.css'

const app = createApp(App)

// <--! global ui components larni base folderni hohlagan file ichiga chaqirish uchub yoziladi -->
uiComponents.map(component => 
    {app.component(component.name, component)})

app.mount('#app')
