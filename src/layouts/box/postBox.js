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
        comments,
        view,
        vote,
    } = props;

    const delimiter = () => text.length > 200 ? `${text.substring(0, 200)} ...` : text;
    
    const replaceUrl = value => value.replace(' ', '-').toLowerCase();

    const addView = () => props.addView();

    return (
        <Grid cols={cols}>
            <div className='small-box bg-gray'>
                <div className="left">
                    <PostOptionsBox
                        views={view}
                        comments={comments.length}
                        votes={vote}/>
                </div>
                <div className="inner inner-align">
                    <a href={`/posts/${id}/app-route/${replaceUrl(value)}`} className={value} onClick={addView}>
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
