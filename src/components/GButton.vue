<script setup>
import { computed } from 'vue'

const props = defineProps({
    color: 'indigo' | 'green'
})

const classes = computed(() => `bg-${props.color} text-gray`)
</script>

<template>
    <button :class="classes">
        <slot></slot>
    </button>
</template>