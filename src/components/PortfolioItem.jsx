import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = ({title, imgUrl, link, text}) => {
    return (
        <div className="max-w-md mx-auto bg-slate-75 rounded-xl shadow-md overflow-hidden md:max-w-3xl">
            <div className="md:flex">
                <div className="md:shrink-0 bg-[#F8F9FA]" >
                <img 
                    src={imgUrl}
                    alt="portfolio"
                    className="h-48 w-full object-cover md:h-full md:w-48 "
                />
                </div>
                <div className="p-8">
                <a href={link} target="_blank" rel="noreferrer noopener" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
                <p className="mt-2 text-slate-500">{text}</p>
                </div>
            </div>
            </div>
        // <div className="flex flex-row">
        //     <div className="container border-2 border-stone-900 rounded-md overflow_hidden max-w-fit">
        //         <img 
        //             src={imgUrl}
        //             alt="portfolio"
        //             className="w-full h-36 md:h-48 object-cover cursor-pointer"
        //         />
        //         <div className="w-full p-4">
        //             <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        //             <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
        //                 {stack.map(item => (
        //                     <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
        //                         {item}
        //                     </span>
        //                 ))}
        //             </p>
        //         </div>
        //     </div>
        //     <div className="md:container mx-auto max-w-md text-wrap">
        //         <div className="p-4"> 
        //             {text}
        //         </div>
        //     </div>
        // </div>
    )
}

export default PortfolioItem

{/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div> */}