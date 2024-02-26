import React, { useCallback } from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';
import {List} from 'react-virtualized';

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRender = useCallback(
        ({index,key,style}) => {
        const todo = todos[index];
        return (
            <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
        );
    },[todos,onRemove,onToggle]);
    return (
        <List
        className='TodoList' width={512} height={513} rowCount={todos.length}
        rowHeight={57} rowRenderer={rowRender} list={todos} style={{outline:'none'}}
        />
    );
};

export default React.memo(TodoList);



/*
const TodoList = ({todos, onRemove, onToggle}) => {
    const todo = todos[index];
    return (
        <div className='TodoList'>
            {
                todos.map(todo => <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>)
            }
        </div>
    );
};

export default React.memo(TodoList);
*/