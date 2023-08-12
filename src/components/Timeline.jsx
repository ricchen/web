import React from 'react'
import timeline from "../data/timeline"
import TimelineItem from './TimelineItem'
import Title from './Title'

const Timeline = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center my-10 mx-auto">
            <div className="w-full md:max-w-3xl m-4">
                <Title>Timeline</Title>
                {timeline.map((item, i) => (
                    <TimelineItem key={i}
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline