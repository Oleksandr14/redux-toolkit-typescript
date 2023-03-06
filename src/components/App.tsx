import {useState} from 'react';
import { useAppDispatch } from '../hooks/hook';

import { addTodo } from '../store/todoSlice';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

import '../components/App.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;