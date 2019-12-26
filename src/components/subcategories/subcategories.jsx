import React, { Component } from 'react'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import { getAll, update, remove } from './subcategoriesActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

export class Subcategories extends Component {

    componentWillMount() {
        console.log('inicia')
        this.props.getAll();
    }

    renderRow() {
        const list = this.props.list || [];
        return list.map(subcategory => (
            <tr key={subcategory.id}>
                <td>{subcategory.name}</td>
                <td>
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
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRow()}
                        </tbody>
                    </table>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.subcategories.list });
const mapDispatchToProps = dispatch => bindActionCreators(
    { getAll, update, remove }, 
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Subcategories);
