import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        numbers: 0,
        maxNumber: 9,
        minNumber: -9,
        inputMax: 0,
        inputMin: 0
    };

    /*saveState = () => {
        let stateAsString = JSON.stringify (this.state);
        localStorage.setItem ("our-state", stateAsString);
    };*/

    plus = () => {
        if (this.state.numbers <= this.state.maxNumber-1)
        { let newNumberPlus = this.state.numbers+1;
        this.setState({numbers: newNumberPlus})}
        /*else {{this.zeroing()} (alert('too much!'))}*/
    };

    minus = () => {
        if (this.state.numbers >= this.state.minNumber+1)
        {let newNumberMinus = this.state.numbers-1;
        this.setState({numbers: newNumberMinus})}
        /*else {{this.zeroing()} (alert('too less!'))}*/
    };

    zeroing = () => {this.setState({numbers: 0})};

    maxNumberChanged = (e) => {this.setState({inputMax: e.currentTarget.value})};

    maxNumberAdd = () => {this.setState({maxNumber: this.state.inputMax})};


    render = () => {

        const element = (
            <h1>
                {this.state.numbers}
            </h1>
        );

        const element2 = (
            <div>
                MaxNumber: {this.state.maxNumber}
            <div>
                MinNumber: {this.state.minNumber}
            </div>
            </div>
        )

        return (
            <div className="App">
                <div className="one">
                        <h2 className="color">TOTAL</h2>
                        <div>
                        </div>
                    <div className="number">{element}</div>
                    <div>{element2}</div>
                    <div>
                        <button onClick={this.minus}>Minus</button>
                        <button onClick={this.plus}>Plus</button>
                        <button onClick={this.zeroing}>Zeroing</button>
                        <div>
                        <input type="text" placeholder="new maxNumber"
                              /*onChange={this.maxNumberAdd} value={this.state.maxNumber}*/
                            onChange={this.maxNumberChanged}
                        />
                            <button onClick={this.maxNumberAdd}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="two">
                    <div>
                        <input type="text" placeholder="new number"/>
                    </div>
                    <button onClick={()=>{alert("Bum!")}}>Bum!</button>
                    <button onClick={()=>{alert("Bum!")}}>Bum!</button>
                </div>
            </div>
        );
    }
}

export default App;

