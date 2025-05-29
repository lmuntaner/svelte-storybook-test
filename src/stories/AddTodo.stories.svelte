<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AddTodo from '../components/AddTodo.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'Atoms/AddTodo',
    component: AddTodo,
    tags: ['autodocs'],
    args: {
      onaddtodo: fn(),
    },
    argTypes: {
      onaddtodo: {
        action: 'addtodo',
        description: 'Event fired when a new todo is added',
      },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <AddTodo {...args} />
  {/snippet}
</Story>

<Story name="With Placeholder Focus">
  {#snippet template(args)}
    <div style="padding: 20px; background-color: #f5f5f5;">
      <p style="margin-bottom: 10px; color: #666; font-size: 14px;">
        Demo: This story shows the component in a contained environment
      </p>
      <AddTodo {...args} />
    </div>
  {/snippet}
</Story>