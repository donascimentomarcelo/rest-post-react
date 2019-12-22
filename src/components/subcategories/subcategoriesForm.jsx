import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './subcategories.css';
import { create } from './subcategoriesActions';
import { getList as getCategoties } from "../categories/categoriesActions";

export class SubcategoriesForm extends Component {

    componentWillMount() {
        this.props.getCategoties();
    }
    
    submit(values) {
        this.props.create(values);
    }

    renderOptions() {
        const list = this.props.list;
        return list.map(category => (
            <option 
                key={category.id} 
                value={category.id}>{category.name}</option>
        ));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))} className='align-form'>

                <div className="form-group col-md-12">
                    <label>Categorias</label>
                    <Field name='categoryId' component='select' className="form-control">
                        {this.renderOptions()}
                    </Field>
                </div>

                <div className="form-group col-md-12">
                    <label>Nome</label>
                    <Field component='input' name='name' className="form-control" placeholder='Insira o nome'/>
                </div>

                <div className="btn-group col-md-12">
                    <button type="submit" className='btn btn-primary'>
                        Salvar
                    </button>
                    <button type="button" className="btn btn-default" >Cancelar</button>
                </div>
            </form>
        )
    }
}

SubcategoriesForm = reduxForm(
    { 
        form: 'subcategoriesForm',
        destroyOnUnmount: false
    }
)(SubcategoriesForm);

const mapStateToProps = state => (
    { 
        list: state.categories.list 
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    { create, getCategoties },
    dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(SubcategoriesForm);
