import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            <Link to='/articles/1'>게시글1</Link>
            <Link to='/articles/2'>게시글2</Link>
            <Link to='/articles/3'>게시글3</Link>
        </div>
    );
};

export default Articles;