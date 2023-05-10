import React from 'react'

const Card = (props) => {
    const { name, profession } = props;

    return (
        <div className='card'>
            <h3>{name}</h3>
            <h6>{profession}</h6>
        </div>
    )
}

export default Card