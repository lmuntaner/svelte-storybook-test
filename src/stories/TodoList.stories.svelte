<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TodoList from '../components/TodoList.svelte';
  import { applyMockLocalStorage } from './localStorageMock.ts';

  const { Story } = defineMeta({
    title: 'Organisms/TodoList',
    component: TodoList,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
    },
  });
</script>

<Story name="Empty List">
  {#snippet template()}
    <!-- Mock localStorage to return null for empty state -->
    {applyMockLocalStorage(null)}
    <TodoList />
  {/snippet}
</Story>

<Story name="With Default Todos">
  {#snippet template()}
    <!-- Mock localStorage to return null, so component uses its default todos -->
    {applyMockLocalStorage(null)}
    <TodoList />
  {/snippet}
</Story>

<Story name="Mixed Completed States">
  {#snippet template()}
    {applyMockLocalStorage([
      { id: 1, text: 'Learn Svelte', completed: true },
      { id: 2, text: 'Build a Todo App', completed: false },
      { id: 3, text: 'Write comprehensive tests', completed: false },
      { id: 4, text: 'Deploy to production', completed: true },
      { id: 5, text: 'Celebrate success', completed: false },
    ])}
    <TodoList />
  {/snippet}
</Story>

<Story name="All Completed">
  {#snippet template()}
    {applyMockLocalStorage([
      { id: 1, text: 'Learn Svelte', completed: true },
      { id: 2, text: 'Build a Todo App', completed: true },
      { id: 3, text: 'Write tests', completed: true },
      { id: 4, text: 'Deploy', completed: true },
    ])}
    <TodoList />
  {/snippet}
</Story>

<Story name="All Uncompleted">
  {#snippet template()}
    {applyMockLocalStorage([
      { id: 1, text: 'Learn Svelte', completed: false },
      { id: 2, text: 'Build a Todo App', completed: false },
      { id: 3, text: 'Write tests', completed: false },
      { id: 4, text: 'Deploy', completed: false },
    ])}
    <TodoList />
  {/snippet}
</Story>

<Story name="Single Todo">
  {#snippet template()}
    {applyMockLocalStorage([
      { id: 1, text: 'My only todo item', completed: false },
    ])}
    <TodoList />
  {/snippet}
</Story>

<Story name="Long Todo Texts">
  {#snippet template()}
    {applyMockLocalStorage([
      { 
        id: 1, 
        text: 'This is a very long todo item that demonstrates how the TodoList component handles longer text content and ensures proper wrapping and display in the context of the full todo application', 
        completed: false 
      },
      { 
        id: 2, 
        text: 'Another long todo item that is already completed to show the strikethrough effect on lengthy text content', 
        completed: true 
      },
      { id: 3, text: 'Short item', completed: false },
    ])}
    <TodoList />
  {/snippet}
</Story>

<Story name="Large List">
  {#snippet template()}
    {applyMockLocalStorage([
      { id: 1, text: 'First todo', completed: true },
      { id: 2, text: 'Second todo', completed: false },
      { id: 3, text: 'Third todo', completed: true },
      { id: 4, text: 'Fourth todo', completed: false },
      { id: 5, text: 'Fifth todo', completed: false },
      { id: 6, text: 'Sixth todo', completed: true },
      { id: 7, text: 'Seventh todo', completed: false },
      { id: 8, text: 'Eighth todo', completed: true },
      { id: 9, text: 'Ninth todo', completed: false },
      { id: 10, text: 'Tenth todo', completed: false },
    ])}
    <TodoList />
  {/snippet}
</Story>