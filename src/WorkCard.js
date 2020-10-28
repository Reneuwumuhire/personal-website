import React from 'react'
import './WorkCard.css'

function WorkCard({ image }, { title }) {
    return (
        <div className="workCard">
            <img src={image} alt={image} />
            <h3>{title}</h3>
        </div>
    )
}

export default WorkCard
