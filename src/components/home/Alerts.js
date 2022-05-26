import React from 'react'
import './Alerts.css'

const alertInfo = [
    {
        name: "Saturday Showdown",
        stake: 500,
        id: 32814329084,
        desc: "Weekly Saturday showdown involving the best players on the site!",
        nextmatch: "01:02:05",
    },
    {
        name: "Monday Madness",
        stake: 50,
        id: 328143489,
        desc: "Daily $50 give up.",
        nextmatch: "Leading 13-7",
    },
]

const AlertBox = (props) => {
  return (
    <div className='Alertbox-base'>
        <h5>{props.name}</h5>
        <h3><sup>$</sup>{props.stake}</h3>
        <div className='Alertbox-timer'>
            {props.nextmatch}
        </div>
    </div>
  )
}

const Alerts = () => {
  return (
    <div className='Alerts-base'>
        <h1>ATTENTION! The following tournaments will start soon...</h1>
        <div>
            {alertInfo.map(item => AlertBox(item))}
        </div>
    </div>
  )
}

export default Alerts