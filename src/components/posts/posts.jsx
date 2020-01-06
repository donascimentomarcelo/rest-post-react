import React, { Component } from 'react'
import PostsList from './list/postsList'
import ContentHeader from '../../common/template/contentHeader'
import { Link } from 'react-router'
import Content from '../../common/template/content'
import { bindActionCreators } from 'redux'
import { paginate, setPage } from './postsActions'
import { connect } from 'react-redux'
import ListPagination from '../../common/pagination/listPagination'
import ItemsPerPage from '../../common/pagination/itemsPerPage'

export class Posts extends Component {

    componentWillMount () {
        const linesPerPage = 10, page = 0;
        this.props.paginate(linesPerPage, page);
    }

    onSetPage(page) {
        this.props.paginate(this.props.linesPerPage, page);
        this.props.setPage(this.props.linesPerPage, page);
    }

    onSetItemPerPage(ev) {
        const linesPerPage = ev.target.value;
        this.props.paginate(linesPerPage, this.props.page);
        this.props.setPage(linesPerPage, this.props.page);
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
                    
                    <ListPagination
                        totalElements={this.props.totalElements}
                        numberOfElements={this.props.numberOfElements}
                        currentPage={this.props.number}
                        linesPerPage={this.props.linesPerPage}
                        onSetPage={this.onSetPage.bind(this)}/>
                    
                    <ItemsPerPage
                        linesPerPage={this.props.linesPerPage}
                        totalElements={this.props.totalElements}
                        onSetItemPerPage={this.onSetItemPerPage.bind(this)}/>

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
        linesPerPage: state.posts.linesPerPage,
        page: state.posts.page,
    }
)

const mapDispactchToProps = dispatch => bindActionCreators(
    {paginate, setPage},
    dispatch
)
export default connect(mapStateToProps, mapDispactchToProps)(Posts);
