import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center p-4 h-screen bg-fixed bg-center bg-cover custom-img text-white' >
      {/* <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'></div> */}
      <div className="hero-section px-8 text-center ">
        <h2 className='text-3xl bold mb-4'>Welcome to the Rick and Morty App</h2>
        <p className='text-xl text-center px-4 '>Here you can learn more about the show and find out about the Characters</p>
      </div>

    </div>
  )
}

export default Hero