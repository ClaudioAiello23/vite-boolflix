import { createApp } from 'vue'

// agganciato file main.scss come css principale
import './assets/styles/main.scss'

import App from './App.vue'


// FONT AWESOME IMPORT //
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarBlack } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faStar, faStarBlack)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
