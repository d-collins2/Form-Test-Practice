import React, { Component } from 'react';
import RequestForm from './form/RequestForm.js'
import './App.css';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            serviceTypes: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:49567/api/service-types')
        .then(res => res.json())
        .then(response => this.setState({ serviceTypes: response.data }))
    }

    render(){
        return (
            <div>
                <div className="App-header">
                    <h2>Code Challenge</h2>
                </div>
                <RequestForm serviceTypes={this.state.serviceTypes}/>
            </div>
        );
    }
}

export default App;
