import React, {Component} from 'react'
import axios from 'axios'

export default class BackendBtn extends Component {
    msg = '';
    constructor(props) {
        super(props);

        this.state = {
            backend_response: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then(res => {
                console.log(res.data)
                this.setState({ backend_response: res.data });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    serverMsg() {
        return (
            <p>
                Response From Server --> {this.state.backend_response}
            </p>
        )
    }

    render() {
        return (
            <div>
                {this.serverMsg()}
            </div>
        )
    }
}