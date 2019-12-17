import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form';
import labelAndinput from '../../common/form/labelAndinput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './categoriesActions';
import SubcategoriesList from './itemList';

export class CategoriesForm extends Component {
    render() {
        const { handleSubmit, readOnly, subcategories } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name='name' 
                        component={labelAndinput}
                        label="Nome"
                        cols="12 6"
                        placeholder="Informe o nome"
                        readOnly={readOnly}/>
                    <Field 
                        name='description' 
                        component={labelAndinput}
                        label="Descrição"
                        cols="12 6"
                        placeholder="Informe a descrição"
                        readOnly={readOnly}/>

                    <SubcategoriesList 
                        cols='12 6' 
                        readOnly={readOnly}
                        list={subcategories}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

CategoriesForm = reduxForm({form: 'categoriesForm', destroyOnUnmount: false})(CategoriesForm);
const selector = formValueSelector('categoriesForm')
const mapStateToProps = state => ({ subcategories: selector(state, 'subcategories')});
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesForm);
