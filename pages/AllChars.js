import {useState, useEffect} from 'react'
import Characters from '../Components/Characters'

const url = 'https://rickandmortyapi.com/api/character'

export async function getServerSideProps(){
  const res = await fetch(url)
  const data = await res.json()
  return {
    props: {data}
  }
}
const AllChars = ({data}) => {

  //TODO
  //Add pagination 
  //Search Characters
  //Filter charactes 

  
  //characters state
  const {info, results:defaultResults = [] } = data

  const [allCharacters, setallCharacters] = useState(defaultResults)

  const [search, setSearch] = useState('')

  const [nextPage, setNextPage] = useState({
    ...info,
    currentURL: url
  })

  console.log(nextPage)


  const { currentURL } = nextPage


  useEffect(() => {

    if ( currentURL === url ) return;

    const getNextData = async () => {
    try {
      const url = await fetch(currentURL)
      const data = await url.json() 

      setNextPage({
        currentURL,
        //fix this ------ when fetching a character that doesn't exit it will cause the app to crash. 
        ...data.info,  
      })
      setallCharacters(prev => {
        return [
          // ...prev,
          ...data.results
        ]
      })
    } catch (error) {
      alert('Something went wrong')
      console.log(error);
      
    }

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

  //search for a character

  const handleCharacterSearch = (e) => {
    e.preventDefault()

    if(search){
      setNextPage({
        currentURL: `https://rickandmortyapi.com/api/character/?name=${search}`
      })
    } else {
      alert('Type a character')
    }

    

    console.log(search)

  }

  return (
    <div className='all-characters text-center p-4'>
      <h2 className='text-2xl tracking-wider font-semibold pt-4'>All Characters</h2>

      <div className='search'>
      <form className='search-character'>
       
        <input type="text" className='' onChange={(e) => setSearch(e.target.value)}/>
        <button className='' onClick={handleCharacterSearch}>Search for character</button>

      </form>
    </div>

      <Characters characters={allCharacters}/> 
      <div className="button text-2xl">
        <button className='py-4 px-4 rounded bg-black text-white' onClick={addMoreCharacters}>Load More</button>
      </div>
    </div>
  )
}

export default AllChars