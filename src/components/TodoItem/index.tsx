import type { FC } from 'react';
import { Checkbox, type CheckboxProps } from 'antd';
import cn from 'classnames';
import type { ITodoItemProps } from './TodoItem.typings';
import './TodoItem.scss';

export const TodoItem: FC<ITodoItemProps> = (props) => {
  const { todo, toggleTodo } = props;

  const onChange: CheckboxProps['onChange'] = (event) => {
    toggleTodo({ ...todo, completed: event.target.checked });
  };

  return (
    <li className="todo-item">
      <Checkbox checked={todo.completed} onChange={onChange} />
      <span
        className={cn('todo-item__label', {
          'todo-item__label_completed': todo.completed,
        })}
      >
        {props.todo.title}
      </span>
    </li>
  );
};
