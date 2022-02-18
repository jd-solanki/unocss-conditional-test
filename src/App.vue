<!-- <script setup>
import { ref, computed } from 'vue'
const success = ref(false)
const classes = computed(() => {
  return `text-${success.value ? 'green' : 'red'}`
})

</script>

<template>
  <p :class="classes">Hello</p>
</template> -->

<script setup>
import GButton from './components/GButton.vue';
</script>

<template>
  <GButton color="green">Button</GButton>
</template>