import React, { Component } from 'react'

//styles
import './sign-in.styles.scss'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button//CustomButton'

//auth
import { auth, signInWithGoogle } from '../../firebase/Firebase.utils'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.error(error)
    }

    this.setState({ email: '', password: '' })
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
