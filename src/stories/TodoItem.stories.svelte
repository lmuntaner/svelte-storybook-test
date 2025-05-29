<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TodoItem from '../components/TodoItem.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Atoms/TodoItem',
    component: TodoItem,
    tags: ['autodocs'],
    args: {
      todo: {
        id: 1,
        text: 'Learn Svelte',
        completed: false,
      },
      ontogglecomplete: fn(),
    },
    argTypes: {
      todo: {
        control: 'object',
        description: 'Todo item object with id, text, and completed properties',
      },
    },
  });
</script>

<Story name="Uncompleted" args={{
  todo: {
    id: 1,
    text: 'Learn Svelte',
    completed: false,
  }
}} />

<Story name="Completed" args={{
  todo: {
    id: 2,
    text: 'Build a Todo App',
    completed: true,
  }
}} />

<Story name="Long Text" args={{
  todo: {
    id: 3,
    text: 'This is a very long todo item that demonstrates how the component handles longer text content and ensures proper wrapping and display',
    completed: false,
  }
}} />

<Story name="Long Text Completed" args={{
  todo: {
    id: 4,
    text: 'This is a very long completed todo item that shows how strikethrough text appears with longer content',
    completed: true,
  }
}} />
