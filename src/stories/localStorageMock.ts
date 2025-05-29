// src/stories/localStorageMock.ts

// Define Todo interface locally as creating a separate file failed
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// This version of withMockLocalStorage is designed to be used as a Storybook decorator
// It expects mockTodos to be passed via story args.
// Commenting out as it's not currently used and was causing a lint warning.
/*
export const withMockLocalStorageDecorator = (storyFn: () => any, context: { args: { mockTodos?: Todo[] | null } }) => {
  const originalGetItem = localStorage.getItem;
  const originalSetItem = localStorage.setItem;
  let cleanupNeeded = false;

  if (context.args.mockTodos !== undefined) {
    cleanupNeeded = true;
    const mockTodos = context.args.mockTodos;

    localStorage.getItem = (key: string): string | null => {
      if (key === 'todos') {
        return mockTodos ? JSON.stringify(mockTodos) : null;
      }
      return originalGetItem.call(localStorage, key);
    };

    localStorage.setItem = (key: string, value: string): void => {
      if (key === 'todos') {
        // console.log('Storybook mock (decorator): localStorage.setItem for todos', value);
        // In a decorator, modifying localStorage might affect subsequent stories if not cleaned up properly.
        // For now, make it a no-op to ensure story isolation.
        return;
      }
      originalSetItem.call(localStorage, key, value);
    };
  }

  const result = storyFn(); // Render the story

  // Cleanup: Storybook should handle decorator cleanup if they are set up and torn down correctly.
  // However, direct manipulation of global objects like localStorage can be tricky.
  // A more robust approach for cleanup is often within the story's render function or via component lifecycle.
  if (cleanupNeeded) {
    // This cleanup will run after the story function executes, but before the story is potentially unmounted.
    // It's essential if the same localStorage instance is shared across stories.
    localStorage.getItem = originalGetItem;
    localStorage.setItem = originalSetItem;
  }

  return result;
};
*/

// This version is for explicit use within a story's render function for more control
export const applyMockLocalStorage = (mockTodos: Todo[] | null): (() => void) => {
  const originalGetItem = localStorage.getItem;
  const originalSetItem = localStorage.setItem;

  localStorage.getItem = (key: string): string | null => {
    if (key === 'todos') {
      return mockTodos ? JSON.stringify(mockTodos) : null;
    }
    return originalGetItem.call(localStorage, key);
  };

  localStorage.setItem = (key: string, value: string): void => {
    if (key === 'todos') {
      // console.log('Storybook mock (apply): localStorage.setItem for todos', value);
      // This mock can be more stateful if needed, e.g., updating a temporary in-memory store for the story.
      return; 
    }
    originalSetItem.call(localStorage, key, value);
  };

  // Return a cleanup function
  return () => {
    localStorage.getItem = originalGetItem;
    localStorage.setItem = originalSetItem;
  };
};
