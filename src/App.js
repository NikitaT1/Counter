import React from 'react';
import './App.css';
/*import Settings from "./Settings";*/

class App extends React.Component {

    state = {
        numbers: 0,
        maxNumber: 2,
        minNumber: -2,
        inputMax: 0,
        inputMin: 0,
        addNumbers: 0,
        SetupActive: false,
    };

    plus = () => {
        if (this.state.numbers < this.state.maxNumber)
        { let newNumberPlus = ++this.state.numbers;
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
        else {this.setState({inputMin: this.state.maxNumber})}
    };

    maxNumberAdd = (e) => {
        this.setState({maxNumber: (Math.round(this.state.inputMax))});
    };

    minNumberChanged = (e) => {
        if (e.currentTarget.value < 0)
        {this.setState({inputMin: e.currentTarget.value})}
    else {this.setState({inputMin: e.currentTarget.value*-1})}
    };

    minNumberAdd = (e) => {
        this.setState({minNumber: (Math.round(this.state.inputMin))})
    };

    NumberChanged = (e) => {
       this.setState({addNumbers: e.currentTarget.value})
    };

    NumberAdd = (e) => {
        if (this.state.addNumbers < this.state.minNumber || this.state.addNumbers > this.state.maxNumber)
        {alert('Error!')}
        else {
        this.setState({numbers: this.state.addNumbers})}
    };

    render = () => {

        /*const newOne = this.state.SetupActive ? "todoList-task done" : "todoList-task";*/

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
                <h2 className="color">SETTINGS</h2>
                <input type="text" placeholder="new Number"
                       onChange={this.NumberChanged}/>
                <button onClick={this.NumberAdd}>AddMax</button>
                <div>
                    <input type="text" placeholder="new maxNumber"
                           onChange={this.maxNumberChanged}/>
                    <button onClick={this.maxNumberAdd}>AddMax</button>
                    <div>
                    <input type="text" placeholder="new minNumber"
                           onChange={this.minNumberChanged}/>
                    <button onClick={this.minNumberAdd}>AddMin</button>
                </div>
            </div>
            </div>
        );

        return (

                <div class="commonStyle"> {element1}
            <div> {element2} </div> </div>

        );
    }
}

export default App;

