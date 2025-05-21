import { Button } from 'antd';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { Controls } from './components/Controls';
import { Filters } from './components/Filters';
import { useTodos } from './hooks/useTodos';
import './App.css';

function App() {
  const { todos, addTodo, toggleTodo, applyFilter, clearCompleted } =
    useTodos();

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <h1>todos</h1>

      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />

      <Controls>
        <span className="todo-count">Items left: {activeTodosCount}</span>
        <Filters onFilterChange={applyFilter} />
        <Button onClick={clearCompleted} color="default" variant="text">
          Clear completed
        </Button>
      </Controls>
    </div>
  );
}

export default App;
