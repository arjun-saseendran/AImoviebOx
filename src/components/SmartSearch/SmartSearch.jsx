import React from 'react'
import { SmartSearchBar } from '../SmartSerachBar/SmartSearchBar'
import { SmartMovieSuggestions } from '../SmartMovieSuggestions/SmartMovieSuggestions'
import cover from '../../assets/cover.jpg'

export const SmartSearch = () => {
  return (
    <>
   
        <div className="fixed -z-10">
        <img className='h-screen  object-cover '  src={cover} alt="cover-photo" />
      </div>
      <div >
        <SmartSearchBar/>
        <SmartMovieSuggestions/>
    </div>
    </>
  )
}

