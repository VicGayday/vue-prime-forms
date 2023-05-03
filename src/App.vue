<template>
  <div class="inputs">
  <DateTimePicker/>
  <InputLink/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import InputLink from './components/InputLink.vue';
import DateTimePicker from './components/DateTimePicker.vue';

export default defineComponent({
  name: 'App',
  components: {
    InputLink,
    DateTimePicker,
  },
  setup() {
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.inputs {
  display: flex;
  justify-content: space-evenly;
}
</style>

