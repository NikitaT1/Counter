import React from 'react';
import './App.css';

class Total extends React.Component {

    render = () => {
        const disactTotal = this.state.SetupActive ? "one noactive" : "one";
        const showTotal = this.state.SetupActive ? this.enterValue : this.state.numbers;



        return (
            <div className="commonStyle">
                <div className={disactTotal}>
                <span onClick={this.disactivateSettings}>
                <h2 className="color">TOTAL</h2>
                </span>
                    <h1>{showTotal}</h1>
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

        );
    }
}

export default Total;

