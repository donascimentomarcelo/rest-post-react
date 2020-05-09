import React, { Component } from 'react'
import './../../styles/comment.css'

export class Comments extends Component {

    renderComments = () => {
        return (
            <div className="list-group">
                {
                    this.props.comments.map(comment => 
   
                        <div key={comment.id} className="list-group-item list-group-item-action flex-column align-items-start background-color-comment">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{comment.userName}</h5>
                                <small>3 days ago</small>
                            </div>
                            <p className="mb-1">{comment.text}</p>
                            <small>{comment.text}</small>
                        </div>
                    )
                }
            </div>
        )
    }

    render() {
        return (
            <div className='align-comments'>
                {this.renderComments()}
            </div>
        )
    }
}

export default Comments;
