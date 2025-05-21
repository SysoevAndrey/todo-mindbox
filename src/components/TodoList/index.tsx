import type { FC } from 'react';
import type { ITodoListProps } from './TodoList.typings';
import { TodoItem } from '../TodoItem';
import './TodoList.scss';

export const TodoList: FC<ITodoListProps> = (props) => {
  const { todos, toggleTodo } = props;

  if (todos.length === 0) {
    return null;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
