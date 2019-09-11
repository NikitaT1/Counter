import React from 'react';
import './App.css';
/*import Total from "./Total";*/

class App extends React.Component {

    state = {
        numbers: 0,
        maxNumber: 3,
        minNumber: -3,
        inputMax: 0,
        inputMin: 0,
        addNumbers: 0,
        SetupActive: false,
        /*wrongNumber: true // doesn't working somehow*/
        errorAlert: false
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
        else {this.setState({inputMax: (Math.abs(e.currentTarget.value))})}
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
        {{this.zeroing()} {this.wrongNumber()}}
        else {
        this.setState({numbers: this.state.addNumbers})}
    };

    wrongNumber = () => {
        {this.disactivateTotal()}
        (alert('WRONG NUMBER!'));
        let newNumber = prompt("Still wrong number!");
        if (newNumber > this.state.minNumber && newNumber < this.state.maxNumber)
        {{this.disactivateSettings()} {this.setState({numbers: newNumber})}}

        else {this.errorModeOn()}
    };

    errorModeOn = () => {
        this.setState({errorAlert: true})
    };
    errorModeOff = () => {
        this.setState({errorAlert: false})
    }


    enterValue = "Enter values";
    warnShow = < img src='https://www.meme-arsenal.com/memes/94e180e108739d4d26641d17a96f982f.jpg'/>;

    render = () => {

        const disactTotal = this.state.SetupActive ? "one noactive" : "one";
        const disactSettings = this.state.SetupActive ? "two" : "two noactive";
        const showTotal = this.state.SetupActive ? this.enterValue : this.state.numbers;
       /*const showWarning = () => {
            if (this.state.SetupActive === true && this.state.wrongNumber === true) {
                return (this.warnShow)}
            else if (this.state.SetupActive === true) {
                return (this.enterValue)}
            else { return (this.state.numbers) }
        };*/

       
        return (
            <div className="commonStyle">
                <div className={disactTotal}>
                <span onClick={this.disactivateSettings}>
                <h2 className="color">TOTAL</h2>
                </span>
                    { this.state.errorAlert
                       ? <h1> {this.warnShow} </h1>
                       : <h1>{showTotal}</h1>
                    }
                    <div> MaxNumber: {this.state.maxNumber}
                        <div>
                            MinNumber: {this.state.minNumber}
                        </div>
                    </div>
                    <div>
                        <button onClick={this.minus}>Minus</button>
                        <button onClick={this.plus}>Plus</button>
                        <button onClick={this.zeroing}>Reset</button>
                    </div>
                </div>
                <div>
                    <div className={disactSettings}>
                <span onClick={this.disactivateTotal}>
                <h2 className="color" onClick={this.errorModeOff}>SETTINGS</h2>
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
                </div>
            </div>

        );
    }
}

export default App;

