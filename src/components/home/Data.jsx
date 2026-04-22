import React from 'react'
import CTA from './CTA'
import './Data.css'




function Data() {
    return (
        <div className='home__data'>
            <h1 className="home__title animated-text">
            {Array.from("Agnès Somet").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
    
        ))}</h1>
            <h3 className="home__subtitle">Développeuse web</h3>
            <p className="home__description">
                Je souhaite rejoindre une équipe passionnée et humaine, où la collaboration et la créativité sont au cœur du travail, afin de développer des projets web modernes, utiles et inspirants.
            </p>
            <CTA />
        </div>
    )
}

export default Data