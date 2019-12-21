import React, { Component } from 'react'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import { getAll, update, remove } from './subcategoriesActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Subcategories extends Component {

    componentWillMount() {
        this.props.getAll();
    }

    renderRow() {
        const list = this.props.list || [];
        return list.map(subcategory => (
            <tr key={subcategory.id}>
                <td>{subcategory.name}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.update(subcategory)}>
                        <i className="fa fa-pencil"></i>
                    </button>
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
