import React from 'react'

const ShowUserName = (props) => { //Nome opcional, mas é convenção
  return (
    <div>
        <h2>O nome do usuário é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName