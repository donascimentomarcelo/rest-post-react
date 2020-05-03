import React from 'react'

const PostOptions = (props) => {
    return (
        <div>
            <small>{props.label}</small>
            <h4>{props.value}</h4>
            <hr/>
        </div>
    )
}

export default PostOptions
