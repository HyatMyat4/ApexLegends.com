import React from 'react'

function About7() {
  return (
    <div className='w-full h-auto  mt-[180px]'>
        <div  id="monospace" className='w-full h-auto frc justify-center text-[30px] font-bold m-auto'>
            <span>EXPLORE MORE</span>
        </div>
        <div className='w-full 1244:w-[1230px] h-full m-auto frc justify-center 1244:justify-between flex-wrap mb-[10px] mt-[40px]'>
            <a href='https://www.ea.com/games/apex-legends/about/characters' className='w-[400px]  h-full fcc mr-0 690:mr-[15px]  1244:mr-0'>
               <img
                src='/apex-grid-tile-about-explore-more-legends.jpg.adapt.crop16x9.652w.jpg'
               />
               <span id="monospace"  className='my-[10px] text-[25px] font-bold'>Lengends</span>
            </a>
            <a href='https://www.ea.com/games/apex-legends/about/characters' className='w-[400px] h-full fcc '>
               <img
                src='/apex-grid-tile-about-explore-more-news.jpg.adapt.crop16x9.652w.jpg'
               />
               <span id="monospace"  className='my-[10px] text-[25px] font-bold'>News</span>
            </a>
            <a href='https://www.ea.com/games/apex-legends/about/characters' className='w-[400px] h-full fcc '>
               <img
                src='/apex-grid-tile-about-explore-more-community.jpg.adapt.crop16x9.652w.jpg'
               />
               <span id="monospace"  className='my-[10px] text-[25px] font-bold'>Community</span>
            </a>
        </div>
    </div>
  )
}

export default About7