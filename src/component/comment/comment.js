import React, { Component } from 'react'
import './../../styles/comment.css'

import CommentList from './commentList/commentList';
import CommentForm from './commentForm/commentForm';

export class Comment extends Component {

    render() {
        return (
            <div className='align-comments'>
                <CommentList
                    comments={this.props.comments}/>
                    
                <CommentForm/>
            </div>
        )
    }
}

export default Comment;
