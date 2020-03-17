import * as React from 'react'

import { BasketInput } from './.'

class SignIn extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            localStorage.setItem('token', 'hello');
        }
    };

    _onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { email, password } = this.state;

        const enable = password !== '' && email !== '';

        return (
            <div>
                <BasketInput className='section-basket-address-input' title='Email' name='email' width={100} onChange={this._onChange} value={email} />
                <BasketInput className='section-basket-address-input' title='Password' name='password' width={100} onChange={this._onChange} value={password} />
                <button className='section-popup-btn' disabled={!enable}>Sign In</button>
            </div>
        )
    }
}

export default SignIn
