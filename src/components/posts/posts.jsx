import React, { Component } from 'react'
import PostsList from './list/postsList'
import ContentHeader from '../../common/template/contentHeader'
import { Link } from 'react-router'
import Content from '../../common/template/content'
import { bindActionCreators } from 'redux'
import { paginate, setPage, openModal, setSearchField, findByPostTitle, resetPostList } from './postsActions'
import { connect } from 'react-redux'
import ListPagination from '../../common/pagination/listPagination'
import ItemsPerPage from '../../common/pagination/itemsPerPage'
import SearchModal from '../../common/modal/search-modal'

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

    search(value) {
        this.props.resetPostList();
        this.props.setSearchField(null);
        this.props.openModal(value);
    }

    handleChange(ev) {
        this.props.setSearchField(ev.target.value);
    }

    handleSubmit() {
        this.props.findByPostTitle(this.props.search);
    }

    buildTable() {
        const list =  this.props.listFindedByTitle || [];
        if (list.length > 0) {
            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(post => (
                                <tr key={post.id}>
                                    <td>{post.title}</td>
                                    <td>
                                    <Link 
                                        onClick={this.search.bind(this, false)}
                                        className="btn btn-warning" 
                                        to={`/posts/${post.id}/edit`}>
                                        <i className="fa fa-pencil"></i>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => null}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )
        }

    }

    render() {
        return (
            <div>
                <ContentHeader title='Posts' small='listar posts'/>
                <div className="col-md-12 text-right">
                    <Link className="btn btn-secundary" onClick={this.search.bind(this, true)}>
                        <i className="fa fa-search"></i>
                    </Link>

                    <Link className="btn btn-primary" to='/posts/new'>
                        <i className="fa fa-plus"></i>
                    </Link>
                </div>

                <SearchModal
                    show={this.props.show}
                    onHide={this.search.bind(this, false)}
                    title={'Pesquisar Posts'}>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="pst">Post: </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="pst" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Entre com título."
                                    onChange={this.handleChange.bind(this)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Pesquisar</button>
                        </form>

                        {this.buildTable()}

                </SearchModal>

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
        show: state.posts.show,
        search: state.posts.search,
        listFindedByTitle: state.posts.listFindedByTitle,
    }
)

const mapDispactchToProps = dispatch => bindActionCreators(
    {paginate, setPage, openModal, setSearchField, findByPostTitle, resetPostList},
    dispatch
)
export default connect(mapStateToProps, mapDispactchToProps)(Posts);
