import React from 'react';

class NewComp extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            data : ''
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.data
        })
    }

    change = () => {
        this.setState({
            data: { number : this.state.data.number + 2 }
        })
        console.log("in child")
        console.log(this.state.data)
        this.props.func()
    }

    render(props) {

        const { data } = this.state;
        return (
            <div>
                <br/><button onClick={() => { this.change() } }>Click me</button><br/>
                <br/>---------------<br/>
                In Child : { data.number }
                <br/>---------------<br/>
            </div>
        );
    }
}

export default NewComp;