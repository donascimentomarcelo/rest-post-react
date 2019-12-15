import React, { Component } from 'react'
import Grid from '../common/layout/grid'
import { Field } from 'redux-form';
import Input from '../common/form/input';

export class SubcategoriesList extends Component {

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
                <td></td>
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
                            <th>Ações</th>
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

export default SubcategoriesList
