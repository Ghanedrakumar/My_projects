import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import { CiSearch } from "react-icons/ci";
import Cards from './Components/Cards.jsx';
function App() {
  const [data, setData] = useState([]) //stores API data
  const [inputValue, setinputValue] = useState("") //Take Userinput

  const handleSubmit = async () => {
    // if (inputValue.trim() === "") {
    //   alert("Please enter a word!");
    //   return;
    // }
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );
      if (!response.ok) {
        throw new Error("Word not found.");
      }
      const value = await response.json();
      setData(value);
      console.log(value)
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // Clear data on error
      // alert("Word not found. Please try again!");
    }
  };


  useEffect(() => {
    handleSubmit()
  }, [])

  const handlechange = (e) => {
    setinputValue(e.target.value)
  }

  return (
    <>
<div className="all bg-gray-500 h-full">



      <Navbar />
      <div className="box1 flex justify-center  scroll-mt-16 mt-52 ">
        <div className="box2  flex flex-row gap-16 justify-center items-center ml-5 mr-5">
          <input className='btn w-screen  h-16  border-2 border-black rounded-full pl-6' onChange={handlechange} value={inputValue} type="text" placeholder='Enter any word' />
          <button className='btn bg-blue-500 text-white w-16 h-16 border-2 border-black rounded-full text-4xl flex justify-center items-center' onClick={handleSubmit}><CiSearch /></button>
        </div>
        <span className='text-3xl font-bold ml-10 mt-5 '>Some Details :</span>
<Cards/>
        {
          data.map((item, index) => {
            return (
              <div key={index} className=" box flex flex-col justify-center items-start gap-5 mt-10 text-left ml-10 w-auto p-10">
              
                <p className='text-xl' ><span className=' font-bold'>Word:</span> {item.word}</p>
                <p className='text-xl'><span className=' font-bold'>Phonetics:</span> {item.phonetic}</p>
                <p className='   text-xl'><span className=' font-bold'>Url Of Sources:</span> {item.sourceUrls}</p>
                <div>

                  {item.meanings && item.meanings.length > 0 ? (
                    item.meanings.map((meaning, key) => {
                      return (
                        <div key={key} className="meaning flex flex-col gap-5 pt-2">
                          <p className='text-xl'><span className=' font-bold'>Part Of Speech:</span> {meaning.partOfSpeech}</p>
                          <p className='text-xl flex break-words'><span className=' font-bold'>Definition:</span> {meaning.definitions[0]?.definition}</p>
                          <p className='text-xl'><span className=' font-bold'>Example:</span> {meaning.definitions[0]?.example}</p>

                        </div>
                      );
                    })
                  ) : (
                    <p>No meanings available</p>
                  )}

                </div>
              </div>
            );
          })
        }

         </div >
    </div>
    </>
  )
}

export default App
