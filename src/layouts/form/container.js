import React from 'react'
import '../../styles/form.css';

const Container = (props) => {
    return (
        <div className="form-topcontainer">
            <div className="form-container">
                <div className="form-subcontainer">
                    <div className="container">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
