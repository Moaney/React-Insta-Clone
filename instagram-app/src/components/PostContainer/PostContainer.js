import React from 'react';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.data.map(post => (
                    <Post key={post.imageUrl} post={post} />
            ))}
        </div>
    )
}

PostContainer.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
