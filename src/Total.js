import React from 'react';
import './App.css';

class Total extends React.Component {

    plus = () => {
        if (this.props.state.numbers < this.props.state.maxNumber)
        { let newNumberPlus = ++this.props.state.numbers;
            this.props.plusCall(newNumberPlus)}

    };

    minus = () => {
        if (this.props.state.numbers > this.props.state.minNumber)
        {let newNumberMinus = this.props.state.numbers-1;
            this.props.minusCall(newNumberMinus)}

    };

    zeroing = () => {
        this.props.zeroingCall()};

    disactivateSettings = () => {
        this.props.disactivateSettingsCall()
    };

    warnShow = <img src='https://www.meme-arsenal.com/memes/94e180e108739d4d26641d17a96f982f.jpg'/>
    enterValue = "Enter values";

    render = () => {
        const disactTotal = this.props.state.SetupActive ? "one noactive" : "one";
        const showTotal = this.props.state.SetupActive ? this.enterValue : this.props.state.numbers;

        return (
            <div className="App">
                <div className={disactTotal}>
                <span onClick={this.disactivateSettings}>
                <h2 className="color">TOTAL</h2>
                </span>
                    { this.props.state.errorAlert
                        ? <h1> {this.warnShow} </h1>
                        : <h1>{showTotal}</h1>
                    }
                    <div> MaxNumber: {this.props.state.maxNumber}
                        <div>
                            MinNumber: {this.props.state.minNumber}
                        </div>
                    </div>
                    <div>
                        <button onClick={this.minus}>Minus</button>
                        <button onClick={this.plus}>Plus</button>
                        <button onClick={this.zeroing}>Reset</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Total;

