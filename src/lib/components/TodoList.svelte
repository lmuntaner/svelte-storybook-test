<script lang="ts">
  import AddTodo from './AddTodo.svelte';
  import TodoItem from './ui/TodoItem.svelte';
  import { onMount } from 'svelte';

  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  let todos: Todo[] = [];
  let nextId = 1;

  // Load todos from localStorage on component mount
  onMount(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      todos = JSON.parse(storedTodos);
      const maxId = todos.reduce((max, t) => Math.max(max, t.id), 0);
      nextId = maxId + 1;
    } else {
      // Initialize with some default todos if none are stored
      todos = [
        { id: nextId++, text: 'Learn Svelte', completed: true },
        { id: nextId++, text: 'Build a Todo App', completed: false },
      ];
      saveTodos();
    }
  });

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function handleAddTodo(event: CustomEvent<{ text: string }>) {
    todos = [
      ...todos,
      { id: nextId++, text: event.detail.text, completed: false },
    ];
    saveTodos();
  }

  function handleToggleComplete(event: CustomEvent<{ id: number }>) {
    todos = todos.map((todo) =>
      todo.id === event.detail.id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos();
  }
</script>

<div class="todo-list-container">
  <h1>Svelte Todo App</h1>
  <AddTodo on:addtodo={handleAddTodo} />
  {#if todos.length === 0}
    <p>No todos yet! Add one above.</p>
  {:else}
    <ul>
      {#each todos as todo (todo.id)}
        <TodoItem {todo} on:togglecomplete={handleToggleComplete} />
      {/each}
    </ul>
  {/if}
</div>

<style>
  .todo-list-container {
    max-width: 500px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  h1 {
    text-align: center;
    color: #333;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  p {
    text-align: center;
    color: #777;
  }
</style>
