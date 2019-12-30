import React, { Component } from 'react'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import { getAll, update, remove, paginate, setPage } from './subcategoriesActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import ListPagination from '../../common/pagination/listPagination';
import ItemsPerPage  from '../../common/pagination/itemsPerPage';

export class Subcategories extends Component {

    componentWillMount() {
        const linesPerPage = 10 , page = 0;
        this.props.paginate(linesPerPage, page);
    }

    renderRow() {
        const list = this.props.content || [];
        return list.map(subcategory => (
            <tr key={subcategory.id}>
                <td>{subcategory.name}</td>
                <td className='align-actions'>
                    <Link className="btn btn-warning" to={`/subcategories/${subcategory.id}/edit`}>
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger" onClick={() => this.props.remove(subcategory)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    onSetPage(page){
        const { linesPerPage } = this.props;
        this.props.paginate(linesPerPage, page);
        this.props.setPage(this.props.linesPerPage, page)
    }

    onSetItemPerPage(ev) {
        const linesPerPage = ev.target.value;
        this.props.paginate(linesPerPage, this.props.page);
        this.props.setPage(linesPerPage, this.props.page)
    }

    render() {
        return (
            <div>
                <ContentHeader title='Subcategorias' small='listar subcategorias'/>
                <div className="col-md-12 text-right">
                    <Link className="btn btn-primary" to='/subcategories/new'>
                        <i className="fa fa-plus"></i>
                    </Link>
                </div>
                <Content>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th className='align-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRow()}
                        </tbody>
                    </table>

                    <ListPagination
                        totalElements={this.props.totalElements}
                        currentPage={this.props.number}
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
        list: state.subcategories.list,
        content: state.subcategories.content,
        last: state.subcategories.last,
        totalPages: state.subcategories.totalPages,
        totalElements: state.subcategories.totalElements,
        size: state.subcategories.size,
        number: state.subcategories.number,
        first: state.subcategories.first,
        numberOfElements: state.subcategories.numberOfElements, 
        linesPerPage: state.subcategories.linesPerPage, 
        page: state.subcategories.page, 
    });

const mapDispatchToProps = dispatch => bindActionCreators(
    { getAll, update, remove, paginate, setPage }, 
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Subcategories);
