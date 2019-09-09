import React from 'react';
import './App.css';
/*import Settings from "./Settings";*/

class App extends React.Component {

    state = {
        numbers: 0,
        maxNumber: 9,
        minNumber: -9,
        inputMax: 0,
        inputMin: 0,
    };

    plus = () => {
        if (this.state.numbers < this.state.maxNumber)
        { let newNumberPlus = this.state.numbers+1;
        this.setState({numbers: newNumberPlus})}
        /*else {{this.zeroing()} (alert('too much!'))}*/
    };

    minus = () => {
        if (this.state.numbers > this.state.minNumber)
        {let newNumberMinus = this.state.numbers-1;
        this.setState({numbers: newNumberMinus})}
        /*else {{this.zeroing()} (alert('too less!'))}*/
    };

    zeroing = () => {this.setState({numbers: 0})};

    maxNumberChanged = (e) => {
        if (e.currentTarget.value > 0)
        {this.setState({inputMax: e.currentTarget.value})}
    };

    maxNumberAdd = () => {
        this.setState({maxNumber: this.state.inputMax})
    };

    minNumberChanged = (e) => {
        if (e.currentTarget.value < 0)
        this.setState({inputMin: e.currentTarget.value})};

    minNumberAdd = () => {
        this.setState({minNumber: this.state.inputMin})
    };

    render = () => {

        const element1 = (
            <div className="one">
                <h2 className="color">TOTAL</h2>
                <h1>{this.state.numbers}</h1>
                    <div> MaxNumber: {this.state.maxNumber} <div>
                            MinNumber: {this.state.minNumber}
                        </div>
                    </div>
                <div>
                    <button onClick={this.minus}>Minus</button>
                    <button onClick={this.plus}>Plus</button>
                    <button onClick={this.zeroing}>Reset</button>
                </div>
            </div>
        );

        const element2 = (
            <div className="two">
                <input type="text" placeholder="new maxNumber"
                       onChange={this.maxNumberChanged}/>
                <button onClick={this.maxNumberAdd}>Add</button>
                <div>
                    <input type="text" placeholder="new minNumber"
                           onChange={this.minNumberChanged}/>
                    <button onClick={this.minNumberAdd}>Add</button>
                </div>
            </div>
        );

        return (

                <div> {element1} {element2} </div>

        );
    }
}

export default App;

