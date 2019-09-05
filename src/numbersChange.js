import React from 'react';
import './App.css';


class numbersChange extends React.Component {

    saveState = (props) => {
        let stateAsString = JSON.stringify (this.props.state);
        localStorage.setItem ("our-state", stateAsString);
    };

    plus = (props) => {
        if (this.props.state.numbers <=9)
        { let newNumberPlus = this.props.state.numbers+1;
        this.props.setState({numbers: newNumberPlus}, () => {this.props.saveState()})}
        else {this.zeroing()}
    };

    minus = (props) => {
        if (this.props.state.numbers >= -9)
        {let newNumberMinus = this.props.state.numbers-1;
        this.props.setState({numbers: newNumberMinus}, () => {this.props.saveState()})}
        else {this.zeroing()}
    };


    zeroing = (props) => {this.porps.setState({numbers: 0}, () => {this.props.saveState()})};



    render = () => {

        return (
            <div className="App">
                <div className="one">
                    <div>
                        <button onClick={this.minus}>Minus</button>
                        <button onClick={this.plus}>Plus</button>
                        <button onClick={this.zeroing}>Zeroing</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default numbersChange;

