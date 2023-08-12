import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'
import Title from "./Title"

const Portfolio = () => {
    return(
        <div className="flex flex-col md:flex-row items-center justify-center m-4">
            <div className="grid grid-cols-1 gap-4 md: grid-cols-1 lg:grid-cols-1">
                <Title>Projects</Title>
                {portfolio.map((project, i) => (
                    <PortfolioItem key={i}
                        title={project.title}
                        imgUrl={project.imgUrl}
                        link={project.link}
                        text={project.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio