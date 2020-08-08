import React, { useState, useReducer } from 'react';
import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Task from '../Task/Task';
import TasksFilter from '../TasksFilter/TasksFilter';
import todosReducer from './todosReducer';
import getInitialState from './initialState';

const TodoApp = () => {
  const [filter, setFilter] = useState('All');

  const [todos, dispatch] = useReducer(todosReducer, null, getInitialState);

  const filterMap = {
    All: () => true,
    Active: (task) => !task.isCompleted,
    Completed: (task) => task.isCompleted,
  };

  const activeCount = todos.length - todos.filter((task) => task.isCompleted).length;

  function addTask(newTask) {
    dispatch({ type: 'add', newTask });
  }

  function deleteTask(event) {
    const { id } = event.target;
    dispatch({ type: 'delete', id });
  }

  function editTaskTitle(event, newTitle) {
    const { id } = event.target;
    dispatch({ type: 'edit', id, newTitle });
  }

  function toggleEdit(event) {
    const { id } = event.target;
    dispatch({ type: 'toggleEdit', id });
  }

  function toggleComplete(event) {
    const { id } = event.target;
    dispatch({ type: 'toggleComplete', id });
  }

  function clearAllCompleted(event) {
    event.preventDefault();
    dispatch({ type: 'clearCompleted' });
  }

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList>
          {todos.filter(filterMap[filter]).map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleEdit={toggleEdit}
                toggleComplete={toggleComplete}
                editTaskTitle={editTaskTitle}
              />
            );
          })}
        </TaskList>
        <Footer activeCount={activeCount} clearAllCompleted={clearAllCompleted}>
          <TasksFilter filter={filter} setFilter={setFilter} />
        </Footer>
      </section>
    </div>
  );
};

export default TodoApp;
