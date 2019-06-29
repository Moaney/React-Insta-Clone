import React from 'react';

const Comment = props => { 
    return (
        <div className='comment-container'>
                <div classname='user-comment'>{props.c.username}</div>
                <div className='user-text'>{props.c.text}</div>
            <form>
                <input placeholder='Comment Here'
                type='text'
                />
                <button></button>
            </form>
        </div>
    );
}

export default Comment;