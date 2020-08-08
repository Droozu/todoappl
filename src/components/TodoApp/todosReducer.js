export default function todosReducer(state, action) {
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
}
