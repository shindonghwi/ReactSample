import { Button } from "bootstrap"
import React, { Component, Fragment } from "react"


export default class AppHeader extends Component {

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
