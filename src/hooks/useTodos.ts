import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { ITodo, TFilter } from '../types';

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<TFilter>('all');

  const addTodo = useCallback((title: string) => {
    setTodos((todos) => [...todos, { id: uuidv4(), title, completed: false }]);
  }, []);

  const toggleTodo = useCallback((todoToToggle: ITodo) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === todoToToggle.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  const applyFilter = useCallback((filter: TFilter) => {
    setFilter(filter);
  }, []);

  const clearCompleted = useCallback(() => {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
  }, []);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return {
    todos: filteredTodos,
    addTodo,
    toggleTodo,
    applyFilter,
    clearCompleted,
  };
};
