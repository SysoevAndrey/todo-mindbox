import { useState, type FC, type FormEvent } from 'react';
import { Input } from 'antd';
import type { ITodoFormProps } from './TodoForm.typings';
import './TodoForm.scss';

export const TodoForm: FC<ITodoFormProps> = (props) => {
  const { onAddTodo } = props;

  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    onAddTodo(inputValue);

    setInputValue('');
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="What needs to be done?"
      />
    </form>
  );
};
