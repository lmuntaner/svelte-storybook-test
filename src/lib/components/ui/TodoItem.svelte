<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type Todo = { id: number; text: string; completed: boolean };

  let { todo }: { todo: Todo } = $props();

  const dispatch = createEventDispatcher();

  function toggleComplete() {
    dispatch('togglecomplete', { id: todo.id });
  }
</script>

<li class:completed={todo.completed}>
  <input type="checkbox" checked={todo.completed} onchange={toggleComplete} />
  <span>{todo.text}</span>
</li>

<style>
  li {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }
  li.completed span {
    text-decoration: line-through;
    color: #aaa;
  }
  input[type='checkbox'] {
    margin-right: 0.5rem;
  }
</style>
