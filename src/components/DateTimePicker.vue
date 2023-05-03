<template>
  <Calendar id="calendar-timeonly" v-model="time" timeOnly showIcon showButtonBar />
</template>

<script>
import { defineComponent, ref } from 'vue';
import Calendar from 'primevue/calendar';

export default defineComponent({
  name: "DateTimePicker",
  components: {
    Calendar
  },
  setup() {
    const time = ref("");

    return { time }
  }
})
</script>
<style scoped>
#calendar-timeonly {
  background-color: #f5f5f5;
  font-size: 16px;
}

#calendar-timeonly .p-highlight {
  color: #fff;
}
</style>
