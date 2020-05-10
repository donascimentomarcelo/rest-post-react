import React, { Component } from 'react'

export class CommentList extends Component {
    render() {
        return (
            <div className="list-group">
                {
                    this.props.comments.map(comment => 
                        <div key={comment.id} className="list-group-item list-group-item-action flex-column align-items-start background-color-comment">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{comment.userName}</h5>
                                <small>{comment.createdAt}</small>
                            </div>
                            <small>{comment.text}</small>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default CommentList
