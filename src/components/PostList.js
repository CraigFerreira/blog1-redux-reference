import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostList extends Component{
    constructor(props){
        super(props)
        this.renderList= this.renderList.bind(this)
    }
    componentDidMount(){
        this.props.fetchPosts()
    }

    renderList(){
        return this.props.posts.map((post)=>{
            return (
                <div>
                    <h3>{post.title}</h3>
                    <br/>
                    <div>{post.body}</div>
                    <br/>
                    <br/>
                    <h3>-----------------------------------------------------------------------</h3>
                </div>
                
            )
        })
    }

    render(){
        console.log(this.props.posts)
        return(
            <div>{this.renderList()}</div>
        )
    }
}

const mapStateToProps= (state)=>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList)