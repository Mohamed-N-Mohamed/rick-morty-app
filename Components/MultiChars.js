import React from 'react'


const MultiChars = ({ characters }) => {

  

  
  return (
    <div className='character flex flex-col items-center justify-center gap-12 py-8 text-white md:flex-row md:flex-wrap'>
    {/* {characters.map(({id, name, status, species, location, image}) => (
      <div className="character-container w-13 bg-black rounded-md" key={id}>
        <div className="card-image ">
          <img src={image} alt="character image"  className='w-30 object-cover'/>
        </div>
        <div className="character-info h-52 py-4 flex flex-col items-center gap-4 text-center mb-4">
            <div className="name-status ">
              <h2 className='text-xl'>{name}:</h2>
              <h3>{status}</h3>
            </div>

            <div className="species">
              <h3 className='text-xl'>Species:</h3>
              <h4>{species}</h4>
            </div>

            

            { <div className="locatin">
              <h4 className='text-xl'>Last seen location:</h4>
              <h5>{location.name}</h5>
            </div> }

            
          </div>
      </div>

    ))} */}

  </div>
  )
}

export default MultiChars