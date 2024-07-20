<script setup>
import { defineProps, ref } from "vue";

// Custom Components
import Modal from "@/components/ui/modal/Modal.vue";
import Input from "@/components/ui/input/Input.vue";
import Textarea from "@/components/ui/textarea/Textarea.vue";
import Select from "@/components/ui/select/Select.vue";
import Button from "@/components/ui/button/Button.vue";

// State untuk todoList
let todoList = ref({
  id: crypto.randomUUID(),
  task: "",
  description: "",
  status: "",
});

const props = defineProps({
  isOpen: Boolean,
  onClose: Function,
});

const handleClearTodo = () => {
  todoList.value = {};
  props.onClose();
};
</script>

<template>
  <Modal :is-open="props.isOpen" :on-close="props.onClose">
    <div class="content">
      <h2>Add todo list</h2>

      <form class="form-group" @submit.prevent="$emit('createTodo', { todoList, handleClearTodo })">
        <div class="form-control">
          <label for="task">Task name</label>
          <Input type="text" id="task" placeholder="Task..." v-model="todoList.task" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <Textarea id="description" placeholder="Write your description task..." v-model="todoList.description" />
        </div>
        <div class="form-control">
          <label for="status">Status</label>
          <Select id="status" placeholder="--- Select a status ---" v-model="todoList.status">
            <option value="" disabled>--- Select a status ---</option>
            <option value="do">Do</option>
            <option value="done">Done</option>
          </Select>
        </div>

        <div class="form-button">
          <Button>Add todo</Button>
        </div>
      </form>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-weight: 600;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-control {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #616060;
  }
}
.form-button {
  display: flex;
  justify-content: end;
}
</style>
