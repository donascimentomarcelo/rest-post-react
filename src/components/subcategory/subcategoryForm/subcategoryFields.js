import React from 'react'
import { Field } from 'redux-form'
import FormGroupLabel from '../../../layouts/form/formGroupLabel'

const SubcategoryFields = props => {

    const onChange = event => console.log(event.target.value);

    const renderOpitions = () => {
        return props.categories.map(category => {
            return <option value={category.id} key={category.id} >{category.name}</option>
        });
    }
    
    return (
        <>
            <FormGroupLabel label='Categoria'>
                <Field 
                    component="select" 
                    className="form-control"
                    name='categoryId' 
                    onChange={onChange.bind(this)}>
                        <option value="">Selecione a categoria</option>
                        {renderOpitions()}
                </Field>
            </FormGroupLabel>
            <FormGroupLabel label='Nome'>
                <Field 
                        component='input' 
                        name='name' 
                        className="form-control" 
                        placeholder='Insira o nome'/>
            </FormGroupLabel>
            <FormGroupLabel label='Ícone'>
                <Field 
                        component='input' 
                        name='icon' 
                        className="form-control" 
                        placeholder='Insira o ícone'/>
            </FormGroupLabel>
        </>
    )
}

export default SubcategoryFields
