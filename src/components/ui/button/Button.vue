<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button><slot /></button>
</template>

<style lang="scss" scoped>
button {
  padding: 10px 20px;
  color: #ffffff;
  background: #1f1c1c;
  transition: all 200ms ease-out;
  border-radius: 4px;
  &:hover {
    background: #3b3939;
  }
  &:active {
    background: #1f1c1c;
  }
}
</style>
