import Head from 'next/head'
import { useState, useEffect } from 'react'
import Characters from '../Components/Characters'
import Hero from '../Components/Hero'
import MultiChars from '../Components/MultiChars'


export default function Home() {
  //get multiple characters 1, 2, 3,4 

  const [multipleChars, setMultipleChars] = useState([])
  const [randomNumbers, setRandomNumbers] = useState([])

  console.log(randomNumbers)


  //fetch 3 - 4 characters on load
  
  useEffect(() => {  
    const fetchMultiChars = async ()  => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/1, 10, 20`)
      console.log(data)
      const characters = await data.json()
      console.log(characters)
      //set characters
      setMultipleChars(characters)
    }
    //fetch data
    fetchMultiChars()
  }, [])


  //get random numbers from 1 - 5
  const randomNumber = () => {
    let random = Array.from({length: 3}, () => Math.floor(Math.random() * 10) + 1).join(',')
    //set 3 random numbers    
    setRandomNumbers(String(random)) 
  }




  return (
    <div className='Main-content'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <MultiChars characters={multipleChars}/> 
    </div>
  )
}
