<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const props = defineProps({
  modelValue: String,
  placeholder: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="custom-select">
    <select :value="props.modelValue" @change="updateValue">
      <slot />
    </select>
  </div>
</template>

<style lang="scss" scoped>
select {
  appearance: none;
  padding: 10px 14px;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  color: #1f1c1c;
  &:focus {
    outline: 1px solid #a0a0a0;
  }
}

.custom-select {
  position: relative;
  width: 100%;
}

.custom-select::before,
.custom-select::after {
  --size: 0.3rem;
  position: absolute;
  content: "";
  right: 1rem;
  pointer-events: none;
}

.custom-select::before {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #1f1c1c;
  top: 40%;
}

.custom-select::after {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #1f1c1c;
  top: 55%;
}
</style>
