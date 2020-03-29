import React, { Component } from 'react'
import FormGroupLabel from '../../../layouts/form/formGroupLabel'
import { Field, reduxForm } from 'redux-form'
import { ButtonGroup } from 'react-bootstrap'
import Container from '../../../layouts/form/container';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { login } from '../../../actions/loginAction'
import { withRouter } from "react-router";
import { setToken } from '../../../services/loginService';


export class LoginForm extends Component {

    submit(login) {
        this.props.login(login)
            .then(resp => {
                setToken(resp.payload.headers.authorization);
                const { history } = this.props;
                history.push('/dashboard');
            })
            .catch(error => console.log(error));
    }

    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                <Container>
                    <FormGroupLabel label='Usuário'>
                        <Field 
                            component='input' 
                            name='username' 
                            className="form-control" 
                            placeholder='Insira o usuário'/>
                    </FormGroupLabel>
                    <FormGroupLabel label='Senha'>
                        <Field
                            type='password'
                            component='input' 
                            name='password' 
                            className="form-control" 
                            placeholder='Insira a senha'/>
                    </FormGroupLabel>

                    <ButtonGroup>
                        <button type="submit" className='btn btn-primary' disabled={submitting}>
                            Enviar
                        </button>
                    </ButtonGroup>
                </Container>
            </form>
        )
    }
}

LoginForm = reduxForm({
    form: 'loginForm',
    destroyOnUnmount: false
})(LoginForm);

const mapStateToProps = state => (
    {
        enableReinitialize: true
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    { 
        login,
    },
    dispatch
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
