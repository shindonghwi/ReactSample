import { Button } from "bootstrap"
import React, { Component, Fragment } from "react"


export default class AppHeader extends Component {

    constructor(props) {
        super(props)
        this.handlePostChange = this.handlePostChange.bind(this)
    }

    handlePostChange(posts) {
        this.props.handlePostChange(posts)
    }

    render() {
        return (
            <Fragment>
                <h1> {this.props.title}</h1>
                <h1> {this.props.subject}</h1>
                <h1> {this.props.myColor}</h1>
            </Fragment>
        )
    }

}
