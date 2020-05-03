import React from 'react'
import PostOptions from './postOptions';
import PostOptionsView from './postOptionsView';

const PostOptionsBox = (props) => {
    return (
        <PostOptionsView views={props.views}>
            <PostOptions
                label={'Votos'}
                value={props.votes}/>
            <PostOptions
                label={'Comentarios'}
                value={props.comments}/>
        </PostOptionsView>
    )
}

export default PostOptionsBox;
