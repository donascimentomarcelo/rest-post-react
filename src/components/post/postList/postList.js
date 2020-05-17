import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentHeader from '../../../layouts/header/contentHeader'
import ContentOptions from '../../../layouts/body/contentOptions'
import Content from '../../../layouts/body/content'
import Row from '../../../layouts/body/row'
import PostBox from '../../../layouts/box/postBox'

export class PostList extends Component {

    showPostsCards = () => {
        const posts = this.props.posts || [];
        return posts.map(post => (
                <PostBox
                    key={post.id}
                    cols='12 12'
                    icon={post.subcategory.icon}
                    value={post.title}
                    id={post.id}
                    text={post.description}
                    comments={post.comments}
                    view={post.view}
                    vote={post.vote}
                    addView={this.props.addView.bind(this, post.id)}/>
            )
        )
    }

    create = () => this.props.create();

    render() {
        return (
            <>
                <ContentHeader title='Posts'/>
                <ContentOptions
                    buttonNew={this.props.buttonNew}
                    create={this.create}/>
                <Content>
                    <Row>
                        {this.showPostsCards()}
                    </Row>
                </Content>
            </>
        )
    }
}

const mapStateToProps = (state) => (
    {
        buttonNew: state.postReducer.buttonNew,
    }
)

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
