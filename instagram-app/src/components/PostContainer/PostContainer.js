import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
    console.log(props.data);
    return (
        <div className='post-container'>
            {props.data.map(c => (
                <CommentSection key={props.data.c}/>
            ))};
        </div>
    )
}

export default PostContainer;
