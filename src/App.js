import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        numbers: 0,
        maxNumber: 9,
        minNumber: -9
    };

    saveState = (props) => {
        let stateAsString = JSON.stringify (this.state);
        localStorage.setItem ("our-state", stateAsString);
    };

    plus = () => {
        if (this.state.numbers <= this.state.maxNumber)
        { let newNumberPlus = this.state.numbers+1;
        this.setState({numbers: newNumberPlus}, () => {this.saveState()})}
        else {{this.zeroing()} (alert('too much!'))}
    };

    minus = () => {
        if (this.state.numbers >= this.state.minNumber)
        {let newNumberMinus = this.state.numbers-1;
        this.setState({numbers: newNumberMinus}, () => {this.saveState()})}
        else {{this.zeroing()} (alert('too less!'))}
    };

    zeroing = () => {this.setState({numbers: 0}, () => {this.saveState()})};

    putNumber = () => {}

    addNumber = () => {}

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.addNumber()
        }
    };

    render = () => {

        const element = (
            <h1>
                {this.state.numbers}
            </h1>
        );

        return (
            <div className="App">
                <div className="one">
                        <h2 className="color">TOTAL</h2>
                        <div>
                        </div>
                    <div className="number">{element}</div>
                    <div>
                        <button onClick={this.minus}>Minus</button>
                        <button onClick={this.plus}>Plus</button>
                        <button onClick={this.zeroing}>Zeroing</button>
                        <div>
                        <input type="text" placeholder="new number"
                               onChange={()=> {
                                       if (this.value === Number) {
                                           {this.setState({numbers: this.value}, () => {this.saveState()})};
                                       }
                                   }}
                               onKeyPress={this.onKeyPress}
                               value={()=> alert('Bum2!')}
                        />
                            <button onClick={()=> alert('Bum1!')}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

