import React from 'react';
import './App.css';
import Settings from "./Settings";
import Total from "./Total";

class App extends React.Component {

    state = {
        numbers: 0,
        maxNumber: 3,
        minNumber: -3,
        inputMax: 0,
        inputMin: 0,
        addNumbers: 0,
        SetupActive: false,
        errorAlert: false
    };

    //Total functions

    plusCall = (newNumberPlus) => {
        {this.disactivateSettingsCall()}
        this.setState({numbers: newNumberPlus})}



    minusCall = (newNumberMinus) => {
        {this.disactivateSettingsCall()}
        this.setState({numbers: newNumberMinus})}


    zeroingCall = () => {
        {this.disactivateSettingsCall()}
        this.setState({numbers: 0})};

    disactivateSettingsCall = () => {this.setState({SetupActive: false})};


    //Settings functions

    disactivateTotalCall = () => {this.setState({SetupActive: true})};

    maxNumberChangedCall = (maximum) => {
        this.disactivateTotalCall()
        if (maximum > 0)
            this.setState({inputMax: maximum})
        else this.setState({inputMax: (Math.abs(maximum))})
    };

    maxNumberAddCall = () => {
        debugger
        {this.disactivateTotalCall()}
        this.setState({maxNumber: (Math.round(this.state.inputMax))});
    };

    minNumberChangedCall = (minimum) => {
        {this.disactivateTotalCall()}
        if (minimum < 0)
        {this.setState({inputMin: minimum})}
        else {this.setState({inputMin: minimum*-1})}
    };

    minNumberAddCall = () => {
        {this.disactivateTotalCall()}
        this.setState({minNumber: (Math.round(this.state.inputMin))})
    };

    NumberChangedCall = (addNum) => {
        {this.disactivateTotalCall()}
        this.setState({addNumbers: addNum})
    };

    NumberAddCall = () => {
        {this.disactivateTotalCall()}
        if (this.state.addNumbers < this.state.minNumber || this.state.addNumbers > this.state.maxNumber)
        {{this.zeroingCall()} {this.wrongNumber()}}
        else {
            this.setState({numbers: this.state.addNumbers})}
    };

    wrongNumber = () => {
        {this.disactivateTotalCall()}
        (alert('WRONG NUMBER!'));
        let newNumber = prompt("Still wrong number!");
        if (newNumber > this.state.minNumber && newNumber < this.state.maxNumber)
        {{this.disactivateSettingsCall()} {this.setState({numbers: newNumber})}}

        else {this.errorModeOn()}
    };

    errorModeOn = () => {
        this.setState({errorAlert: true})
    };
    errorModeOffCall = () => {
        this.setState({errorAlert: false})
    };




    render = () => {


        return (
            <div className="commonStyle">
                <Total state={this.state} disactivateSettingsCall={this.disactivateSettingsCall}
                       plusCall={this.plusCall} minusCall={this.minusCall}
                       zeroingCall={this.zeroingCall}/>
                <Settings state={this.state} disactivateTotalCall={this.disactivateTotalCall} maxNumberChangedCall={this.maxNumberChangedCall}
                          maxNumberAddCall={this.maxNumberAddCall} minNumberChangedCall={this.minNumberChangedCall}
                          minNumberAddCall={this.minNumberAddCall} NumberChangedCall={this.NumberChangedCall}
                          NumberAddCall={this.NumberAddCall} errorModeOffCall={this.errorModeOffCall}
                />

            </div>
        );
    }
}

export default App;


