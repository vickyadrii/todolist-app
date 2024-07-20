<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <input :value="props.modelValue" @input="updateValue" />
</template>

<style lang="scss" scoped>
input {
  padding: 10px 14px;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
      outline: 1px solid #000000;
  }
}
</style>
