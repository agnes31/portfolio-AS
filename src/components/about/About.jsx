import React from 'react'
import './about.css'
import ME from '../../assets/1.jpg'
import { FaAward } from 'react-icons/fa'
import { IoMdSchool } from 'react-icons/io'
import CV from '../../assets/Fr_CV.pdf'

const About = () => {
    return (
        <section id='about'>
            <h2>À propos</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Section A propos" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                    <article className='about__card'>
                            <IoMdSchool className='about__icon' />
                            <h5>Éducation</h5>
                            <small>AEC Conception et Développement de sites web</small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Expérience</h5>
                            <small>1 an formation Fullstack</small>
                        </article>
                    </div>
                    <p>
                        Après plusieurs années dans le domaine de l’hospitalité, à voyager et rencontrer des personnes aux horizons variés, 
                        j’ai développé une grande curiosité et un sens aigu de la créativité. Travailler dans un milieu en constante évolution, 
                        au rythme des besoins et des envies des clients, m’a appris à m’adapter, innover et imaginer des solutions uniques.
                    </p>
                    <p>
                        Attirée depuis toujours par le design et l’esthétique, j’ai naturellement choisi de me réorienter vers le développement web — 
                        un domaine où je peux allier créativité, logique et apprentissage continu. Inspirée aussi par ma famille qui œuvre dans ce secteur, 
                        j’ai appris à créer, à explorer et à comprendre les codes du numérique avec passion.
                    </p>
                    <a href={CV} download className='btn'>Téléchargez mon CV</a>
                </div>
            </div>
        </section >
    )
}

export default About