import React, { Component } from 'react'
import PostsList from './list/postsList'
import ContentHeader from '../../common/template/contentHeader'
import { Link } from 'react-router'
import Content from '../../common/template/content'
import { bindActionCreators } from 'redux'
import { paginate, setPage, openModal } from './postsActions'
import { connect } from 'react-redux'
import ListPagination from '../../common/pagination/listPagination'
import ItemsPerPage from '../../common/pagination/itemsPerPage'
import Modal from 'react-bootstrap-modal';
import './post.css';

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
        this.props.openModal(value);
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

                <Modal 
                    show={this.props.show}
                    onHide={this.search.bind(this, false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi?
                        </p>
                    </Modal.Body>
                </Modal>

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
    }
)

const mapDispactchToProps = dispatch => bindActionCreators(
    {paginate, setPage, openModal},
    dispatch
)
export default connect(mapStateToProps, mapDispactchToProps)(Posts);
