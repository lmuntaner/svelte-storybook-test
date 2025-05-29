<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  let newTodoText = '';
  const dispatch = createEventDispatcher();

  function addTodo() {
    if (newTodoText.trim() === '') return;
    dispatch('addtodo', {
      text: newTodoText,
    });
    newTodoText = '';
  }
</script>

<div class="add-todo">
  <input
    type="text"
    bind:value={newTodoText}
    on:keydown={(e) => e.key === 'Enter' && addTodo()}
    placeholder="What needs to be done?"
  />
  <button on:click={addTodo}>Add Todo</button>
</div>

<style>
  .add-todo {
    display: flex;
    margin-bottom: 1rem;
  }
  input[type='text'] {
    flex-grow: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5rem;
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
