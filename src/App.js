import React from 'react';
// import './App.less';
// import { Button } from "antd";
import NewComp from './newComp';

class App extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            data : { number : 2 },
            data1 : ''
        }
    }

    InFirstComponent = () => {
        console.log("in parent " + Math.random())
        console.log(this.state.data)
    }

    newState = () => {
        this.setState({
            data1 : this.state.data
        })
    }

    newStateUpdate = () => {
        this.setState({
            data1: { number : "the value is updated to string"}
        })
    }

    showUpdated = () => {
        console.log(this.state.data);
        console.log(this.state.data1);
    }

    render()
    {
        const { data } = this.state;
        return (
            <>
                <br/>---------------<br/>
                In parent : { data.number }
                <br/>---------------<br/>

                <NewComp data={data} func = {this.InFirstComponent} ></NewComp>

                <button onClick={ this.newState }> Set values to New state Object </button>

                <button onClick={ this.newStateUpdate }> Update values to New state Object </button>

                <button onClick={ this.showUpdated }> Show updated </button>
            </>
        )
    }
}

export default App;
