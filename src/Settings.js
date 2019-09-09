import React from 'react';
import './App.css';

class Settings extends React.Component {



    maxNumberChanged = (e) => {

        /*if (e.currentTarget.value > 0)*/
        {this.state.props.setState({inputMax: e.currentTarget.value})}
    };

    maxNumberAdd = () => {
        this.state.props.setState({maxNumber: this.state.props.inputMax})
    };

    minNumberChanged = (e) => {
        this.state.props.setState({inputMin: e.currentTarget.value})};

    minNumberAdd = () => {
        this.state.props.setState({minNumber: this.state.props.inputMin})
    };

    render = () => {

        return (
            <div className="App">
                        <input type="text" placeholder="new maxNumber"
                            onChange={this.maxNumberChanged}/>
                            <button onClick={this.maxNumberAdd}>Add</button>
                            <div>
                            <input type="text" placeholder="new minNumber"
                                   onChange={this.minNumberChanged}/>
                                <button onClick={this.minNumberAdd}>Add</button>
                            </div>
                        </div>

        );
    }
}

export default Settings;

