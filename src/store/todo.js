import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todo', () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const activeTodos = todos.filter(todo => !todo.completed);
    const unFinishedQyt = ref(activeTodos.length);
    const unFinishedChangeQyt = qty => {
        unFinishedQyt.value = qty
    }

    return { unFinishedQyt, unFinishedChangeQyt }
})