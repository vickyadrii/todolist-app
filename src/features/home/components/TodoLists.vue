<script setup>
// import { dummyTasks } from "@/constants";
import { ref, onMounted, watch } from "vue";
import ModalAddForm from "./ModalAddForm.vue";

import iconPlus from "@/assets/icons/ic_plus.svg";
import iconOption from "@/assets/icons/ic_option.svg";
import Checkbox from "@/components/ui/checkbox/Checkbox.vue";

const todos = ref([]);
let showModal = ref(false);

const handleShowModal = () => {
  showModal.value = !showModal.value;
};

const handleSubmit = (data) => {
  todos.value.push(data.todoList);
  data.handleClearTodo();
};

onMounted(() => {
  const savedTodos = localStorage.getItem('todo-lists');
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});

watch(todos, (newTodos) => {
  localStorage.setItem('todo-lists', JSON.stringify(newTodos));
}, { deep: true });
</script>

<template>
  <div class="title-section">
    <button @click="handleShowModal"><img :src="iconPlus" alt="ic_plus" /> New Task</button>
  </div>

  <div class="tasks">
    <h3 class="tasks__title">Tasks</h3>
    <div class="todo-lists" v-if="todos.length > 0">
      <div :class="['todo', todo.status === 'done' && 'todo__done']" v-for="todo in todos" :key="todo.id">
        <div class="todo__title-content">
          <Checkbox :id="todo.task" v-model="todo.status" checkedValue="done" uncheckedValue="todo" />
          <label :for="todo.task">{{ todo.task }}</label>
        </div>

        <button>
          <img :src="iconOption" alt="ic_option" />
        </button>
      </div>
    </div>
    <p v-else>Data kosong :)</p>
  </div>

  <!-- Modal Add Form -->
  <ModalAddForm :is-open="showModal" :on-close="handleShowModal" @createTodo="handleSubmit" />
</template>

<style lang="scss" scoped>
.title-section {
  padding: 8px 16px;
  border: 1px dashed #bfbfbf;
  border-radius: 8px;

  button {
    padding: 6px 16px;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 200ms ease-out;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  button:hover {
    background: #f2f2f2;
  }
  button:active {
    background: #e8e8e8;
  }
}

.tasks {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    font-size: 20px;
    font-weight: 500;
  }

  .todo-lists {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .todo {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #6c6c6c;
    border-radius: 8px;
    &__title-content {
      display: flex;
      align-items: center;
      gap: 8px;

      label {
        color: #6c6c6c;
      }
    }
    
    &__done {
      background: #e0dede;

      label {
        text-decoration: line-through;
      }
    }
  }
}
</style>
