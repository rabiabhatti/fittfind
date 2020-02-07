import * as React from 'react'

import Popup from './Popup'
import { BasketInput } from '../'

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
            return null
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
        const { name, email, password } = this.state;
        const { handleClose } = this.props;

        const enable = name !== '' && password !== '' && email !== '';

        return (
            <Popup title="Sign In" handleClose={handleClose}>
                <BasketInput className='section-basket-address-input' title='Name' onChange={this._onChange} width={100} name='name' value={name} />
                <BasketInput className='section-basket-address-input' title='Email' name='email' width={100} onChange={this._onChange} value={email} />
                <BasketInput className='section-basket-address-input' title='Password' name='password' width={100} onChange={this._onChange} value={password} />
                <button className='section-popup-btn' disabled={!enable}>Sign In</button>
            </Popup>
        )
    }
}

export { SignIn }
