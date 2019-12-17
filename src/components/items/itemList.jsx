import React, { Component } from 'react'
import Grid from '../../common/layout/grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import Input from '../../common/form/input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ItemList extends Component {

    add(i, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('categoriesForm', 'subcategories', i, item);
        }
    }

    remove(i) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('categoriesForm', 'subcategories', i);
        }
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map((item, i) => (
            <tr key={i}>
                <td>
                    <Field 
                        name={`subcategories[${i}].name`} 
                        component={Input}
                        placeholder='Informe o nome'
                        readOnly={this.props.readOnly}/>
                </td>
                <td>
                    <button type='button'className='btn btn-success' onClick={() => this.add(i + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button'className='btn btn-warning' onClick={() => this.add(i + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button'className='btn btn-danger' onClick={() => this.remove(i)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Subcategorias</legend>
                    <table className='table'>
                        <tr>
                            <th>Nome</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </table>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(null, mapDispatchToProps)(ItemList);
