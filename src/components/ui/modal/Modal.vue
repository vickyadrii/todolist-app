<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps } from 'vue';
import iconClose from "@/assets/icons/ic_close.svg";

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
});

const handleBackgroundClick = (event) => {
  if (event.target === event.currentTarget) {
    props.onClose();
  }
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal" v-if="props.isOpen" @click="handleBackgroundClick">
      <div class="modal__content">
        <div class="modal__close">
          <button @click="props.onClose">
            <img :src="iconClose" alt="ic_close" />
          </button>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 100ms;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    padding: 40px;
    width: 760px;
    max-height: 700px;
    background: #ffffff;
    border-radius: 16px;
    position: relative;
    transform: scale(0.9);
    transition: transform 100ms;
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      border-radius: 4px;
      transition: all 100ms ease-out;
    }
    button:hover {
      background: #e9e9e9;
    }
  }
}
</style>
