import React from 'react'

const Message = ({msg}) => {
  return (
    <div>
        <h1>State Lift</h1>
        <p>A mensage é: {msg}</p>
    </div>
  )
}

export default Message