import {defineStore} from "pinia";

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
       todoList: [],
       id: 0
    }),
    getters: {
      getTodoList(state) {

      }
    },
    actions: {
        addTodo(item) {
            this.todoList.push({item, id: ++this.id, completed: false})
        },
        toggleCompleted(id) {
            const item = this.todoList.find(item => item.id === id)
            if (item) {
                item.completed = !item.completed
            }
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter((item) => item.id !== itemId)
        }
    }
})