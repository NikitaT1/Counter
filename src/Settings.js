import React from 'react';
import './App.css';

class Settings extends React.Component {

    maxNumberChanged = (e) => {
        let maximum = e.currentTarget.value;
        this.props.maxNumberChangedCall(maximum)
    };

    maxNumberAdd = () => {
        this.props.maxNumberAddCall()
    };

    minNumberChanged = (e) => {
        let minimum = e.currentTarget.value;
        this.props.minNumberChangedCall(minimum)
    };

    minNumberAdd = () => {
        this.props.minNumberAddCall()
    };

    NumberChanged = (e) => {
        let addNum = e.currentTarget.value;
        this.props.NumberChangedCall(addNum)
    };

    NumberAdd = () => {
        this.props.NumberAddCall()
    };

    errorModeOff = () => {
        this.props.errorModeOffCall()
    };

    disactivateTotal = () => {
        this.props.disactivateTotalCall()
    }

    render = () => {

        const disactSettings = this.props.state.SetupActive ? "two" : "two noactive";

        return (
            <div className="commonStyle">
                <div>
                    <div className={disactSettings}>
                <span onClick={this.disactivateTotal}>
                <h2 className="color" onClick={this.errorModeOff}>SETTINGS</h2>
                </span>
                        <input type="number" placeholder="new current Number"
                               onChange={this.NumberChanged} onClick={this.disactivateTotal}/>
                        <button onClick={this.NumberAdd}>AddNum</button>
                        <div>
                            <input type="number" placeholder="new maxNumber"
                                   onChange={this.maxNumberChanged} onClick={this.disactivateTotal}/>
                            <button onClick={this.maxNumberAdd}>AddMax</button>
                            <div>
                                <input type="number" placeholder="new minNumber"
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

export default Settings ;

