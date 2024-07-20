<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="content">
    <h1 class="content__title">Good Evening, {{ props.name }} 🤩</h1>
    <p class="content__description">It's Monday, 25 September 2024</p>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 0;
  &__title {
    font-size: 24px;
    font-weight: 500;
  }
  &__description {
    color: #858585;
  }
}
</style>
