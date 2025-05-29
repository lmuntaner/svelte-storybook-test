<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import TodoItem from '../lib/components/TodoItem.svelte';

  const { Story } = defineMeta({
    title: 'Atoms/TodoItem',
    component: TodoItem,
    args: {
      todo: {
        id: 1,
        text: 'Learn Svelte',
        completed: false,
      },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <!-- Pass the todo prop explicitly -->
    <TodoItem todo={args.todo} />
  {/snippet}
</Story>

<Story name="Completed" args={{
  todo: {
    id: 2,
    text: 'Learn Svelte',
    completed: true,
  },
}}>
  {#snippet template(args)}
    <TodoItem todo={args.todo} />
  {/snippet}
</Story>

<Story name="Long Text" args={{
  todo: {
    id: 3,
    text: 'This is a very long todo item text that demonstrates how the component handles longer content and ensures proper wrapping',
    completed: false,
  },
}}>
  {#snippet template(args)}
    <TodoItem todo={args.todo} />
  {/snippet}
</Story>
