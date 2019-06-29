import React from 'react';
import Comment from '../Comment/Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = { comments: comments };
    }

    render() {
        return (
            <div className='comment'>
                {this.state.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        )
    }
}

export default CommentSection;