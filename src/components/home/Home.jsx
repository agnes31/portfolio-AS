import React from 'react'
import './home.css'
import Data from "./Data";


const Home = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="home__content">
                    <div className="home__img"></div>
                    <div className="profile__image-container">

                    </div>
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home