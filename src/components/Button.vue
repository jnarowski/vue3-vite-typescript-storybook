<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script setup lang="ts">
import './button.css';
import { reactive, computed } from 'vue';

type Size = 'small' | 'medium' | 'large'

interface Props {
  label: string
  primary?: boolean
  size?: Size
  backgroundColor?: string | null
}
  
const props = withDefaults(defineProps<Props>(), {
  label: 'Click Me',
  primary: true,
  size: 'medium',
  backgroundColor: null,
})

const emit = defineEmits(['click'])

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))

const onClick = () => emit('click')
</script>
