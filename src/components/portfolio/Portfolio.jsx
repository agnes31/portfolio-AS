import React from 'react'
import './portfolio.css'
import AllureSpaVue from '../../assets/portfolio-spa_vue.mp4'
import SpotifySpa from '../../assets/portfolio-spa_spotify.mp4'
import ReactSpa from '../../assets/portfolio-spa_react.mp4'
import LaravelVoyage from '../../assets/portfolio-laravel_voyage.mp4'
import { FiGithub } from 'react-icons/fi'


const data = [
    {
        id: 1,
        video: AllureSpaVue,
        title: "Allure, site e-commerce de produits de beauté",
        description: "Allure est un site e-commerce dédié aux produits de beauté, développé avec Vue.js côté client et Node.js côté serveur, et connecté à une base de données. Il s’agit d’une application monopage (SPA) permettant la mise à jour dynamique du DOM et des données sans rechargement de page. Le site offre des fonctionnalités complètes de type CRUD : ajout, modification, suppression et affichage des produits. Chaque produit contient un nom, une description, un prix, une image et une catégorie. L’ensemble des opérations s’effectue de manière fluide et réactive pour une expérience utilisateur optimisée.",
        tags: "UX/UI, SPA, CRUD",
        languages: "Vue.js, Node.js, JavaScript, SQL",
        github: 'https://github.com/agnes31/SPA_VUE',
    },
    {
        id: 2,
        video: SpotifySpa,
        title: "Spotify, application de découverte musicale",
        description: "Application web monopage (SPA) développée avec Node.js et Express, exploitant l’API Spotify pour afficher des artistes et leurs albums. L’utilisateur peut naviguer entre les artistes et consulter leur discographie sans rechargement de page, offrant une expérience fluide et dynamique. Le projet intègre la gestion des requêtes API, le rendu dynamique des données et une interface responsive avec Bootstrap.",
        tags: "REST API, SPA, Node.js, Express",
        languages: "JavaScript, Node.js, Bootstrap",
         github: 'https://github.com/agnes31/SPA_Spotify',
      
    },
    {
        id: 3,
        video: LaravelVoyage,
        title: 'Voyage Laos',
        description: "Site web de voyages et d'aventures au Laos développé avec Laravel 10 et PHP 8.2. L'utilisateur peut naviguer entre les pages, découvrir des contenus liés aux voyages, et s'inscrire à une newsletter pour recevoir des mises à jour.",
        tags: 'Laravel, PHP, Bootstrap, MySQL',
        languages: 'PHP',
        github: 'https://github.com/agnes31/Laravel_Voyage'
    },
    {
        id: 5,
        video: ReactSpa,
        title: "Application e-commerce (SPA)",
        description: "Développement d’une application e-commerce monopage (SPA) permettant la gestion complète des produits via des opérations CRUD (création, lecture, mise à jour et suppression). Le projet utilise un objet JSON pour simuler une base de données, ainsi qu’un serveur JSON pour reproduire une interaction avec un serveur externe. Les produits incluent des attributs tels que le nom, le prix et la description, avec une mise à jour dynamique de l’interface sans rechargement de page.",
        tags: "React, SPA, CRUD, JSON Server",
        languages: "JavaScript, React",
        github: 'https://github.com/agnes31/SPA_REACT'
    }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, video, title, description, tags, languages, github, demo, poster }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <a href={demo} target='_blank' rel="noreferrer">
                                        <video 
                                        src={video} 
                                        controls 
                                        poster={poster} 
                                        width="100%" 
                                        height="auto"
                                        >
                                        Votre navigateur ne supporte pas la vidéo.
                                        </video>
                                    </a>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-description'>
                                    <p>{description}</p>
                                    <span><strong>Concepts :</strong> {tags}</span>
                                    <span><strong>Languages :</strong> {languages}</span>
                                </div>
                                <div className="portfolio__item-cta">
                                    <a href={github} aria-label='Projet Github' target='_blank' rel="noreferrer"><FiGithub /></a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio