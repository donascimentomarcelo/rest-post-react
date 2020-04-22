import React from 'react';
import './../../styles/modal.css';

const SearchModal = props => {
    return (
        <div className={`my-modal-background ${props.show ? 'active' : 'hide'} scrollbar`} id='style-scroll'>
            <div className={`modal-dialog ${props.show ? 'active' : 'hide'}`} role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar" onClick={props.onHide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <form onSubmit={props.handleSubmit}>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        {props.data}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" data-dismiss="modal" onClick={props.onHide}>Fechar</button>
                            <button type="submit" className="btn btn-outline-secondary">Pesquisar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchModal;
