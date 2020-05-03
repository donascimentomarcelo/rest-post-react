import React from 'react'
import Grid from '../grid/grid';
import PostOptionsBox from '../options/postOptionsBox';

import './../../styles/box.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const PostBox = (props) => {

    const {
        id,
        cols,
        value,
        text,
        icon,
    } = props;

    const delimiter = () => {
        if (text.length > 200) {
            return text.substring(0, 200) + "...";
        }
    }

    return (
        <Grid cols={cols}>
            <div className='small-box bg-gray'>
                <div className="left">
                    <PostOptionsBox
                        views={54}
                        comments={12}
                        votes={3}/>
                </div>
                <div className="inner inner-align">
                    <a href={`/${id}/view`} className={value}>
                        <h3>{value}</h3>
                    </a>
                    <p className="text">{delimiter()}</p>
                </div>
                <div className="icon">
                    <i className={icon}></i>
                </div>
            </div>
        </Grid>
    )
}

export default PostBox
