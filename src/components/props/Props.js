import React from 'react'

const Props = props => {

    const [name, profession] = props

  return (
    <div>
        <h3>{name}</h3>
        <h4>{profession}</h4>
    </div>
  )
}

export default Props