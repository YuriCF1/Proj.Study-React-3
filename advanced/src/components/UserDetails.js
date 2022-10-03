import React from 'react'

const UserDetails = ({name, age}) => {
  return (
    <div>
        <p>Nome: {name}</p>
        <p>Idade: {age} anos</p>
        { age >= 18 ?   
            (<p>{name} pode dirigir</p>) : (<strong>{name} não pode dirigir, pois tem apenas {age} anos</strong>)
        }
    </div>
  )
}

export default UserDetails