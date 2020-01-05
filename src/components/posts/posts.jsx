import React, { Component } from 'react'
import PostsList from './list/postsList'
import ContentHeader from '../../common/template/contentHeader'
import { Link } from 'react-router'
import Content from '../../common/template/content'
import { bindActionCreators } from 'redux'
import { paginate } from './postsActions'
import { connect } from 'react-redux'

export class Posts extends Component {

    componentWillMount () {
        const linesPerPage = 10, page = 0;
        this.props.paginate(linesPerPage, page);
    }

    render() {
        return (
            <div>
                <ContentHeader title='Posts' small='listar posts'/>
                <div className="col-md-12 text-right">
                    <Link className="btn btn-primary" to='/posts/new'>
                        <i className="fa fa-plus"></i>
                    </Link>
                </div>
                <Content>
                    <PostsList
                        list={this.props.content}/>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        content: state.posts.content,
        last: state.posts.last,
        totalPages: state.posts.totalPages,
        totalElements: state.posts.totalElements,
        size: state.posts.size,
        number: state.posts.number,
        first: state.posts.first,
        numberOfElements: state.posts.numberOfElements,
    }
)

const mapDispactchToProps = dispatch => bindActionCreators(
    {paginate},
    dispatch
)
export default connect(mapStateToProps, mapDispactchToProps)(Posts);
