import React from 'react'
import './Signup.css'

const newInfo = [
    {
        name: "Blitzkrieg August",
        stake: "1.5K",
        id: 32814329084,
        desc: "Weekly Saturday showdown involving the best players on the site!",
        nextmatch: "in 8 days",
    },
    {
        name: "Monday Madness",
        stake: 50,
        id: 328143489,
        desc: "Daily $50 give up.",
        nextmatch: "in 4 days",
    },
]

const SignupBox = (props) => {
    return (
      <div className='Signupbox-base'>
          <h5>{props.name}</h5>
          <h3><sup>$</sup>{props.stake}</h3>
          <div className='Signupbox-timer'>
              {props.nextmatch}
          </div>
      </div>
    )
  }


const Signup = () => {
    return (
        <div className='Signup-base'>
            <h1>Upcoming Tournaments</h1>
            <div>
                {newInfo.map(item => SignupBox(item))}
            </div>
        </div>
    )
}

export default Signup