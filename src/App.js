import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Vinyl from './components/Vinyl'
import AlbumInfo from './components/AlbumInfo'
import Footer from './components/Footer'
import rs500 from './data/RS500.json'
import './App.css';
import themes from './data/themes'

const INITIAL_NUM = Math.floor(Math.random() * 500)



function App() {
  const [randomNum , setRandomNum ] = useState(INITIAL_NUM)
  const [list, setList ] = useState(rs500)
  const [currentAlbum, setCurrentAlbum ] = useState(list[randomNum])
  const [isActive, setIsActive ] = useState(false)
  const [checkedList, setCheckedList ] = useState([])
  const [ theme, setTheme] = useState(themes[0])
  


  // change themes 
  useEffect(() => {
    setTheme(() => {
      if( isActive && randomNum > -1 && randomNum < 100) {
          return themes[0]
      } else if(isActive && randomNum > 99 && randomNum < 200) {
        return themes[1]
      }else if(isActive && randomNum > 199 && randomNum < 300) {
        return themes[2]
      } else if(isActive && randomNum > 299 && randomNum < 400) {
        return themes[3]
      } else if(isActive) {
        return themes[4]
      } else 
      return theme

    })
    
  }, [isActive])



  return (
    <div className="App" style={{backgroundColor: theme.mainColor}} >
      <Nav />
      <Vinyl 
        list={list}
        randomNum={randomNum}
        setRandomNum={setRandomNum}
        isActive={isActive}
        setIsActive={setIsActive}
        setCurrentAlbum={setCurrentAlbum}
        checkedList={checkedList}
      />
      <AlbumInfo 
         theme={theme}
         list={list}
         setList={setList}
        isActive={isActive}
        setIsActive={setIsActive}
        currentAlbum={currentAlbum}
        setCurrentAlbum={setCurrentAlbum}
        randomNum={randomNum}
        checkedList={checkedList}
        setCheckedList={setCheckedList}
      />
      <Footer />
    </div>
  );
}

export default App;
