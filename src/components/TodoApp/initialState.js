import { v4 } from 'uuid';

const initialState = [
  {
    id: v4(),
    title: 'Completed task',
    date: new Date().setSeconds(new Date().getSeconds() - 17),
    isCompleted: true,
    isEditing: false,
  },
  {
    id: v4(),
    title: 'Editing task',
    date: new Date().setMinutes(new Date().getMinutes() - 5),
    isCompleted: false,
    isEditing: true,
  },
  {
    id: v4(),
    title: 'Active task',
    date: new Date().setMinutes(new Date().getMinutes() - 5),
    isCompleted: false,
    isEditing: false,
  },
];

export default function getInitialState() {
  return initialState;
}
