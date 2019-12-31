import React, { Component } from 'react';
import { paginate, showUpdate, showDelete, setPage } from './categoriesActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListPagination from '../../common/pagination/listPagination';
import ItemsPerPage from '../../common/pagination/itemsPerPage';

export class CategoriesList extends Component {

    componentWillMount() {
        const linesPerPage = 10 , page = 0;
        this.props.paginate(linesPerPage, page);
    }

    renderRows() {
        const list = this.props.content || [];
        return list.map(category => (
            <tr key={category.id}>
                <td>{category.name}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(category)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(category)}>
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
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>

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
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    content: state.categories.content,
    last: state.categories.last,
    totalPages: state.categories.totalPages,
    totalElements: state.categories.totalElements,
    size: state.categories.size,
    number: state.categories.number,
    first: state.categories.first,
    numberOfElements: state.categories.numberOfElements, 
    linesPerPage: state.categories.linesPerPage, 
    page: state.categories.page,
});
const mapDispatchToProps = dispatch => bindActionCreators({ paginate, showUpdate, showDelete, setPage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
