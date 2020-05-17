import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'

import PostList from './postList/postList'

import * as CONST from './../../helpers/constants'

import { 
    getAllPosts,
    addView,
} from '../../actions/postAction'


export class Post extends Component {

    componentWillMount = () => this.props.getAllPosts();

    create = () => this.props.history.push(CONST.POST_NEW);

    addView = postId => {
        this.props.addView(postId);
    }

    render() {
        return (
            <>
                <PostList
                    create={this.create}
                    posts={this.props.posts}
                    addView={this.addView}/>
            </>
        )
    }
}

Post = reduxForm(
    {
        form: CONST.POST_SEARCH_FORM,
        destroyOnUnmount: false,
    }
)(Post);

const mapStateToProps = (state) => (
    {
        posts: state.postReducer.posts
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllPosts,
        addView,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Post)
