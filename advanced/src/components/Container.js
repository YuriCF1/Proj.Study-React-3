import React from 'react'

const Container = ({ children, testValue }) => { //Componente dentro de outro
  return (
    <div>
        <h2>Sobre children</h2>
        {children}
        <p>O valor é : {testValue}</p>
    </div>
  )
}

export default Container