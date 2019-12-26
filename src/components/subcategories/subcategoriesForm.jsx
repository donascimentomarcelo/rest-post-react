import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './subcategories.css';
import { create, findOne, init } from './subcategoriesActions';
import { getList as getCategoties } from "../categories/categoriesActions";

export class SubcategoriesForm extends Component {

    componentWillMount() {
        this.props.init();
        this.props.getCategoties();
        const id = this.props.params.id || null;
        if (id) {
            this.props.findOne(id)
        }
    }
    
    submit(values) {
        this.props.create(values);
        this.props.router.goBack();
    }
    
    back() {
        this.props.init();
        this.props.router.goBack();
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
        const { handleSubmit, pristine, reset, submitting } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))} className='align-form'>

                <div className="form-group col-md-12">
                    <label>Categorias</label>
                    <Field name='categoryId' component='select' className="form-control">
                        <option value=''>---</option> 
                        {this.renderOptions()}
                    </Field>
                </div>

                <div className="form-group col-md-12">
                    <label>Nome</label>
                    <Field 
                        value={this.props.subcategory || null}
                        component='input' 
                        name='name' 
                        className="form-control" 
                        placeholder='Insira o nome'/>
                </div>

                <div className="btn-group col-md-12">
                    <button type="submit" className='btn btn-primary' disabled={pristine || submitting}>
                        Salvar
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.back.bind(this)}>Voltar</button>
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
        list: state.categories.list,
        initialValues: state.subcategories.subcategory 
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    { create, findOne, getCategoties, init },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoriesForm);
