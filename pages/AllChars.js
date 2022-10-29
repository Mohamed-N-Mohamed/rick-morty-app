import {useState, useEffect} from 'react'
import MultiChars from '../Components/MultiChars';

const url = 'https://rickandmortyapi.com/api/character'

export async function getServerSideProps(){
  const res = await fetch(url)
  const data = await res.json()
  return {
    props: {data}
  }
}


const AllChars = ({data}) => {
  //characters state
  const {info, results:defaultResults = [] } = data

  const [allCharacters, setallCharacters] = useState(defaultResults)

  const [nextPage, setNextPage] = useState({
    ...info,
    currentURL: url
  })

  console.log(nextPage)


  const { currentURL } = nextPage


  useEffect(() => {

    if ( currentURL === url ) return;

    const getNextData = async () => {
      const url = await fetch(currentURL)
      const data = await url.json()

      setNextPage({
        currentURL,
        ...data.info,
        
      })

      setallCharacters(prev => {
        return [
          ...prev,
          ...data.results
        ]
      })
    }

    //fetch next data
    getNextData()

  }, [currentURL])

  //add more characters when button is clicked
  const addMoreCharacters = () => {
 

    setNextPage(prev => {
      return {
        ...prev,
        currentURL: nextPage.next
      }
    })
  }

  return (
    <div className='all-characters text-center p-4'>
      <h2 className='text-2xl tracking-wider font-semibold pt-4'>All Characters</h2>
      <MultiChars characters={allCharacters}/> 

      <div className="button text-2xl">
        <button className='py-4 px-4 rounded bg-black text-white' onClick={addMoreCharacters}>Load More</button>
      </div>
    </div>
  )
}

export default AllChars