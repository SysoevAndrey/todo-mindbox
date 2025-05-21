import type { ITodo } from '../../types';

export interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: (todo: ITodo) => void;
}
