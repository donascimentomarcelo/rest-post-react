import React, { Component } from 'react'
import { Link } from 'react-router';

export class PostsList extends Component {

    renderRow() {
        const list  = this.props.list || [];
        return list.map(post => (
            <tr key={post.id}>
                <td>{post.title}</td>
                <td className='align-actions'>
                    <Link className="btn btn-warning" to={`/posts/${post.id}/edit`}>
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger" onClick={this.props.delete.bind(this, post.id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <table className="table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th className='align-actions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRow()}
            </tbody>
        </table>
        )
    }
}

export default PostsList
