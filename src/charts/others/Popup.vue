<template>
  <div class="ma-2 mx-auto">
    <h3 class="green--text darken-4">{{ description }}</h3>
        <button class="black--text" @click="popupClicked">View Details</button>
  </div>
</template>
 
<script>
import Vue from 'vue'
import { EventBus } from '../../event-bus.js';
export default Vue.extend({
  props: {
    description: {
      required: true,
      type: String,
    },
  },
  methods: {
    popupClicked() {
      if(this.description.includes('Pincode')){
          EventBus.$emit('searchPincode',this.description)
      }
      else{
          EventBus.$emit('searchLocality',this.description)
      }
    },
  },
})
</script>