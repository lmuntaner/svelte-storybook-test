<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AddTodo from '../lib/components/ui/AddTodo.svelte';

  const { Story } = defineMeta({
    title: 'UI/AddTodo',
    component: AddTodo,
  });
</script>

<Story name="Default">
  {#snippet template()}
    <AddTodo />
  {/snippet}
</Story>

<Story name="With Initial Text">
  {#snippet template()}
    <AddTodo />
  {/snippet}
</Story>

<Story name="Empty State">
  {#snippet template()}
    <AddTodo />
  {/snippet}
</Story>

<Story name="Focused State">
  {#snippet template()}
    <AddTodo />
  {/snippet}
</Story>