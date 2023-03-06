import { useAppDispatch } from '../hooks/hook';
import {toggleComplete, removeTodo} from '../store/todoSlice';

interface ITodoItemsProps {
    id: string, 
    title: string, 
    completed: boolean
}

const TodoItem: React.FC<ITodoItemsProps > = ({ id, title, completed }) => {
  const dispatch =useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;