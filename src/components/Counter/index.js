import React, { Component } from 'react'

export default class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }

    }

    handleInc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <React.Fragment>
                <p>{count}</p>
                <button onClick={this.handleInc}>Inc</button>
                <button onClick={this.handleDec}>Dec</button>
            </React.Fragment>
        )
    }
}
