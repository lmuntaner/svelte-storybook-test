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
