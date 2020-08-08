import React, { useState, useReducer } from 'react';
import { v4 } from 'uuid';
import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Task from '../Task/Task';
import TasksFilter from '../TasksFilter';
import todosReducer from "./todosReducer";

const TodoApp = () => {
  const [filter, setFilter] = useState('All');

  const [todos, dispatch] = useReducer(todosReducer, [
    { id: v4(), title: 'Completed task', date: new Date().setSeconds(new Date().getSeconds() - 17), isCompleted: true, isEditing: false },
    { id: v4(), title: 'Editing task', date: new Date().setMinutes(new Date().getMinutes() - 5), isCompleted: false, isEditing: true },
    { id: v4(), title: 'Active task', date: new Date().setMinutes(new Date().getMinutes() - 5), isCompleted: false, isEditing: false },
  ]);

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
