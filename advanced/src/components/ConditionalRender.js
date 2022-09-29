import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)

    const conso = () => {
        console.log('É falso');

    }
    return (
    <div>
        <h3>Isso embaixo, será exibido?</h3>
        {x && <p>Se X for 'true', sim!</p>}
        {!x && <p>Se X for 'false', sim!</p>}
        {!x && conso()}
    </div>
  )
}

export default ConditionalRender