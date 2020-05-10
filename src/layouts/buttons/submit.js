import React from 'react'

const Submit = props => {
    return (
        <button type="submit" className="btn btn-outline-secondary" disabled={props.pristine || props.submitting}>
            {props.title}
        </button>
    )
}

export default Submit
