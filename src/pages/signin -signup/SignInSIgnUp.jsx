import React from 'react'

//styles
import './sign-in.styles.scss'
import SignIn from '../../components/signin/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const SignInSIgnUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSIgnUp
