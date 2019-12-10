import React, { Component } from 'react';
import { getList, showUpdate, showDelete } from './categoriesActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class CategoriesList extends Component {

    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];

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

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.categories.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
