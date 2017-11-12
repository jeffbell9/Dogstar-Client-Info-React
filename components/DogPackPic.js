import React from 'react';
import { Component } from 'react';

export default class DogPackPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: false
        }
    }

    componentDidMount() {
        const img = new Image();

        img.onload = () => {
            this.setState({
                loaded: true
            })
        }

        img.onerror = () => {
            this.setState({
                error: true
            })
        }

        img.src = this.props.pic;
    }
    render() {
        if(this.state.error) {
            return <p>Sorry!</p>
        } else if(!this.state.loaded) {
            return <div id="loading"><p></p></div>
        }
        return (
            <div>
                <img src={this.props.pic} className="img-fluid" alt="Upload a picture!" />
                <p id="dogName">{this.props.dogName}</p>
            </div>
        )
    }
}