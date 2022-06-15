import { Button } from "bootstrap"
import React, { Component } from "react"


export default class AppContent extends Component {

    state = { posts: [] }

    mouseFunction = () => {
        console.log("mouse funtion")
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({ posts: json })
            })
    }

    clickedItem = (x) => {
        console.log("clicked", x)
    }

    render() {
        return (
            <p>
                This is the content.

                <br />
                <hr />
                <p onMouseEnter={this.mouseFunction}>This is some Text</p>
                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>

                <h3>item size: {this.state.posts.length}</h3>

                <ul>
                    {this.state.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItem(c.id)}>{c.title}</a>
                        </li>
                    ))}
                </ul>
            </p>
        )
    }

}
