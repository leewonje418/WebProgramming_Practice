import React from 'react';
import './TodoTemplate.css';

const TodoTemplate = ({ children }) => {
    return (
        <div className='TodoTemplae'>
            <div className='app-title'>일정관리</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;