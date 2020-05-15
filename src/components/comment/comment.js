import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addComment } from '../../actions/commentAction'

import CommentList from './commentList/commentList'
import CommentForm from './commentForm/commentForm'

import './../../styles/comment.css'

import { getToday } from '../../services/utils'
import { getUserData } from '../../services/loginService'

export class Comment extends Component {
    sendComment = comment => {
        const obj =  { 
            id: getUserData().id,
            userName: getUserData().name,
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
