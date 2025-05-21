import { test, expect, describe } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTodos } from '../useTodos';

describe('useTodos', () => {
  test('should add a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Test Todo');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe('Test Todo');
    expect(result.current.todos[0].completed).toBe(false);
  });

  test('should toggle a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Toggle me');
    });

    const todo = result.current.todos[0];

    act(() => {
      result.current.toggleTodo(todo);
    });

    expect(result.current.todos[0].completed).toBe(true);

    act(() => {
      result.current.toggleTodo(result.current.todos[0]);
    });

    expect(result.current.todos[0].completed).toBe(false);
  });

  test('should apply filter: active', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Completed Todo');
      result.current.addTodo('Active Todo');
    });

    const completedTodo = result.current.todos[0];

    act(() => {
      result.current.toggleTodo(completedTodo);
    });

    console.log('> ', result.current.todos);

    act(() => {
      result.current.applyFilter('active');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe('Active Todo');
  });

  test('should apply filter: completed', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Completed Todo');
      result.current.addTodo('Active Todo');
    });

    const completedTodo = result.current.todos[0];

    act(() => {
      result.current.toggleTodo(completedTodo);
    });

    act(() => {
      result.current.applyFilter('completed');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].title).toBe('Completed Todo');
  });

  test('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('First');
      result.current.addTodo('Second');
    });

    act(() => {
      result.current.toggleTodo(result.current.todos[0]);
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].completed).toBe(false);
  });
});
