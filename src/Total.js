import React from 'react';
import './App.css';

class Total extends React.Component {

    enterValue = "Enter values";

    render = () => {
        const disactTotal = this.props.state.SetupActive ? "one noactive" : "one";
        const showTotal = this.props.state.SetupActive ? this.enterValue : this.state.numbers;



        return (
                <div className={disactTotal}>
                <span onClick={this.disactivateSettings}>
                <h2 className="color">TOTAL</h2>
                </span>
                    <h1>{showTotal}</h1>
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

        );
    }
}

export default Total;

