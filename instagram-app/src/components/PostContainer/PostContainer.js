import React from 'react';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
    console.log(props.data);
    return (
        <div className='post-container'>
            {props.data.map(d => (
                <CommentSection key={this.props.d}/>
            ))};
        </div>
    )
}

export default PostContainer;
