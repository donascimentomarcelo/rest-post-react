import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { create, findOne, update, init } from './subcategoriesActions';
import { getList as getCategoties } from "../categories/categoriesActions";
import './subcategories.css';

export class SubcategoriesForm extends Component {

    componentWillMount() {
        this.props.getCategoties();
        const id = this.props.params.id || null;
        if (id) {
            this.props.findOne(id)
        }
    }
    
    submit(values) {
        const route = this.takeLastWorldOfRoute();
        if (route === 'new') {
            this.props.create(values);
        }

        if (route !== 'new') {
            const id = this.props.params.id
            this.props.update(values, id);
        }

        this.props.router.goBack();
    }
    
    takeLastWorldOfRoute() {
        const route = this.props.route.path.split("/");
        return route[route.length - 1];
    }

    back() {
        this.props.init();
        this.props.router.goBack();
    }

    renderOptions() {
        const list = this.props.list || [];
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
        initialValues: state.subcategories.subcategory,
        enableReinitialize: true
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    { create, findOne, getCategoties, update, init },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoriesForm);
