<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.checked ? 'done' : 'todo');
};
</script>

<template>
  <input type="checkbox" :checked="props.modelValue === 'done'" @change="updateValue" />
</template>

<style lang="scss" scoped>
input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid #3c3b3b;
  border-radius: 3px;
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: #3c3b3b;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}

input[type="checkbox"]:disabled {
  color: #959495;
  cursor: not-allowed;
}
</style>
