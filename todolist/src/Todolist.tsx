import React { useState } from 'react';
const TodoList: React.FC/*리액트에서 함수형 컴포넌트 정의*/ = () => {
    const title: string = "오늘 할일";
    const [todos, setTodos/*이 함수를 이용해서 데이터 변환*/] = useState<string[]>(['공부하기', '잠자기', '미팅하기']);
    return (
        <div>
            <h1>{title}</h1>
            <p></p>
            <div className='container'>
                <div className='board'>
                    <ul>
                        <li>{todos[0]}</li>
                        <li>{todos[1]}</li>
                        <li>{todos[2]}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default TodoList;