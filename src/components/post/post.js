import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'

import PostList from './postList/postList'

import * as CONST from './../../helpers/constants'

import { 
    getAllPosts, 
} from '../../actions/postAction'


export class Post extends Component {

    componentWillMount = () => this.props.getAllPosts();

    render() {
        return (
            <>
                <PostList
                    posts={this.props.posts}/>
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
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Post)
