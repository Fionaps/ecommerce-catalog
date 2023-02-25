import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

var delay = 600;
            
$(window).on('load', function() {
  setTimeout(function(){
     $("#loading").hide();
     $(".loader").hide();
  },delay);
});