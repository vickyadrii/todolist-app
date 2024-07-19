<script setup>
import { defineProps } from "vue";
import Modal from "@/components/ui/modal/Modal.vue";

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
});
</script>

<template>
  <Modal :is-open="props.isOpen" :on-close="props.onClose">
    <div>MODAL</div>
  </Modal>
</template>

<style lang="scss" scoped></style>
