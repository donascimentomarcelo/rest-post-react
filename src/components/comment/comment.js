import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
    addComment, 
    createComment, 
    resetCommentForm 
} from '../../actions/commentAction'

import CommentList from './commentList/commentList'
import CommentForm from './commentForm/commentForm'

import { getToday } from '../../services/utils'
import { getUserData } from '../../services/loginService'

import './../../styles/comment.css'

export class Comment extends Component {
    sendComment = comment => {
        const dto = { 
            userId: getUserData().id,
            userName: getUserData().name,
            text: comment.text,
            postId: this.props.postId
        }
        this.props.createComment(dto)
            .then(() => this.actionAfterCreateComment(dto));        
    }

    actionAfterCreateComment = comment => {
        comment.createdAt = getToday();
        this.props.addComment(comment);
        this.props.resetCommentForm();
    }

    render() {
        return (
            <div className='align-comments'>
                <CommentList
                    comments={this.props.comments}/>
                <CommentForm
                    sendComment={this.sendComment}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        addComment,
        createComment,
        resetCommentForm,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
