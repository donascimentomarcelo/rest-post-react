import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';
import FormGroupLabel from '../../../layouts/form/formGroupLabel';
import ButtonGroup from '../../../layouts/form/buttonGroup';
import Comments from '../../comments/comments';

import * as CONST from './../../../helpers/constants';

import { getAllCategories } from './../../../actions/categoryAction'
import { findByCategory } from '../../../actions/subcategoryAction';
import { 
    createPost, 
    findPostById,
    setPostForm
} from '../../../actions/postAction';

export class PostForm extends Component {

    componentWillMount = () => {
        this.props.getAllCategories();
        this.findPostById();
    }

    actionBack = () => {
        this.props.history.goBack();
    };

    submit = post => {
        this.props.createPost(post)
            .then(() => this.actionsAfterSuccess(CONST.POST_CREATED));
    };

    actionsAfterSuccess = msg => {
        this.actionBack();
        toastr.success(CONST.SUCCESS, msg);
    } 

    findByCategory = event => {
        this.props.findByCategory(event.target.value)
    };

    renderCategories = () => {
        return this.props.categories.map(category => {
            return <option value={category.id} key={category.id} >{category.name}</option>
        });
    }

    renderSubcategories = () => {
        return this.props.subcategories.map(subcategory => {
            return <option value={subcategory.id} key={subcategory.id} >{subcategory.name}</option>
        });
    }

    findPostById = () => {
        if (this.readOnly()) {
            this.props.findPostById(this.props.match.params.id)
                .then(() => this.props.setPostForm(this.props.post))
                .catch(error => console.log(error));
        }
    }

    readOnly = () => this.props.location.pathname !== CONST.POST_NEW;

    showButtonSubmit = (pristine, submitting) => {
        if (!this.readOnly()) {
            return (
                <ButtonGroup>
                    <button type="submit" className="btn btn-outline-secondary" disabled={pristine || submitting}>
                        Salvar
                    </button>
                </ButtonGroup>
            )
        }
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <>
                <ContentHeader title={CONST.POST_CONTENT_HEADER} />
                <ContentOptions
                    buttonBack={true}
                    actionBack={this.actionBack}/>
                
                <form onSubmit={handleSubmit(this.submit.bind(this))}>
                    <FormGroupLabel label='Categoria'>
                        <Field 
                            component="select" 
                            className="form-control"
                            name='categoryId' 
                            onChange={this.findByCategory.bind(this)}
                            disabled={this.readOnly()}>
                                <option value="">Selecione a categoria</option>
                                {this.renderCategories()}
                        </Field>
                    </FormGroupLabel>
                    <FormGroupLabel label='Subcategoria'>
                        <Field 
                            component="select" 
                            className="form-control"
                            name='subcategoryId'
                            disabled={this.readOnly()}>
                                <option value="">Selecione a subcategoria</option>
                                {this.renderSubcategories()}
                        </Field>
                    </FormGroupLabel>
                    <FormGroupLabel label='Título'>
                        <Field 
                                component="input" 
                                className="form-control"
                                name='title'
                                disabled={this.readOnly()}/>
                    </FormGroupLabel>
                    <FormGroupLabel label='Descrição'>
                        <Field 
                                component="textarea" 
                                className="form-control"
                                name='description'
                                disabled={this.readOnly()}/>
                    </FormGroupLabel>
                    {this.showButtonSubmit(pristine, submitting)}
                </form>
                <Comments
                    comments={this.props.comments}/>
            </>
        )
    }
}

PostForm = reduxForm(
    {
        form: CONST.POST_FORM,
        destroyOnUnmount: false
    }
)(PostForm);

const mapStateToProps = (state) => (
    {
        categories: state.categoryReducer.categories,
        subcategories: state.subcategoryReducer.subcategories,
        post: state.postReducer.post,
        comments: state.postReducer.comments,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllCategories,
        findByCategory,
        createPost,
        findPostById,
        setPostForm,
    }, 
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
