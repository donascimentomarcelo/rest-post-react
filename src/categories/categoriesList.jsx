import React, { Component } from 'react';
import { getList } from './categoriesActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class CategoriesList extends Component {

    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];

        return list.map(category => (
            <tr key={category.id}>
                <td>{category.name}</td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.categories.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
