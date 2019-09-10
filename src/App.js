import React from 'react';
import './App.css';
/*import Settings from "./Settings";*/

class App extends React.Component {

    state = {
        numbers: 0,
        maxNumber: 3,
        minNumber: -3,
        inputMax: 0,
        inputMin: 0,
        addNumbers: 0,
        SetupActive: false,
        test: "Bum!"
    };

    plus = () => {
        {this.disactivateSettings()}
        if (this.state.numbers < this.state.maxNumber)
        { let newNumberPlus = ++this.state.numbers;
        this.setState({numbers: newNumberPlus})}
        /*else {{this.zeroing()} (alert('too much!'))}*/
    };

    minus = () => {
        {this.disactivateSettings()}
        if (this.state.numbers > this.state.minNumber)
        {let newNumberMinus = this.state.numbers-1;
        this.setState({numbers: newNumberMinus})}
        /*else {{this.zeroing()} (alert('too less!'))}*/
    };

    zeroing = () => {
        {this.disactivateSettings()}
        this.setState({numbers: 0})};

    disactivateTotal = () => {this.setState({SetupActive: true})};

    disactivateSettings = () => {this.setState({SetupActive: false})};

    maxNumberChanged = (e) => {
        {this.disactivateTotal()}
        if (e.currentTarget.value > 0)
        {this.setState({inputMax: e.currentTarget.value})}
        else {this.setState({inputMin: this.state.maxNumber})}
    };

    maxNumberAdd = (e) => {
        {this.disactivateTotal()}
        this.setState({maxNumber: (Math.round(this.state.inputMax))});
    };

    minNumberChanged = (e) => {
        {this.disactivateTotal()}
        if (e.currentTarget.value < 0)
        {this.setState({inputMin: e.currentTarget.value})}
    else {this.setState({inputMin: e.currentTarget.value*-1})}
    };

    minNumberAdd = (e) => {
        {this.disactivateTotal()}
        this.setState({minNumber: (Math.round(this.state.inputMin))})
    };

    NumberChanged = (e) => {
        {this.disactivateTotal()}
       this.setState({addNumbers: e.currentTarget.value})
    };

    NumberAdd = (e) => {
        {this.disactivateTotal()}
        if (this.state.addNumbers < this.state.minNumber || this.state.addNumbers > this.state.maxNumber)
        {{this.zeroing()} (alert('FUCKING WRONG NUMBER, DUDE!'))}
        else {
        this.setState({numbers: this.state.addNumbers})}
    };


    enterValue = "Enter values";

    render = () => {

        /*const enterValue = "Enter values and press button";*/
        const disactTotal = this.state.SetupActive ? "one noactive" : "one";
        const disactSettings = this.state.SetupActive ? "two" : "two noactive";
        const showTotal = this.state.SetupActive ? this.enterValue : this.state.numbers;

        const element1 = (
            <div className={disactTotal}>
                <span onClick={this.disactivateSettings}>
                <h2 className="color">TOTAL</h2>
                </span>
                <h1>{showTotal}</h1>
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
            <div className={disactSettings}>
                <span onClick={this.disactivateTotal}>
                <h2 className="color">SETTINGS</h2>
                </span>
                <input type="text" placeholder="new Number"
                       onChange={this.NumberChanged} onClick={this.disactivateTotal}/>
                <button onClick={this.NumberAdd}>AddNum</button>
                <div>
                    <input type="text" placeholder="new maxNumber"
                           onChange={this.maxNumberChanged} onClick={this.disactivateTotal}/>
                    <button onClick={this.maxNumberAdd}>AddMax</button>
                    <div>
                    <input type="text" placeholder="new minNumber"
                           onChange={this.minNumberChanged} onClick={this.disactivateTotal}/>
                    <button onClick={this.minNumberAdd}>AddMin</button>
                </div>
            </div>
            </div>
        );

        return (

                <div className="commonStyle"> {element1}
            <div> {element2} </div> </div>

        );
    }
}

export default App;

