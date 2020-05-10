import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addComment } from '../../actions/commentAction'

import CommentList from './commentList/commentList'
import CommentForm from './commentForm/commentForm'

import './../../styles/comment.css'

import { randId, getToday } from '../../services/utils'

export class Comment extends Component {
    sendComment = comment => {
        const obj =  { 
            id: randId(),
            userName: 'Crane',
            text: comment.text,
            createdAt: getToday(),
        }
        this.props.addComment(obj)
        
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
        addComment
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
