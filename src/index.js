import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import PostList from './components/PostList'
import thunk from 'redux-thunk'

class App extends Component{
    render(){
        return(
            <div>
                <PostList/>
            </div>
        )
    }
}

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'))