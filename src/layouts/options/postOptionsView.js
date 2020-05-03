import React from 'react'

const PostOptionsView = (props) => {
    return (
        <div>
            {props.children}
            <div>
                <small>{props.views} Views</small>
            </div>
        </div>
    )
}

export default PostOptionsView
