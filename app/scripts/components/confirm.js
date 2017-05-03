import React from 'react';

class Confirm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            prompt: false,
            checked: false
        }

        this.clickHandler = this.clickHandler.bind(this)
        this.confirmHandler = this.confirmHandler.bind(this)
        this.rejectHandler = this.rejectHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            prompt: true
        })
    }

    confirmHandler() {
        this.setState({
            prompt: false,
            checked: true
        })
    }

    rejectHandler() {
        this.setState({
            prompt: false
        })
    }

    render() {
        let isChecked = (this.state.prompt || this.state.checked);
        let isDisabled = (this.state.checked);

        if (this.state.prompt) {
            var popup = (
                <div>
                    <div className = 'modal-backdrop'>
                    </div>
                    <div className = 'modal'>
                        <h1>Did you really read this?</h1>
                        <button className = 'yes' onClick={this.confirmHandler}>Yes</button>
                        <button className = 'no' onClick={this.rejectHandler}>No</button>
                    </div>
                </div>
            )

        }
        return(
            <div className = 'document'>
                <div>
                    <h1>Incredible Header</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
                <div>
                    <label htmlFor = 'checkbox'>confirm</label>
                    <input type= 'checkbox' id = 'checkbox' onClick={this.clickHandler} checked = {isChecked} disabled = {isDisabled} />
                </div>
                {popup}
            </div>
        )
    }
}
export default Confirm
