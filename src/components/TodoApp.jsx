import React, { useState, useReducer } from 'react';
import { v4 } from 'uuid';
import Footer from './Footer';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Task from './Task';
import TasksFilter from './TasksFilter';

const filterMap = {
  All: () => true,
  Active: (task) => !task.isCompleted,
  Completed: (task) => task.isCompleted,
};

const TodoApp = () => {
  const todosReducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.newTask];
      case 'delete':
        return [...state.filter((task) => task.id !== action.id)];
      case 'edit':
        return [
          ...state.map((item) => {
            return item.id === action.id
              ? {
                  ...item,
                  title: action.newTitle,
                }
              : item;
          }),
        ];
      case 'toggleComplete':
        return [
          ...state.map((item) => {
            return item.id === action.id
              ? {
                  ...item,
                  isCompleted: !item.isCompleted,
                }
              : item;
          }),
        ];
      case 'toggleEdit':
        return [
          ...state.map((item) => {
            return item.id === action.id
              ? {
                  ...item,
                  isEditing: !item.isEditing,
                }
              : item;
          }),
        ];
      case 'clearCompleted':
        return [...state.filter((task) => !task.isCompleted)];
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todosReducer, [
    { id: v4(), title: 'Completed task', date: 'created 17 seconds ago', isCompleted: true, isEditing: false },
    { id: v4(), title: 'Editing task', date: 'created 5 minutes ago', isCompleted: false, isEditing: true },
    { id: v4(), title: 'Active task', date: 'created 3 minutes ago', isCompleted: false, isEditing: false },
  ]);

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
    if (todos.filter((item) => item.id === id)[0].isCompleted) return;
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

  const activeCount = todos.length - todos.filter((task) => task.isCompleted).length;

  const [filter, setFilter] = useState('All');

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList>
          {todos.filter(filterMap[filter]).map((task, index) => {
            const className = '';
            return (
              <Task
                key={task.id}
                index={index}
                task={task}
                className={className}
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
