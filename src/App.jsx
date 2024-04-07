import React from 'react'

import './App.css'
import Playlist from './components/Playlist/Playlist'
import SearchBar from './components/SearchBar/SearchBar'
import SearchReasult from './components/SearchReasult/SearchReasult'
import Track from './components/Track/Track'
import Tracklist from './components/Tracklist/Tracklist'

function App() {

  return (
    <>
      <h1>Hello MaikaLaal</h1>
      <Playlist />
      <SearchBar />
      <SearchReasult />
      <Track />
      <Tracklist />
    </>
  )
}

export default App
