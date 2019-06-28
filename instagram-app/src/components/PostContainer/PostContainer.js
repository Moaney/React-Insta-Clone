import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.data.map(comment => (
                    <CommentSection key={comment.imageUrl} comment={comment} />
            ))}
           
        </div>
    )
}

PostContainer.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
