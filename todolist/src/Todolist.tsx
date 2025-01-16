import React,{useState} from 'react';
import TodoModal from './TodoModal';


type Todo = { //타입 사용이유 : 기존타입을 기반으로 새로운 타입을 만들때 사용
              // 인터페이스 : 객체의 구조를를 정의할때 사용
    id: number;
    text: string;
    isChecked: boolean;
}

const TodoList: React.FC/*리액트에서 함수형 컴포넌트 정의*/ = () => {
    const title: string = "오늘 할일";
    //구조체분해할당
    const [todos, setTodos/*이 함수를 이용해서 데이터 변환*/] = useState<Todo[]>([
         {id: 1, text: '공부하기', isChecked: false},
         {id: 2, text: '잠자기', isChecked: false},
         {id: 3, text: '미팅하기', isChecked: false}]);
    const [newTodo, setNewTodo] = useState<string>('');
    const handleCheckedChange = (itemId: number) => {
            setTodos((prevItem) => 
                prevItem.map((item) => (
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            ))
        );
    }

    const addTodo = () => {
        if(newTodo.trim() !== '') {
            setTodos([...todos, {id: Date.now(), text: newTodo, isChecked: false}]);
            setNewTodo('');
        }
    }
    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const handleTodoClick = (todo: Todo) => {
        setShowDetail(true);
        setSelectedTodo(todo);
    }
    const handleCloseDetail = () => {
        setShowDetail(false);
    }
    return (
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className='container'>
                <div>
                    <input type='text'
                    placeholder='할일 입력'
                    style={{marginRight : '10px', writingMode: 'horizontal-tb'}}
                    onChange={(e) => setNewTodo(e.target.value)}
                    />
                <button 
                onClick={() => {
                    addTodo()}}
                    >추가</button>
                </div>
                <p></p>
                <div className='board'>
                    <ul>
                        {
                            todos.map((todo, index) => (
                                <li key={todo.id}>
                                    <input type= "checkbox"
                                    onChange={()=>{
                                        handleCheckedChange(todo.id);
                                    }}></input>
                                    <span onClick={() => handleTodoClick(todo)}>
                                        {
                                            todo.isChecked ? 
                                            <del>{todo.text}</del>
                                             : <span>{todo.text}</span>
                                        }
                                    </span>
                                    <button
                                        onClick={() => {
                                            removeTodo(todo.id);
                                        }}
                                        className='delete'
                                    >삭제</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <TodoModal show = {showDetail} todo={selectedTodo} handleClose={handleCloseDetail} ></TodoModal>
        </div>
    );
}
export default TodoList;