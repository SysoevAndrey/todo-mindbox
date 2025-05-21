import type { ITodo } from '../../types';

export interface ITodoItemProps {
  todo: ITodo;
  toggleTodo: (todo: ITodo) => void;
}
